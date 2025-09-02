import { Injectable } from '@angular/core';
import { INTENTIONS } from '../data/intentions';
import {NewIntention} from '../models/intention.model';

@Injectable({
  providedIn: 'root'
})
export class IntentionsService {
  intentions = INTENTIONS;


  constructor() { }

  getIntentions(id: string) {
      return this.intentions.filter(intention => intention.intentionId === id);
  }

  addIntention(newIntention: NewIntention, id: string) {
  return this.intentions.unshift({
      id: crypto.randomUUID(),
      intentionId: id,
      title: newIntention.title,
      summary: newIntention.summary,
      dueDate: newIntention.dueDate
  });
  }

  deleteIntention(id: string) {
  this.intentions = this.intentions.filter(intention => intention.id !== id);
  }


}
