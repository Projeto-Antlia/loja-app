import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { CategoriesModule } from 'src/categories/categories.module';
import { CategoryRepositoryConfigs } from 'src/categories/repository';
import { ProductRepositoryConfigs } from './repository';

@Module({
  imports: [CategoriesModule],
  controllers: [ProductsController],
  providers: [
    ProductsService,
    ...ProductRepositoryConfigs,
    ...CategoryRepositoryConfigs,
  ],
})
export class ProductsModule {}
