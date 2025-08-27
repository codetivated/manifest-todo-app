import { Component, Input } from '@angular/core';
import { Intention } from './intention.model';

@Component({
  selector: 'app-intention',
  standalone: true,
  imports: [],
  templateUrl: './intention.component.html',
  styleUrl: './intention.component.css'
})
export class IntentionComponent {
  @Input({required: true}) intention!: Intention;

}
