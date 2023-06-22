import { Category } from '../entities/category.entity';

export const CATEGORY_NAME_PROVIDER = 'CategoryRepository';

export interface CategoryRepository {
  create(category: Category): Promise<Category>;
  findAll(): Promise<Category[]>;
  findById(id: string): Promise<Category>;
  update(category: Category): Promise<Category>;
  remove(id: string): Promise<void>;
  findByName(name: string): Promise<Category>;
}
