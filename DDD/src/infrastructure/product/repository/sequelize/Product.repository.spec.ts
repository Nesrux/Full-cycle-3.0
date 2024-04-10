import { Sequelize } from "sequelize-typescript"
import ProductModel from "./Product.model";
import Product from "../../../../domain/product/entity/Product";
import ProductRepository from "./Product.repository";

describe("Product repository test", () => {
  let sequileze: Sequelize;

  beforeEach(async () => {
    sequileze = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });
    sequileze.addModels([ProductModel]);
    await sequileze.sync();
  });

  afterEach(async () => {
    await sequileze.close();
  });

  it("shold create a product", async () => {
    const productRepository = new ProductRepository()
    const product = new Product("1", "product 1", 100)

    await productRepository.create(product);

    const producModel = await ProductModel.findOne({ where: { id: "1" } })
    expect(producModel.toJSON()).toStrictEqual({
      id: "1",
      name: "product 1",
      price: 100
    })
  })

  it("shold update a product", async () => {
    const productRepository = new ProductRepository()
    const product = new Product("1", "product 1", 100)

    await productRepository.create(product);

    const productModel = await ProductModel.findOne({ where: { id: "1" } })
    expect(productModel.toJSON()).toStrictEqual({
      id: "1",
      name: "product 1",
      price: 100,
    })

    product.changePrice(150);
    product.changename("Elma Maria");

    await productRepository.update(product);
    const productModel2 = await ProductModel.findOne({ where: { id: "1" } })

    expect(productModel2.toJSON()).toStrictEqual({
      id: "1",
      name: "Elma Maria",
      price: 150,
    })
  })

  it("shold find a product", async () => {
    const productRepository = new ProductRepository()
    const product = new Product("1", "product 1", 100)

    await productRepository.create(product);

    const producModel = await ProductModel.findOne({ where: { id: "1" } })

    const foundProduct = await productRepository.find("1");

    expect(producModel.toJSON()).toStrictEqual({
      id: foundProduct.id,
      name: foundProduct.name,
      price: foundProduct.price
    })
  })

  it("shold find all products", async () => {
    const productRepository = new ProductRepository()

    const product1 = new Product("1", "product 1", 100)
    await productRepository.create(product1);

    const product2 = new Product("2", "product 2", 200)
    await productRepository.create(product2);

    const foundProducts = await productRepository.findAll();
    const products = [product1, product2];

    expect(products).toEqual(foundProducts);
  })

})