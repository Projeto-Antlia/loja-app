import {
  IsNotEmpty,
  IsNumber,
  IsUUID,
  Length,
  Max,
  Min,
} from 'class-validator';

export class CreateOrderDto {
  @IsUUID()
  customer_id: string;

  @IsNotEmpty()
  @Length(3, 100)
  customer_name: string;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0.01)
  @Max(999999999.99)
  total: number;
  // OrderItem: OrderItem[];
}
