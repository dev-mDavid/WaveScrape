import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentRoutingModule } from './current-routing.module';
import { CurrentComponent } from './current.component';
import { SharedModule } from "../shared/shared.module";

import { BreakListItemComponent } from "./current-components/break-list-item/break-list-item.component";
import { CurrentDataItemListComponent } from './current-components/current-data-item__list/current-data-item.component__list';
import { RegionListItemComponent } from "./current-components/region-list-item/region-list-item.component";

import { PortalModule } from "@angular/cdk/portal";
@NgModule({
  declarations: [
    CurrentComponent, 
    CurrentDataItemListComponent,
    BreakListItemComponent,
    RegionListItemComponent
  ],
  imports: [
    CommonModule,
    CurrentRoutingModule,
    SharedModule,
    PortalModule
  ]
})
export class CurrentModule { }
