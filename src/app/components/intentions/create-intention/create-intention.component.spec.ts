import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIntentionComponent } from './create-intention.component';

describe('CreateIntentionComponent', () => {
  let component: CreateIntentionComponent;
  let fixture: ComponentFixture<CreateIntentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateIntentionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateIntentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
