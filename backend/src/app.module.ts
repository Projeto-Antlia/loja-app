import { Module } from '@nestjs/common';
import { AppService } from './hello-world/app.service';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { AppController } from './hello-world/app.controller';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CategoriesModule, ProductsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
