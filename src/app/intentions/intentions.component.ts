import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-intentions',
  standalone: true,
  imports: [],
  templateUrl: './intentions.component.html',
  styleUrl: './intentions.component.css'
})
export class IntentionsComponent {
  @Input({required: true}) category!: string;
  @Input({required: true}) id!: string;

}
