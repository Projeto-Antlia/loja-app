import { randomUUID } from 'crypto';
import { Category } from '../entities/category.entity';
import { CategoryRepository } from './category.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryRepositoryMemory implements CategoryRepository {
  static categories: Category[] = [];

  create(category: Category): Category {
    category.id = randomUUID();
    CategoryRepositoryMemory.categories.push(category);
    return category;
  }

  findAll(): Category[] {
    return CategoryRepositoryMemory.categories;
  }

  findById(id: string): Category | undefined {
    return CategoryRepositoryMemory.categories.find((item) => item.id === id);
  }

  update(category: Category): Category {
    if (!category || !category.id) {
      throw new Error("ID's required");
    }
    CategoryRepositoryMemory.categories.forEach((cat, i) => {
      if (cat.id === category.id) {
        CategoryRepositoryMemory.categories[i] = category;
      }
    });
    return category;
  }

  remove(id: string): void {
    CategoryRepositoryMemory.categories =
      CategoryRepositoryMemory.categories.filter((cat) => cat.id !== id);
  }
}
