import { CategoryRepositoryMemory } from './category.memory.repository';

export const CATEGORY_NAME_PROVIDER = 'CategoryRepository';

export const CategoryRepositoryConfigs = [
  CategoryRepositoryMemory,
  { provide: CATEGORY_NAME_PROVIDER, useExisting: CategoryRepositoryMemory },
];
