import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCurrentComponent } from './admin-current.component';

describe('AdminCurrentComponent', () => {
  let component: AdminCurrentComponent;
  let fixture: ComponentFixture<AdminCurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
