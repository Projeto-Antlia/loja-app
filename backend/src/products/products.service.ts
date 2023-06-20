import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './repository/product.repository';
import { Product } from './entities/product.entity';
import { Category } from 'src/categories/entities/category.entity';
import { CategoryRepository } from 'src/categories/repository/category.repository';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('ProductRepository')
    private readonly productRepository: ProductRepository,
    @Inject('CategoryRepository')
    private readonly categoryRepository: CategoryRepository,
  ) {}
  create(createProductDto: CreateProductDto) {
    const category = this.categoryRepository.findById(
      createProductDto.CategoryID,
    );
    if (!category) {
      throw new Error('Category not found!');
    }

    const product = new Product({
      CategoryID: category.id,
      CategoryName: category.name,
      name: createProductDto.name,
      price: createProductDto.price,
      quantity: createProductDto.quantity,
      availability: createProductDto.availability,
    });
    return this.productRepository.create(product);
  }

  findAll() {
    return this.productRepository.findAll();
  }

  findOne(id: string) {
    const product = this.productRepository.findById(id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    const product = this.findOne(id);

    if (updateProductDto.CategoryID) {
      if (product.CategoryID !== updateProductDto.CategoryID) {
        const category = this.categoryRepository.findById(
          updateProductDto.CategoryID,
        );
        if (!category) {
          throw new Error('Category not found');
        }

        product.CategoryID = category.id;
        product.CategoryName = category.name;
      }
    }

    product.name = updateProductDto.name;
    product.price = updateProductDto.price;
    product.quantity = updateProductDto.quantity;
    product.availability = updateProductDto.availability;

    return this.productRepository.update(product);
  }

  remove(id: string) {
    this.findOne(id);
    this.productRepository.remove(id);
  }
}
