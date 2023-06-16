import { randomUUID } from 'crypto';
import { Category } from '../entities/category.entity';
import { CategoryRepository } from './category.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryRepositoryMemory implements CategoryRepository {
  categories: Category[] = [];
  create(category: Category): Category {
    category.id = randomUUID();
    this.categories.push(category);
    return category;
  }

  findAll(): Category[] {
    return this.categories;
  }

  findById(id: string): Category | undefined {
    return this.categories.find((item) => item.id === id);
  }

  update(category: Category): Category {
    if (!category || !category.id) {
      throw new Error("ID's required");
    }
    this.categories.forEach((cat, i) => {
      if (cat.id === category.id) {
        this.categories[i] = category;
      }
    });
    return category;
  }

  remove(id: string): void {
    this.categories = this.categories.filter((cat) => cat.id !== id);
  }
}
