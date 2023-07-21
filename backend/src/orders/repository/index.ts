import { OrderRepository, ORDER_NAME_PROVIDER } from './order.repository';
import { OrderSqliteRepository } from './order-sqlite.repository';

export const OrderRepositoryProvider = {
  provide: ORDER_NAME_PROVIDER,
  useClass: OrderSqliteRepository,
};

export { OrderRepository };
