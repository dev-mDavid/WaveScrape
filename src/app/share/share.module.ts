import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from '../shell/shell.component';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
const components = [ShellComponent];

const modules = [
  CommonModule,
  MatToolbarModule,
  MatIconModule,
];
@NgModule({
  declarations: [...components],
  imports: [ ...modules ],
  exports: [...components, ...modules]
})
export class ShareModule { }
