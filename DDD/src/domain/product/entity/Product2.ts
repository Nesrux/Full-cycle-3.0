import ProductInteface from "./Product.inteface";

export default class ProductB implements ProductInteface {
  private _id: string;
  private _name: string;
  private _price: number;

  /**Essa classe é só para exemplo de criação de factories */
  constructor(id: string, name: string, price: number) {
    this._id = id;
    this._name = name;
    this._price = price
    this.validade();
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }
  get price(): number {
    return this._price * 2;
  }

  validade(): boolean {
    if (this._id.length === 0) {
      throw new Error("Id is required");
    }
    if (this._name.length === 0) {
      throw new Error("Name is required")
    }
    if (this._price < 0) {
      throw new Error("price cannot be less than zero")
    }
    return true;
  }
  changename(name: string) {
    this._name = name;
    this.validade();
  }
  changePrice(price: number) {
    this._price = price;
    this.validade();
  }
}