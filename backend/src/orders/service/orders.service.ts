import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from '../dto/create-order.dto';
import { UpdateOrderDto } from '../dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createOrderDto: CreateOrderDto) {
    return await this.prismaService.order.create({
      data: {
        customer_id: createOrderDto.customer_id,
        customer_name: createOrderDto.customer_name,
        total: createOrderDto.total,
      },
    });
  }

  async findAll() {
    return await this.prismaService.order.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
