import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { NavHeaderComponent } from '../app/nav-header/nav-header.component'
import { IntentionComponent } from './intention/intention.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, NavHeaderComponent, IntentionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
