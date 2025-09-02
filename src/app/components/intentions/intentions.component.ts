import { Component, Input } from '@angular/core';
import { INTENTIONS } from '../../data/intentions';
import { IntentionComponent } from "./intention/intention.component";
import { CreateIntentionComponent } from './create-intention/create-intention.component';
import { type NewIntention } from '../../models/intention.model';

@Component({
  selector: 'app-intentions',
  standalone: true,
  imports: [IntentionComponent, CreateIntentionComponent],
  templateUrl: './intentions.component.html',
  styleUrl: './intentions.component.css'
})
export class IntentionsComponent {
  @Input({required: true}) category!: string;
  @Input({required: true}) id!: string;
  isAddingIntention: boolean = false;

intentions = INTENTIONS;

get filteredIntentions() {
  return this.intentions.filter(intention => intention.intentionId === this.id);
}

onAddIntention() {
  console.log('Add Intention button clicked');
  this.isAddingIntention = true;
}

onCancel() {
  console.log('Cancel event received');
  this.isAddingIntention = false;
}

onCreateIntention(newIntention: NewIntention) {
  console.log('New intention created:', newIntention);

  this.intentions.unshift({
      id: crypto.randomUUID(),
      intentionId: this.id,
      title: newIntention.title,
      summary: newIntention.summary,
      dueDate: newIntention.dueDate
  });
  this.isAddingIntention = false;
}

onIntentionComplete(intentionId: string) {
  console.log('Complete task event received ');
  this.intentions = this.intentions.filter(intention => intention.id !== intentionId);
}

}
