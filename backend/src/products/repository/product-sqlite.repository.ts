
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Image as ImageModel, Product as ProducModel } from '@prisma/client'
import { Image, Product } from '../entities/product.entity';
import { ProductRepository } from './product.repository';

type ProductModelMapper = ProducModel & {
  category: {
    name: string;
  }
}

@Injectable()
export class ProductRepositorySqlite implements ProductRepository {

  constructor(private readonly prismaService: PrismaService) { }

  async create(product: Product): Promise<Product> {
    const { name, availability, categoryId, price } = product

    const producModel = await this.prismaService.product.create({
      data: {
        name,
        price,
        availability,
        categoryId
      },
      include: {
        category: {
          select: {
            name: true
          }
        }
      },
    })

    return this.#map(producModel)
  }

  async findAll(): Promise<Product[]> {
    const products = await this.prismaService.product.findMany({
      include: {
        category: {
          select: {
            name: true
          }
        }
      },
    });

    return products.map(this.#map);
  }

  async findAllPagination(params: any): Promise<Product[]> {
    const { skip, take } = params;
    
    const products = await this.prismaService.product.findMany({
      skip,
      take,
      include: {
        category: {
          select: {
            name: true
          }
        }
      },
    });

    return products.map(this.#map);
  }

  async findById(id: string): Promise<Product> {
    if (!id) return;

    const producModel = await this.prismaService.product.findFirst({
      where: { id },
      include: {
        category: {
          select: {
            name: true
          }
        }
      },
    })

    return this.#map(producModel)
  }

  async findByCategoryId(categoryId: string): Promise<Product[]> {
    if (!categoryId) return;

    const products = await this.prismaService.product.findMany({
      where: { categoryId },
      include: {
        category: {
          select: {
            name: true
          }
        }
      },
    })

    return products.map(this.#map);
  }

  async update(product: Product): Promise<Product> {
    if (!product || product.id) return;

    const { name, availability, categoryId, price } = product

    const categoryModel = await this.prismaService.product.update({
      where: { id: product.id },
      data: {
        name,
        availability,
        categoryId,
        price
      },
      include: {
        category: {
          select: {
            name: true
          }
        }
      },
    })

    return this.#map(categoryModel)
  }

  async remove(id: string): Promise<void> {
    if (!id) return;

    await this.prismaService.category.delete({ where: { id } })
  }

  async saveImage(product: Product): Promise<void> {
    if (!product || !product.image || !product.image.productId) return;

    const { bytes, mimetype, productId } = product.image

    const imageIsPresent = await this.getImage(productId)
    
    if (imageIsPresent) {
      await this.prismaService.image.delete({ where: { id: imageIsPresent.id } })
    }

    await this.prismaService.image.create({
      data: {
        bytes,
        mimetype,
        productId,
      }
    })
  }

  async getImage(productId: string): Promise<Image> {
    if (!productId) return;
    
    const imageModel = await this.prismaService.image.findFirst({
      where: { productId },
    })

    return this.#mapImage(imageModel);
  }

  #map(producModel: ProductModelMapper) : Product {
    return producModel ? new Product({
      id: producModel.id,
      name: producModel.name,
      price: Number(producModel.price),
      availability: producModel.availability,
      categoryId: producModel.categoryId,
      categoryName: producModel.category.name
    }) : undefined
  }

  #mapImage(imageModel: ImageModel): Image{
    return imageModel ? new Image({
      id: imageModel.id,
      bytes: imageModel.bytes,
      mimetype: imageModel.mimetype,
      productId: imageModel.productId
    }) : undefined
  }
}
