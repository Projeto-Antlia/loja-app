import { Product } from '../entities/product.entity';

export interface ProductRepository {
  create(product: Product): Product;
  findAll(): Product[];
  findById(id: string): Product | undefined;
  update(product: Product): Product;
  remove(id: string): void;
}
