import Customer from "../../customer/entity/Customer";
import Order from "../entity/Oder";
import OrderItem from "../entity/Order_Item";
import OrderService from "./Oder.service";


describe("Order service unit test", () => {
  it("should get total of all orders", () => {
    const item1 = new OrderItem("i1", "item 1", 100, "p1", 1)
    const item2 = new OrderItem("i2", "item 2", 150, "p2", 2)
    const item3 = new OrderItem("i3", "item 3", 80, "p3", 3)

    const order = new Order("o1", "c1", [item1])
    const order2 = new Order("o1", "c1", [item2, item3])

    const total = OrderService.total([order, order2])
    expect(total).toBe(640)
  });

  it("should place an order", () => {
    const customer = new Customer("c1", "custumer 1")
    const item1 = new OrderItem("i1", "item 1", 100, "p1", 1)

    const order = OrderService.placeOrder(customer, [item1]);
    expect(customer.rewardPoints).toBe(50);
    expect(order.total()).toBe(100)
  })

})