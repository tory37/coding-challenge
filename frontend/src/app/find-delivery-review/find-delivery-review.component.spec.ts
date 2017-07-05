import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDeliveryReviewComponent } from './find-delivery-review.component';

describe('FindDeliveryReviewComponent', () => {
  let component: FindDeliveryReviewComponent;
  let fixture: ComponentFixture<FindDeliveryReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindDeliveryReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindDeliveryReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
