import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentDataItemComponent } from './current-data-item.component';

describe('CurrentDataItemComponent', () => {
  let component: CurrentDataItemComponent;
  let fixture: ComponentFixture<CurrentDataItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentDataItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentDataItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
