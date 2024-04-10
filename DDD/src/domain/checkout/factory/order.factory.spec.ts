import { v4 as uuid } from "uuid"
import OrderFactory from "./Order.factory";

describe("order factory unit test", () => {
  it("should creat an order", () => {
    const orderProps = {
      id: uuid(),
      custumerId: uuid(),
      itens: [{
        id: uuid(),
        name: "product 1",
        productId: uuid(),
        quantity: 1,
        price: 100
      }]
    };
    const order = OrderFactory.create(orderProps);
    expect(order.id).toEqual(orderProps.id);
    expect(order.customerId).toEqual(orderProps.custumerId);
    expect(order.items.length).toBe(1);

  });

})