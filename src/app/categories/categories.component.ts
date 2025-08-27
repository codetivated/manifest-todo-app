import { Component } from '@angular/core';
import {CATEGORIES} from '../data/categories';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})

export class CategoriesComponent {
  intentions: any[] = [];
  selectedCategory: any = null;
  newIntention: string = '';

  constructor() {
    this.intentions = CATEGORIES.map((category) => ({
      ...category,
      imagePath: '../../assets/' + category.icon
    }));
    console.log(this.intentions);
  }


  onSelectCategory(category: any) {
    this.selectedCategory = category;
    this.newIntention = '';
  }

  addIntention() {
    if (this.newIntention.trim()) {
      this.selectedCategory.intentions.push(this.newIntention.trim());
      this.newIntention = '';
    }
  }
}


