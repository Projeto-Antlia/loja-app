import { OrderItem } from './orderItem.entity';

type OrderProps = {
  id?: string;
  customer_id: string;
  customer_name: string;
  total: number;
  OrderItem: OrderItem[];
  created_at?: Date;
};

export class Order {
  id?: string;
  customer_id: string;
  customer_name: string;
  total: number;
  OrderItem: OrderItem[];
  created_at?: Date;

  constructor(props: OrderProps) {
    this.id = props.id;
    this.customer_id = props.customer_id;
    this.customer_name = props.customer_name;
    this.total = props.total;
    this.OrderItem = [];
    this.created_at = props.created_at;
  }

  addItem(orderItem: OrderItem) {
    this.OrderItem.push(orderItem);
  }

  removeItem(orderItem: OrderItem) {
    const index = this.OrderItem.indexOf(orderItem);
    if (index !== -1) {
      this.OrderItem.splice(index, 1);
    }
  }
}
