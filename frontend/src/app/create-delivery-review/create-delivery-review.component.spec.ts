import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDeliveryReviewComponent } from './create-delivery-review.component';

describe('CreateDeliveryReviewComponent', () => {
  let component: CreateDeliveryReviewComponent;
  let fixture: ComponentFixture<CreateDeliveryReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDeliveryReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDeliveryReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
