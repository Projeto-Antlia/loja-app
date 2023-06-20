import { randomUUID } from 'crypto';
import { Product } from '../entities/product.entity';
import { ProductRepository } from './product.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductRepositoryMemory implements ProductRepository {
  products: Product[] = [];
  create(product: Product): Product {
    product.id = randomUUID();
    this.products.push(product);
    return product;
  }
  findAll(): Product[] {
    return this.products;
  }
  findById(id: string): Product | undefined {
    return this.products.find((item) => item.id === id);
  }
  update(product: Product): Product {
    if (!product || !product.id) {
      throw new Error("ID's required");
    }
    this.products.forEach((prod, i) => {
      if (prod.id === product.id) {
        this.products[i] = product;
      }
    });
    return product;
  }
  remove(id: string): void {
    this.products = this.products.filter((prod) => prod.id !== id);
  }
}
