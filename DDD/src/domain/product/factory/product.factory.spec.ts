import ProductFactory from "./product.factory";

describe("product fatory unit test", () => {
  it("should create a product type a", () => {
    const product = ProductFactory.create("a", "product A", 15);
    expect(product.id).toBeDefined();
    expect(product.name).toBe("product A");
    expect(product.price).toBe(15);
    expect(product.constructor.name).toBe("Product")
  })

  it("should create a product type b", () => {
    const product = ProductFactory.create("b", "product B", 15);
    expect(product.id).toBeDefined();
    expect(product.name).toBe("product B");
    expect(product.price).toBe(30);
    expect(product.constructor.name).toBe("ProductB")
  })

  it("shold throw as error when product type is not supported", () =>{
    expect(() =>{
      const product = ProductFactory.create("c", "product B", 15);
      expect(product.id).toBeDefined();
      expect(product.name).toBe("product c");
      expect(product.price).toBe(30);
      expect(product.constructor.name).toBe("ProductC")
  
    }).toThrowError("Product type not supported")  
  })
})