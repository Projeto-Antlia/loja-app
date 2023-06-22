import { randomUUID } from 'crypto';
import { Image, Product } from '../entities/product.entity';
import { ProductRepository } from './product.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductRepositoryMemory implements ProductRepository {
  products: Product[] = [];

  async create(product: Product): Promise<Product> {
    if (!product) return;
    product.id = randomUUID();
    this.products.push(product);
    return product;
  }

  async findAll(): Promise<Product[]> {
    return this.products;
  }

  async findById(id: string): Promise<Product> {
    if (!id || !id.trim()) return;
    return this.products.find((item) => item.id === id);
  }

  async findByCategoryId(category_id: string): Promise<Product[]> {
    if (!category_id || !category_id.trim()) return;
    return this.products.filter((item) => item.category_id === category_id);
  }

  async update(product: Product): Promise<Product> {
    if (!product || !product.id) return;

    this.products.forEach((prod, i) => {
      if (prod.id === product.id) {
        this.products[i] = product;
      }
    });

    return product;
  }

  async remove(id: string): Promise<void> {
    this.products = this.products.filter((prod) => prod.id !== id);
  }

  async saveImage(product: Product): Promise<void> {
    const isPresent = this.findById(product.id);

    if (isPresent) {
      product.image.id = randomUUID();
      this.update(product);
    }
  }

  async getImage(product_id: string): Promise<Image> {
    const product = await this.findById(product_id);
    return product.image || undefined;
  }
}
