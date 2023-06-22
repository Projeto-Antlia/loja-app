import { Image, Product } from '../entities/product.entity';

export interface ProductRepository {
  create(product: Product): Promise<Product>;
  findAll(): Promise<Product[]>;
  findByCategoryId(categoryId: string): Promise<Product[]>
  findById(id: string): Promise<Product>;
  update(product: Product): Promise<Product>;
  remove(id: string): Promise<void>;
  saveImage(product: Product): Promise<void>;
  getImage(productId: string): Promise<Image>
}
