import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from "../shared/shared.module";

import { AdminComponent } from './admin.component';

import { AdminShellComponent } from './admin-shell/admin-shell.component';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminCurrentComponent } from "./admin-components/admin-current/admin-current.component";

@NgModule({
  declarations: [
    AdminComponent,
    AdminShellComponent, 
    AdminCurrentComponent, 
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }