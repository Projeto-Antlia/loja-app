import { Module } from '@nestjs/common';
import { AppService } from './hello-world/app.service';
import { AppController } from './hello-world/app.controller';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { ShareModule } from './_share/share.module';
import { InventoryModule } from './inventory/inventory.module';
import { RouterModule } from '@nestjs/core';

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
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
