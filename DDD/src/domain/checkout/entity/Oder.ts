import OrderItem from "./Order_Item";

export default class Order {
  private _id: string;
  private _customerId: string;
  private _items: OrderItem[] = [];
  private _total: number;

  constructor(id: string, custumerId: string, items: OrderItem[]) {
    this._id = id;
    this._customerId = custumerId;
    this._items = items
    this._total = this.total();
    this.validate();
  }


  public get items(): OrderItem[] {
    return this._items;
  }
  get customerId(): string {
    return this._customerId;
  }
  get id(): string {
    return this._id;
  }

  total(): number {
    return this._items.reduce((acc, item) => acc + item.price, 0);
  }

  validate(): boolean {
    if (this._id.length === 0) {
      throw new Error("Id is required")
    }
    if (this._customerId.length === 0) {
      throw new Error("CustumerId is required")
    }
    if (this._items.length === 0) {
      throw new Error("itens are required")
    }
    return true;
  }

}


/*Se estiver em agregados diferentes a relação é apenas por Id
porém se estiverem no mesmo agregado, a relação é por objeto*/