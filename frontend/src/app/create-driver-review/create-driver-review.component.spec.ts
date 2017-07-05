import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDriverReviewComponent } from './create-driver-review.component';

describe('CreateDriverReviewComponent', () => {
  let component: CreateDriverReviewComponent;
  let fixture: ComponentFixture<CreateDriverReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDriverReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDriverReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
