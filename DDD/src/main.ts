import Address from "./domain/customer/value-object/Address";
import Customer from "./domain/customer/entity/Customer";
import Order from "./domain/checkout/entity/Oder";
import OrderItem from "./domain/checkout/entity/Order_Item";

// Customer aggregate
let custumer = new Customer("123", "jaumm")
const addres = new Address("rua dois", 2, "123456789", "sao paulo");
custumer.changeAddress(addres);
custumer.activate;

// Order aggregate
const item1 = new OrderItem("1", "item 1", 10, "p1", 1);
const item2 = new OrderItem("2", "item 2", 15, "p2", 2);
const order = new Order("1", "123", [item1, item2]);