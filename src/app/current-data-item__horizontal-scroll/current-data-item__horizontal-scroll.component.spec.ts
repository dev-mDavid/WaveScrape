import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentDataItemHorizontalScrollComponent } from './current-data-item__horizontal-scroll.component';

describe('CurrentDataItemHorizontalScrollComponent', () => {
  let component: CurrentDataItemHorizontalScrollComponent;
  let fixture: ComponentFixture<CurrentDataItemHorizontalScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentDataItemHorizontalScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentDataItemHorizontalScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
