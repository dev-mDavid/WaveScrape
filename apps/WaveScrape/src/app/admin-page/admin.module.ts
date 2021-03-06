import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from "../shared/shared.module";

import { AdminComponent } from './admin.component';

import { AdminShellComponent } from './admin-shell/admin-shell.component';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminBreaksComponent } from './components-pages/admin-breaks/admin-breaks.component';
import { AddBreakDialogComponent } from './dialogs/add-break-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AdminComponent,
    AdminShellComponent, 
    AdminBreaksComponent, AddBreakDialogComponent, 
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class AdminModule { }
