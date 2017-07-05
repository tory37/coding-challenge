import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDriversComponent } from './list-drivers.component';

describe('ListDriversComponent', () => {
  let component: ListDriversComponent;
  let fixture: ComponentFixture<ListDriversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDriversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
