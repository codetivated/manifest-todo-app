import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentionComponent } from './intention.component';

describe('IntentionComponent', () => {
  let component: IntentionComponent;
  let fixture: ComponentFixture<IntentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntentionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
