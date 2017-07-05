import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDriverReviewsComponent } from './list-driver-reviews.component';

describe('ListDriverReviewsComponent', () => {
  let component: ListDriverReviewsComponent;
  let fixture: ComponentFixture<ListDriverReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDriverReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDriverReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
