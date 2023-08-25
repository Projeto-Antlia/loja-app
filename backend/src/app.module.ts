import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppService } from './hello-world/app.service';
import { AppController } from './hello-world/app.controller';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { ShareModule } from './_share/share.module';
import { InventoryModule } from './inventory/inventory.module';
import { RouterModule } from '@nestjs/core';
import { OrdersModule } from './orders/orders.module';
import { InvoicesModule } from './invoices/invoices.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  imports: [
    PrismaModule,
    ShareModule,
    InventoryModule,
    RouterModule.register([
      {
        path: 'inventory',
        module: InventoryModule,
      },
    ]),
    OrdersModule,
    InvoicesModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
