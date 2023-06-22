import { ProductSqLiteRepository } from './product-sqlite.repository';

export const PRODUCT_NAME_PROVIDER = 'ProductRepository';

export const ProductRepositoryConfigs = [
  ProductSqLiteRepository,
  { provide: PRODUCT_NAME_PROVIDER, useExisting: ProductSqLiteRepository },
];
