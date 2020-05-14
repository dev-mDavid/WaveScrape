import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { AdminBreaksComponent } from './admin-breaks.component';

// describe('AdminBreaksComponent', () => {
//   let component = AdminBreaksComponent;
  
  
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// })
  

describe('AdminBreaksComponent', () => {
  let component: AdminBreaksComponent;
  let fixture: ComponentFixture<AdminBreaksComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ AdminBreaksComponent ]
  //   })
  //   .compileComponents();
  // }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBreaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


// ORIGINAL, DO NOT MODIFY

// describe('AdminBreaksComponent', () => {
//   let component: AdminBreaksComponent;
//   let fixture: ComponentFixture<AdminBreaksComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ AdminBreaksComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AdminBreaksComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
