import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Intention } from '../../models/intention.model';

@Component({
  selector: 'app-create-intention',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-intention.component.html',
  styleUrl: './create-intention.component.css'
})
export class CreateIntentionComponent {
    @Input({ required: true }) intentionId!: string;
    @Output() cancel = new EventEmitter<void>();
    @Output() create = new EventEmitter<Intention>();
    isCanceling: boolean = false;


  intentionData = {
    title: '',
    summary: '',
    dueDate: '',
  };


  onCancel() {
    this.isCanceling = true;
    this.cancel.emit();
  }

  handleSubmitIntention(form: NgForm) {
    console.log('New intention submitted');
      const newIntention: Intention = {
      id: crypto.randomUUID(),
      intentionId: this.intentionId,
      title: this.intentionData.title,
      summary: this.intentionData.summary,
      dueDate: this.intentionData.dueDate,
    };
    this.create.emit(newIntention);
    form.resetForm();
  }

}
