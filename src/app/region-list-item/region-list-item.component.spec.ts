import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionListItemComponent } from './region-list-item.component';

describe('RegionListItemComponent', () => {
  let component: RegionListItemComponent;
  let fixture: ComponentFixture<RegionListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
