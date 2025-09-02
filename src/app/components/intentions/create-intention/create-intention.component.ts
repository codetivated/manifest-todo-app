import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { type NewIntention } from '../../../models/intention.model';
import {IntentionsService} from '../../../services/intentions.service';

@Component({
  selector: 'app-create-intention',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-intention.component.html',
  styleUrl: './create-intention.component.css'
})
export class CreateIntentionComponent {
    @Output() close = new EventEmitter<void>();
    @Output() create = new EventEmitter<NewIntention>();
    @Input({required: true}) id!: string;

    private intentionsService = inject(IntentionsService);

  intentionData = {
    title: '',
    summary: '',
    dueDate: '',
  };


  onCancel() {
    this.close.emit();
  }

  handleSubmitIntention(form: NgForm) {
      const newIntention: NewIntention = {
      title: this.intentionData.title,
      summary: this.intentionData.summary,
      dueDate: this.intentionData.dueDate,
    };
    this.intentionsService.addIntention(newIntention, this.id);
    this.close.emit();
    form.resetForm();
  }

}
