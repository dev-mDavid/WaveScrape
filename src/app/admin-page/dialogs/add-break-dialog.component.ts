import { Component, Inject } from '@angular/core';
import {  MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
// import { MatFormField, MatFormFieldControl } from "@angular/material/form-field";
// import { MatInput, MatInputModule } from "@angular/material/input";

@Component({
  selector: 'app-add-break-dialog',
  template: `
    <h1 mat-dialog-title> Add Break to</h1>
    <div mat-dialog-content>
    <p>{{ data.region }} Region</p>
    <mat-form-field>
        <input placeholder="Break's Name" matInput 
        [(ngModel)]="data.break"
        />
        
      </mat-form-field>    
    </div>     
        {{ data.id }}
        
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">
        Cancel
      </button>
      <button mat-button [mat-dialog-close]="data" cdkFocusInitial> 
        Create
      </button>
    </div>
  `,
  styleUrls: ['./dialogs-style-sheet.component.sass']
})
export class AddBreakDialogComponent{

  constructor(
    public dialogRef: MatDialogRef<AddBreakDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  

}
