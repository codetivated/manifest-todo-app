import { Component, Input } from '@angular/core';
import { IntentionComponent } from "./intention/intention.component";
import { CreateIntentionComponent } from './create-intention/create-intention.component';
import { type NewIntention } from '../../models/intention.model';
import { IntentionsService } from '../../services/intentions.service';

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

  constructor(private intentionsService: IntentionsService) {}

get intentionsList() {
  return this.intentionsService.getIntentionById(this.id);
}

onAddIntention() {
  console.log('Add Intention button clicked');
  this.isAddingIntention = true;
}



onCancel() {
  console.log('Cancel event received');
  this.isAddingIntention = false;
}

}
