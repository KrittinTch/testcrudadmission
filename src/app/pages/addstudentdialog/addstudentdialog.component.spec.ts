import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstudentdialogComponent } from './addstudentdialog.component';

describe('AddstudentdialogComponent', () => {
  let component: AddstudentdialogComponent;
  let fixture: ComponentFixture<AddstudentdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstudentdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstudentdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
