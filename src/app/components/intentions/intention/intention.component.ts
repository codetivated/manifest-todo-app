import { Component, inject, Input } from '@angular/core';
import { Intention } from '../../../models/intention.model';
import { DatePipe } from '@angular/common';
import {IntentionsService} from '../../../services/intentions.service';

@Component({
  selector: 'app-intention',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './intention.component.html',
  styleUrl: './intention.component.css'
})
export class IntentionComponent {
  @Input({required: true}) intention!: Intention;
  private intentionsService = inject(IntentionsService);


  onCompleteIntention() {
  this.intentionsService.deleteIntention(this.intention.id);
}
}
