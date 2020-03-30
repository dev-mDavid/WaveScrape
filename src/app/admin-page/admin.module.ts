import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from "../shared/shared.module";

import { AdminComponent } from './admin.component';

import { AdminShellComponent } from './admin-shell/admin-shell.component';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminBreaksComponent } from './components-pages/admin-breaks/admin-breaks.component';
import { AddBreakDialogComponent } from './dialogs/add-break-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
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
    MatDialogModule
  ]
})
export class AdminModule { }
