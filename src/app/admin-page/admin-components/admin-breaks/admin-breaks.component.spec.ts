import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBreaksComponent } from './admin-breaks.component';

describe('AdminBreaksComponent', () => {
  let component: AdminBreaksComponent;
  let fixture: ComponentFixture<AdminBreaksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBreaksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBreaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
