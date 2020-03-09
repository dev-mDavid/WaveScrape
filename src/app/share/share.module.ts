import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { ShellComponent } from '../shell/shell.component';
import { MmtListItemComponent } from '../mmt-list-item/mmt-list-item.component';
import { RegionListItemComponent } from '../region-list-item/region-list-item.component';
import { BreakListItemComponent } from '../break-list-item/break-list-item.component';


import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { CurrentDataItemHorizontalScrollComponent } from '../current-data-item__horizontal-scroll/current-data-item__horizontal-scroll.component';

const components = [
  ShellComponent,
  MmtListItemComponent,
  RegionListItemComponent,
  BreakListItemComponent,
  CurrentDataItemHorizontalScrollComponent
];

const modules = [
  CommonModule,
  RouterModule,
  MatToolbarModule,
  MatIconModule,  
  MatMenuModule
];
@NgModule({
  declarations: [...components],
  imports: [ ...modules ],
  exports: [...components, ...modules]
})
export class ShareModule { }
