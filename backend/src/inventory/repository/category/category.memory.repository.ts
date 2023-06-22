import { randomUUID } from 'crypto';

import { CategoryRepository } from 'src/inventory/repository';
import { Category } from 'src/inventory/entities';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryRepositoryMemory implements CategoryRepository {
  static categories: Category[] = [];

  async create(category: Category): Promise<Category> {
    category.id = randomUUID();
    CategoryRepositoryMemory.categories.push(category);
    return category;
  }

  async findAll(): Promise<Category[]> {
    return CategoryRepositoryMemory.categories;
  }

  async findById(category_id: string): Promise<Category> {
    return CategoryRepositoryMemory.categories.find(
      (cat) => cat.id === category_id,
    );
  }

  async findByName(name: string): Promise<Category> {
    return CategoryRepositoryMemory.categories.find((cat) => cat.name === name);
  }

  async update(category: Category): Promise<Category> {
    if (!category || !category.id) return;

    CategoryRepositoryMemory.categories.forEach((cat, i) => {
      if (cat.id === category.id) {
        CategoryRepositoryMemory.categories[i] = category;
      }
    });
    return category;
  }

  async remove(category_id: string): Promise<void> {
    CategoryRepositoryMemory.categories =
      CategoryRepositoryMemory.categories.filter(
        (cat) => cat.id !== category_id,
      );
  }
}