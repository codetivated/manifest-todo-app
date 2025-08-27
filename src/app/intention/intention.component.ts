import { Component } from '@angular/core';
import {INTENTION_CATEGORIES} from '../data/intention-categories';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-intention',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './intention.component.html',
  styleUrl: './intention.component.css'
})

export class IntentionComponent {
  intentions: any[] = [];
  selectedCategory: any = null;
  newIntention: string = '';

  constructor() {
    this.intentions = INTENTION_CATEGORIES.map((intention) => ({
      ...intention,
      imagePath: '../../assets/' + intention.icon
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


