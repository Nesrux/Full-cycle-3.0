
import { v4 as uuid } from "uuid"
import Order from "../entity/Oder";
import Customer from "../../customer/entity/Customer";
import OrderItem from "../entity/Order_Item";

export default class OrderService {

  static total(orders: Order[]): number {
    return orders.reduce((acc, order) => acc + order.total(), 0);
  }
  static placeOrder(custumer: Customer, itens: OrderItem[]): Order {
    if (itens.length === 0) {
      throw new Error("Order must have least one iten")
    }
    const order = new Order(uuid(), custumer.id, itens)
    custumer.addRewardPoints(order.total() / 2);

    return order;
  }
}