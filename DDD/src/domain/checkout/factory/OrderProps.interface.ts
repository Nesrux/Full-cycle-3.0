export default interface OrderFactoryProps {
  id: string;
  custumerId: string;
  itens: {
    id: string;
    name: string;
    productId: string;
    quantity: number;
    price: number;
  }[]
}