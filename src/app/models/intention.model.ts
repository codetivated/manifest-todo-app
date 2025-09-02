export interface Intention {
  id: string;
  intentionId: string;
  title: string;
  summary: string;
  dueDate: string;
}

export interface NewIntention {
  title: string;
  summary: string;
  dueDate: string;
}
