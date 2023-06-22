import { CategorySqLiteRepository } from './category-sqlite.repository';

export const CATEGORY_NAME_PROVIDER = 'CategoryRepository';

export const CategoryRepositoryConfigs = [
  CategorySqLiteRepository,
  { provide: CATEGORY_NAME_PROVIDER, useExisting: CategorySqLiteRepository },
];
