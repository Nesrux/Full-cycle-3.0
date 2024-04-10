import Order from "./Oder"
import OrderItem from "./Order_Item";

describe("order unit test", () => {
  it("shold throw error when id is empty", () => {
    expect(() => {
      let order = new Order("", "1", [new OrderItem("a1", "product1", 10, "p1", 1)]);
    }).toThrowError("Id is required");

  })

  it("shold throw error when CustumerId is empty", () => {
    expect(() => {
      let order = new Order("1", "", [new OrderItem("a1", "product1", 10, "p1", 1)]);
    }).toThrowError("CustumerId is required");
  })


  it("shold throw error when lenght is 0", () => {
    expect(() => {
      let order = new Order("1", "1", []);
    }).toThrowError("itens are required");
  })
  it("shold calculate total", () => {
    const items = [new OrderItem("1", "item1", 180, "p1", 2), new OrderItem("2", "item2", 80, "p2", 1),
    new OrderItem("3", "item3", 50, "p3", 4)]

    const totalPrice = items.reduce((acc, item) => acc + item.price, 0)

    const order = new Order("a1", "b1", items)
    const total = order.total();

    expect(total).toBe(totalPrice)

  })

  it("shold throw error if the qtd is greater than 0", () => {
    expect(() => {
      const order = new Order("a1", "b1",
        [new OrderItem("1", "item1", 180, "p1", -2)])
    }).toThrowError("Quantity must be greater than 0")
  })


})