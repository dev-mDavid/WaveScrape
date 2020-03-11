import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentRoutingModule } from './current-routing.module';
import { CurrentComponent } from './current.component';
import { ShareModule } from "../share/share.module";

import { CurrentDataItemListComponent } from '../current-data-item__list/current-data-item.component__list';

import { PortalModule } from "@angular/cdk/portal";
@NgModule({
  declarations: [
    CurrentComponent, 
    CurrentDataItemListComponent
  ],
  imports: [
    CommonModule,
    CurrentRoutingModule,
    ShareModule,
    PortalModule
  ]
})
export class CurrentModule { }
