import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { NavHeaderComponent } from '../app/nav-header/nav-header.component'
import { CategoriesComponent } from './categories/categories.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, NavHeaderComponent, CategoriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {


}
