import { Component, Inject } from '@angular/core';
import {  MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-add-break-dialog',
  template: `
    <h1 mat-dialog-title> Title</h1>
    <div mat-dialog-content>
    <p>
      add-break-dialog works!
    </p>
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
