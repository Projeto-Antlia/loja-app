import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { Category } from '../entities/category.entity';
import { CategoryRepository } from '../repository/category.repository';
import { ResourceNotFoundException } from 'src/@share/resource-not-found-exception';
import { BusinessRuleException } from 'src/@share/business-rule-exception';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject('CategoryRepository')
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {

    console.log(createCategoryDto)

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

  async findOne(id: string): Promise<Category> {
    const category = await this.categoryRepository.findById(id);
    if (!category) throw new ResourceNotFoundException('category');
    return category;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    const category = await this.findOne(id);
    
    // não utilizar o mesmo nome de outra categoria
    if (updateCategoryDto.name !== category.name) {
      await this.#requiredUniqueCategoryName(category.name);
      category.updateName(updateCategoryDto.name);
    }

    category.updateEnable(updateCategoryDto.enable)
    category.updateShowMenu(updateCategoryDto.show_menu)

    return await this.categoryRepository.update(category);
  }

  async remove(id: string): Promise<void> {
    await this.findOne(id);
    await this.categoryRepository.remove(id);
  }

  async #requiredUniqueCategoryName(categoryName: string): Promise<void> {
    const isPresent = await this.categoryRepository.findByName(categoryName)

    if (isPresent) {
      throw new BusinessRuleException('There is already a category registered with this name')
    }
  }
}
