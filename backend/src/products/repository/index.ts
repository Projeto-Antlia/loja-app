import { ProductRepositoryMemory } from './product.memory.repository';

export const PRODUCT_NAME_PROVIDER = 'ProductRepository';

export const ProductRepositoryConfigs = [
  ProductRepositoryMemory,
  { provide: PRODUCT_NAME_PROVIDER, useExisting: ProductRepositoryMemory },
];
