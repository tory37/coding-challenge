import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDriverComponent } from './find-driver.component';

describe('FindDriverComponent', () => {
  let component: FindDriverComponent;
  let fixture: ComponentFixture<FindDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
