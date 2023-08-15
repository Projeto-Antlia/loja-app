import { OrderRepository, ORDER_NAME_PROVIDER } from './order.repository';
import { OrderMysqlRepository } from './order-mysql.repository';
import { OrderSqliteRepository } from './order-sqlite.repository';

const OrderRepositoryProvider = {
  provide: ORDER_NAME_PROVIDER,
  useClass: OrderMysqlRepository,
};

const OrderSqLiteRepositoryProvider = {
  provide: ORDER_NAME_PROVIDER,
  useClass: OrderSqliteRepository,
};

// const OrderInMemoryRepositoryProvider = {
//   provide: ORDER_NAME_PROVIDER,
//   useClass: OrderMysqlRepository,
// };

export {
  OrderRepository,
  OrderRepositoryProvider,
  OrderSqLiteRepositoryProvider,
  // OrderInMemoryRepositoryProvider,
};
