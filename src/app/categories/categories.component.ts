import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Category } from './category.model';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})

export class CategoriesComponent {
@Input({required: true}) category!: Category;
@Output() select = new EventEmitter<string>();
@Input({ required: true }) isSelected?: boolean;



  get imagePath(): string {
    return `../../assets/${this.category.icon}`;
  }

  onSelectCategory() {
    this.select.emit(this.category.id);
  }

}


