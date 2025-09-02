import { Injectable } from '@angular/core';
import { INTENTIONS } from '../data/intentions';
import {NewIntention} from '../models/intention.model';

@Injectable({
  providedIn: 'root'
})
export class IntentionsService {
  intentions = INTENTIONS;

  constructor() {
    const intentions = localStorage.getItem('intentions');

    if (intentions) {
      this.intentions = JSON.parse(intentions);
    }
    }

  getIntentionById(id: string) {
      return this.intentions.filter(intention => intention.intentionId === id);
  }

  addIntention(newIntention: NewIntention, id: string) {
    this.intentions.unshift({
      id: crypto.randomUUID(),
      intentionId: id,
      title: newIntention.title,
      summary: newIntention.summary,
      dueDate: newIntention.dueDate
  });
    this.saveIntentionsToLocalStorage();
  }

  deleteIntention(id: string) {
  this.intentions = this.intentions.filter(intention => intention.id !== id);
  this.saveIntentionsToLocalStorage();
  }

  private saveIntentionsToLocalStorage() {
    localStorage.setItem('intentions', JSON.stringify(this.intentions));
  }


}
