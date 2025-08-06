import { Component } from '@angular/core';
import {INTENTION_CATEGORIES} from './intention-categories';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-intention',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intention.component.html',
  styleUrl: './intention.component.css'
})

export class IntentionComponent {
  intentions: any = INTENTION_CATEGORIES;

  constructor() {
    console.log(this.intentions);
  }

}
