import { ProductRepositorySqlite } from './product-sqlite.repository';

export const PRODUCT_NAME_PROVIDER = 'ProductRepository';

export const ProductRepositoryConfigs = [
  ProductRepositorySqlite,
  { provide: PRODUCT_NAME_PROVIDER, useExisting: ProductRepositorySqlite },
];
