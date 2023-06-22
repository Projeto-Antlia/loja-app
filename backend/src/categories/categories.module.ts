import { Module } from '@nestjs/common';
import { CategoriesService } from './service/categories.service';
import { CategoriesController } from './controller/categories.controller';
import { CategoryRepositoryConfigs } from './repository';

@Module({
  imports: [],
  controllers: [CategoriesController],
  providers: [CategoriesService, ...CategoryRepositoryConfigs],
  exports: [CategoriesService],
})
export class CategoriesModule {}
