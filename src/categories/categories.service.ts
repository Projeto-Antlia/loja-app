import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { randomUUID } from 'crypto';

@Injectable()
export class CategoriesService {
  categories: Category[] = [];

  create(createCategoryDto: CreateCategoryDto) {
    const category = new Category({
      id: randomUUID(),
      name: createCategoryDto.name,
      enable: createCategoryDto.enable,
      show_menu: createCategoryDto.show_menu,
    });

    this.categories.push(category);
    return category;
  }

  findAll(): Category[] {
    return this.categories;
  }

  findOne(id: string) {
    const category = this.categories.find((item) => item.id === id);
    if (!category) {
      throw new Error('Category not found');
    }
    return category;
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    //verificar se existe
    // se não existir: lançar erro
    // se existir atualiza
    // retorna o objeto atualizado
    const category = this.findOne(id);

    category.enable = updateCategoryDto.enable;
    category.show_menu = updateCategoryDto.show_menu;

    this.categories.forEach((cat, i) => {
      if (cat.id === category.id) {
        this.categories[i] = category;
      }
    });
    return category;
  }

  remove(id: string) {
    this.categories = this.categories.filter((cat) => cat.id !== id);
  }
}
