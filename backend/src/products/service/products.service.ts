import { Inject, Injectable } from '@nestjs/common';
import { ProductRepository } from '../repository/product.repository';
import { CategoriesService } from 'src/categories/service/categories.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { Product } from '../entities/product.entity';
import { ResourceNotFoundException } from 'src/@share/resource-not-found-exception';
import { BusinessRuleException } from 'src/@share/business-rule-exception';

@Injectable()
export class ProductsService {

  constructor(
    @Inject('ProductRepository')
    private readonly productRepository: ProductRepository,
    private readonly categoriesService: CategoriesService,
  ) {}
  async create(createProductDto: CreateProductDto) {

    if (!createProductDto.categoryId) {
      throw new BusinessRuleException('categoryId is required!')
    }
    
    const category = await this.categoriesService.findOne(
      createProductDto.categoryId,
    );

    const product = new Product({
      categoryId: category.id,
      categoryName: category.name,
      name: createProductDto.name,
      price: createProductDto.price,
      availability: createProductDto.availability,
    });
    
    return await this.productRepository.create(product);
  }

  async findAll() {
    return await this.productRepository.findAll();
  }

  async findOne(id: string) {
    console.log('id produto', id)
    const product = await this.productRepository.findById(id);
    if (!product) throw new ResourceNotFoundException('Product');
    return product;
  }

  async findAllProductsByCategory(categoryId: string) {
    return await this.productRepository.findByCategoryId(categoryId);
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.findOne(id);

    if (!updateProductDto.categoryId) {
      throw new BusinessRuleException('categoryId is required!')
    }

    if (product.categoryId !== updateProductDto.categoryId) {
        
      const category = await this.categoriesService.findOne(
        updateProductDto.categoryId,
      );

      product.addCategory({ categoryId: category.id, categoryName: category.name })
    }

    product.updateName(updateProductDto.name)
    product.updatePrice(updateProductDto.price)
    product.updateAvailability(updateProductDto.availability)

    return await this.productRepository.update(product);
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.productRepository.remove(id);
  }

  async uploadImage(id: string, file: Express.Multer.File) {
    const product = await this.findOne(id)
    product.addImage(file.buffer, file.mimetype)
    await this.productRepository.saveImage(product);
  }

  async getImage(productId: string) {
    const product = await this.findOne(productId);
    
    const image = await this.productRepository.getImage(product.id);
    if (!image) throw new ResourceNotFoundException('Image');

    return image;
  }
}
