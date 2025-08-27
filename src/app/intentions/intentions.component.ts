import { Component, Input } from '@angular/core';
import { INTENTIONS } from '../data/intentions';
import { IntentionComponent } from "./intention/intention.component";

@Component({
  selector: 'app-intentions',
  standalone: true,
  imports: [IntentionComponent],
  templateUrl: './intentions.component.html',
  styleUrl: './intentions.component.css'
})
export class IntentionsComponent {
  @Input({required: true}) category!: string;
  @Input({required: true}) id!: string;

intentions = INTENTIONS;

get filteredIntentions() {
  return this.intentions.filter(intention => intention.intentionId === this.id);
}

}
