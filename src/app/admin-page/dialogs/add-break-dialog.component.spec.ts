import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBreakDialogComponent } from './add-break-dialog.component';

describe('AddBreakDialogComponent', () => {
  let component: AddBreakDialogComponent;
  let fixture: ComponentFixture<AddBreakDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBreakDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBreakDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
