import { InvalidAttributeException } from 'src/_share/invalid-attribute-exception';

type OrderItemProps = {
  id?: string;
  product_id: string;
  product_name: string;
  price: number;
  created_at?: Date;
  updated_at?: Date;
};

export class OrderItem {
  id?: string;
  product_id: string;
  product_name: string;
  quantity: number;
  price: number;
  created_at?: Date;
  updated_at?: Date;

  constructor(props: OrderItemProps) {
    this.id = props.id;
    this.addProduct({ ...props });
    this.created_at = props.created_at;
    this.updated_at = props.updated_at;
  }

  addProduct(props: {
    product_id: string;
    product_name: string;
    price: number;
  }) {
    if (!props.product_id || !props.product_id.trim()) {
      throw new InvalidAttributeException('productId is required');
    }

    if (!props.product_name || !props.product_name.trim()) {
      throw new InvalidAttributeException('productName should not be empty');
    }

    if (!props.price) {
      throw new InvalidAttributeException('price should not be empty');
    }

    this.product_id = props.product_id;
    this.product_name = props.product_name;
    this.price = props.price;
  }
}
