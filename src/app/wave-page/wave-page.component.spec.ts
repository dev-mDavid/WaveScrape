import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WavePageComponent } from './wave-page.component';

describe('WavePageComponent', () => {
  let component: WavePageComponent;
  let fixture: ComponentFixture<WavePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WavePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WavePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
