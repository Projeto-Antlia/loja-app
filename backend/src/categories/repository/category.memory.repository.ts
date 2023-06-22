import { randomUUID } from 'crypto';
import { Category } from '../entities/category.entity';
import { CategoryRepository } from './category.repository';
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

  async findById(id: string): Promise<Category> {
    return CategoryRepositoryMemory.categories.find((item) => item.id === id);
  }

  async findByName(name: string): Promise<Category> {
    return CategoryRepositoryMemory.categories.find((item) => item.name === name);
  }

  async update(category: Category): Promise<Category> {
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

  async remove(id: string): Promise<void> {
    CategoryRepositoryMemory.categories =
      CategoryRepositoryMemory.categories.filter((cat) => cat.id !== id);
  }
}
