import { Module } from '@nestjs/common';
import {
  CategoryRepositoryConfigs,
  ProductRepositoryConfigs,
} from './repository';
import { ProductsController } from './controller/products.controller';
import { ProductsService } from './service/products.service';

import { CategoriesController } from './controller/categories.controller';
import { CategoriesService } from './service/categories.service';

@Module({
  controllers: [ProductsController, CategoriesController],
  providers: [
    ProductsService,
    CategoriesService,
    ...CategoryRepositoryConfigs,
    ...ProductRepositoryConfigs,
  ],
})
export class InventoryModule {}
