import { Inject, Injectable } from '@nestjs/common';

import { ResourceNotFoundException } from 'src/_share/resource-not-found-exception';
import { BusinessRuleException } from 'src/_share/business-rule-exception';
import { CreateCategoryDto } from 'src/inventory/dto/create-category.dto';
import { UpdateCategoryDto } from 'src/inventory/dto/update-category.dto';
import { CategoryRepository } from 'src/inventory/repository';
import { Category } from 'src/inventory/entities';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject('CategoryRepository')
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    // não cadastrar categoria com o mesmo nome
    await this.#requiredUniqueCategoryName(createCategoryDto.name);

    const category = new Category({
      name: createCategoryDto.name,
      enable: createCategoryDto.enable,
      show_menu: createCategoryDto.show_menu,
    });

    return await this.categoryRepository.create(category);
  }

  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.findAll();
  }

  async findOne(category_id: string): Promise<Category> {
    const category = await this.categoryRepository.findById(category_id);
    if (!category) throw new ResourceNotFoundException('category');
    return category;
  }

  async update(
    category_id: string,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    const category = await this.findOne(category_id);

    // não utilizar o mesmo nome de outra categoria
    if (updateCategoryDto.name !== category.name) {
      await this.#requiredUniqueCategoryName(category.name);
      category.updateName(updateCategoryDto.name);
    }

    category.updateEnable(updateCategoryDto.enable);
    category.updateShowMenu(updateCategoryDto.show_menu);

    return await this.categoryRepository.update(category);
  }

  async remove(category_id: string): Promise<void> {
    await this.findOne(category_id);
    await this.categoryRepository.remove(category_id);
  }

  async #requiredUniqueCategoryName(categoryName: string): Promise<void> {
    const isPresent = await this.categoryRepository.findByName(categoryName);

    if (isPresent) {
      throw new BusinessRuleException(
        'There is already a category registered with this name',
      );
    }
  }
}
