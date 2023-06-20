import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { CategoryRepositoryConfigs } from './repository';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService, ...CategoryRepositoryConfigs],
  exports: CategoryRepositoryConfigs,
})
export class CategoriesModule {}
