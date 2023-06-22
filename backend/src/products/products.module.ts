import { Module } from '@nestjs/common';

import { CategoriesModule } from 'src/categories/categories.module';
import { ProductRepositoryConfigs } from './repository';
import { ProductsController } from './controller/products.controller';
import { ProductsService } from './service/products.service';
import { CategoryRepositoryConfigs } from 'src/categories/repository';

@Module({
  imports: [CategoriesModule],
  controllers: [ProductsController],
  providers: [
    ProductsService,
    ...CategoryRepositoryConfigs,
    ...ProductRepositoryConfigs,
  ],
})
export class ProductsModule {}
