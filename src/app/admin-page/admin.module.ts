import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from "../shared/shared.module";

import { AdminComponent } from './admin.component';

import { AdminShellComponent } from './admin-shell/admin-shell.component';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminCurrentComponent } from "./admin-components/admin-current/admin-current.component";
import { AdminBreaksComponent } from './admin-components/admin-breaks/admin-breaks.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminShellComponent, 
    AdminCurrentComponent, AdminBreaksComponent, 
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
