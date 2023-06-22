import { CategoryRepository } from './category/category.repository';
import { ProductRepository } from './product/product.repository';

// Implementations
import { ProductSqLiteRepository } from './product/product-sqlite.repository';
import { CategorySqLiteRepository } from './category/category-sqlite.repository';

export const CATEGORY_NAME_PROVIDER = 'CategoryRepository';
export const PRODUCT_NAME_PROVIDER = 'ProductRepository';

export const CategoryRepositoryProvider = {
  provide: CATEGORY_NAME_PROVIDER,
  useClass: CategorySqLiteRepository,
};

export const ProductRepositoryProvider = {
  provide: PRODUCT_NAME_PROVIDER,
  useClass: ProductSqLiteRepository,
};

// Interfaces
export { CategoryRepository, ProductRepository };
