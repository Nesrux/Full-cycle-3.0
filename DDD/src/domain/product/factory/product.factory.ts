import { v4 as uuid } from "uuid";
import Product from "../entity/Product";
import ProductInteface from "../entity/Product.inteface";
import ProductB from "../entity/Product2";
export default class ProductFactory {
  public static create(type: string, name: string, price: number): ProductInteface {

    switch (type) {
      case "a":
        return new Product(uuid(), name, price);
      case "b":
        return new ProductB(uuid(), name, price)
      default: throw new Error("Product type not supported")
    }
  }
}