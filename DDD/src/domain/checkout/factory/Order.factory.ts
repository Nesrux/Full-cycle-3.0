import Order from "../entity/Oder";
import OrderItem from "../entity/Order_Item";
import OrderFactoryProps from "./OrderProps.interface";

export default class OrderFactory {
  public static create(props: OrderFactoryProps): Order {
    const items = props.itens.map(item => {
      return new OrderItem(
        item.id,
        item.name,
        item.price,
        item.productId,
        item.quantity
      );

    });

    return new Order(props.id, props.custumerId, items);
  }
}