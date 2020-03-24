import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { SharedModule } from "../shared/shared.module";
import { AdminShellComponent } from './admin-shell/admin-shell.component';
import { AdminCurrentComponent } from "./admin-components/admin-current/admin-current.component";
import { AdminComponent } from '../admin/admin.component';

@NgModule({
  declarations: [
    AdminShellComponent, 
    AdminCurrentComponent, AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
