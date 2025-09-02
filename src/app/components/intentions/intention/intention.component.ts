import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Intention } from '../../../models/intention.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-intention',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './intention.component.html',
  styleUrl: './intention.component.css'
})
export class IntentionComponent {
  @Input({required: true}) intention!: Intention;
  @Output() completeIntention = new EventEmitter<string>();

  handleOnComplete() {
  this.completeIntention.emit(this.intention.id);
  }
}
