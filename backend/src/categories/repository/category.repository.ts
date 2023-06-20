import { Category } from '../entities/category.entity';

export const CATEGORY_NAME_PROVIDER = 'CategoryRepository';

export interface CategoryRepository {
  create(category: Category): Category;
  findAll(): Category[];
  findById(id: string): Category | undefined;
  update(category: Category): Category;
  remove(id: string): void;
}
