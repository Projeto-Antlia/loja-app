import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { CategoryRepository } from './repository/category.repository';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject('CategoryRepository')
    private readonly categoryRepository: CategoryRepository,
  ) {}

  create(createCategoryDto: CreateCategoryDto) {
    const category = new Category({
      name: createCategoryDto.name,
      enable: createCategoryDto.enable,
      show_menu: createCategoryDto.show_menu,
    });

    return this.categoryRepository.create(category);
  }

  findAll(): Category[] {
    return this.categoryRepository.findAll();
  }

  findOne(id: string) {
    const category = this.categoryRepository.findById(id);
    if (!category) {
      throw new Error('Category not found');
    }
    return category;
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const category = this.findOne(id);
    category.enable = updateCategoryDto.enable;
    category.show_menu = updateCategoryDto.show_menu;
    return this.categoryRepository.update(category);
  }

  remove(id: string) {
    this.findOne(id);
    this.categoryRepository.remove(id);
  }
}
