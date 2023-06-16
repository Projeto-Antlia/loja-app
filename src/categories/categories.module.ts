import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { CategoryRepositoryMemory } from './repository/category.memory.repository';

@Module({
  controllers: [CategoriesController],
  providers: [
    CategoriesService,
    CategoryRepositoryMemory,
    { provide: 'CategoryRepository', useExisting: CategoryRepositoryMemory },
  ],
})
export class CategoriesModule {}
