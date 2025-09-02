import { Component } from '@angular/core';
import { CategoriesComponent } from '../components/categories/categories.component';
import {CATEGORIES} from '../data/categories';
import { IntentionsComponent } from "../components/intentions/intentions.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CategoriesComponent, IntentionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
categories = CATEGORIES;
selectedCategoryId?: string;

onCategorySelected(categoryId: string) {
  console.log('Selected category ID:', categoryId);
  this.selectedCategoryId = categoryId;
}

get selectedCategory() {
  return this.categories.find(category => category.id === this.selectedCategoryId);
}

}
