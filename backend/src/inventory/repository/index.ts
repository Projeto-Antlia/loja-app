import { CategoryRepository } from './category/category.repository';
import { ProductRepository } from './product/product.repository';

// Implementations
import { ProductSqLiteRepository } from './product/product-sqlite.repository';
import { CategorySqLiteRepository } from './category/category-sqlite.repository';

export const CATEGORY_NAME_PROVIDER = 'CategoryRepository';
export const PRODUCT_NAME_PROVIDER = 'ProductRepository';

export const CategoryRepositoryConfigs = [
  CategorySqLiteRepository,
  { provide: CATEGORY_NAME_PROVIDER, useExisting: CategorySqLiteRepository },
];

export const ProductRepositoryConfigs = [
  ProductSqLiteRepository,
  { provide: PRODUCT_NAME_PROVIDER, useExisting: ProductSqLiteRepository },
];

// Interfaces
export { CategoryRepository, ProductRepository };
