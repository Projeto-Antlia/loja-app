import { Injectable, Inject } from '@nestjs/common';
import { CreateOrderDto } from '../dto/create-order.dto';
import { ProductsService } from '../../inventory/service/products.service';
import { Order } from '../entities/order.entity';
import { OrderItem } from '../entities/orderItem.entity';
import { OrderRepository } from '../repository/order.repository';
import { ResourceNotFoundException } from 'src/_share/resource-not-found-exception';

@Injectable()
export class OrdersService {
  constructor(
    @Inject('OrderRepository')
    private readonly orderReposity: OrderRepository,
    private readonly productService: ProductsService,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const { customer_id, customer_name, order_items } = createOrderDto;

    const order = new Order({
      customer_id,
      customer_name,
    });

    for (let i = 0; i < order_items.length; i++) {
      const product = await this.productService.findOne(
        order_items[i].product_id,
      );

      const productItem = new OrderItem({
        product_id: product.id,
        product_name: product.name,
        quantity: order_items[i].quantity,
        subtotal: product.price * order_items[i].quantity,
      });

      order.addItem(productItem);
    }

    order.total = order.getTotal();

    return await this.orderReposity.create(order);
  }

  async findAll() {
    return this.orderReposity.findAll();
  }

  async findOne(id: string) {
    const order = this.orderReposity.findById(id);
    if (!order) throw new ResourceNotFoundException('Order');
    return order;
  }
}
