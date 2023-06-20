type ProductProps = {
  id?: string;
  CategoryID: string;
  CategoryName: string;
  name: string;
  price: number;
  quantity: number;
  availability: boolean;
};
export class Product {
  id?: string;
  CategoryID: string;
  CategoryName: string;
  name: string;
  price: number;
  quantity: number;
  availability: boolean;

  constructor(props: ProductProps) {
    this.id = props.id;
    this.CategoryID = props.CategoryID;
    this.CategoryName = props.CategoryName;
    this.name = props.name;
    this.price = props.price;
    this.quantity = props.quantity;
    this.availability = props.availability;
  }
}
