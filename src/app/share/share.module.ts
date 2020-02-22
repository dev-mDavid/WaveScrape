import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from '../shell/shell.component';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MmtListItemComponent } from '../mmt-list-item/mmt-list-item.component';
import { MatMenuModule } from "@angular/material/menu";

const components = [
  ShellComponent,
  MmtListItemComponent
];

const modules = [
  CommonModule,
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
