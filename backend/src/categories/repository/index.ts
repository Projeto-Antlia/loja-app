import { CategoryRepositorySqlite } from './category-sqlite.repository';

export const CATEGORY_NAME_PROVIDER = 'CategoryRepository';

export const CategoryRepositoryConfigs = [
  CategoryRepositorySqlite,
  { provide: CATEGORY_NAME_PROVIDER, useExisting: CategoryRepositorySqlite },
];
