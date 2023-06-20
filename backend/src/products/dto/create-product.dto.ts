type ProductProps = {
  CategoryID: string;
  name: string;
  price: number;
  quantity: number;
  availability: boolean;
};
export class CreateProductDto {
  CategoryID: string;
  name: string;
  price: number;
  quantity: number;
  availability: boolean;

  constructor(props: ProductProps) {
    this.CategoryID = props.CategoryID;
    this.name = props.name;
    this.price = props.price;
    this.quantity = props.quantity;
    this.availability = props.availability;
  }
}
