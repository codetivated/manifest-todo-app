import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { type NewIntention } from '../../../models/intention.model';

@Component({
  selector: 'app-create-intention',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-intention.component.html',
  styleUrl: './create-intention.component.css'
})
export class CreateIntentionComponent {
    @Output() cancel = new EventEmitter<void>();
    @Output() create = new EventEmitter<NewIntention>();


  intentionData = {
    title: '',
    summary: '',
    dueDate: '',
  };


  onCancel() {
    this.cancel.emit();
  }

  handleSubmitIntention(form: NgForm) {
    console.log('New intention submitted');
      const newIntention: NewIntention = {
      title: this.intentionData.title,
      summary: this.intentionData.summary,
      dueDate: this.intentionData.dueDate,
    };
    this.create.emit(newIntention);
    form.resetForm();
  }

}
