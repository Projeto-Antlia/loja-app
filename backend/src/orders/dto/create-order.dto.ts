import {
  IsNotEmpty,
  IsNumber,
  IsUUID,
  Length,
  Max,
  Min,
} from 'class-validator';

class CreateOrderItemDto {
  @IsUUID()
  product_id: string;

  @IsNotEmpty()
  @Length(3, 100)
  product_name: string;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 0 })
  @Min(1)
  @Max(100)
  quantity: number;
}

export class CreateOrderDto {
  @IsUUID()
  customer_id: string;

  @IsNotEmpty()
  @Length(3, 100)
  customer_name: string;

  // @IsNotEmpty()
  // @IsNumber({ maxDecimalPlaces: 2 })
  // @Min(0.01)
  // @Max(999999999.99)
  // total: number;

  @IsNotEmpty()
  order_items: CreateOrderItemDto[];
}
