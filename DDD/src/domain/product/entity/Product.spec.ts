import Product from "./Product";

describe("Product unit test", () => {
  it("shold throw erro when id is blank", () => {
    expect(() => {
      const product = new Product("", "product 1", 100)
    }).toThrowError("Id is required");
  })

  it("shold throw error when name is blank", () => {
    expect(() => {
      const product = new Product("1", "", 100)
    }).toThrowError("Name is required");
  })

  it("shold throw error when price is less than zero", () => {
    expect(() => {
      const product = new Product("1", "product1", -1)
    }).toThrowError("price cannot be less than zero");
  })


  it("shold throw error when change name function ", () => {
    expect(() => {
      const product = new Product("1", "produto1", 100)
      product.changename("")
    }).toThrowError("Name is required")
  })

  it("shold change name", () => {
    const product = new Product("1", "produto1", 100)
    const name = "novo_nome_produto"

    product.changename(name)
    expect(product.name).toEqual(name);

  })

  it("throws error when change price function receives negative value", () => {
    expect(() => {
      const product = new Product("1", "produto1", 100)
      product.changePrice(-1);
    }).toThrowError("price cannot be less than zero");
  })

  it("shold change price ", () => {
    const product = new Product("1", "produto1", 100)
    product.changePrice(150)
    expect(product.price).toEqual(150);

  })
})