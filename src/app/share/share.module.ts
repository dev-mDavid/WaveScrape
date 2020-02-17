import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from '../shell/shell.component';

import { MatToolbarModule } from "@angular/material/toolbar";

const components = [ShellComponent];

const modules = [
  CommonModule,
  MatToolbarModule,
];
@NgModule({
  declarations: [...components],
  imports: [ ...modules ],
  exports: [...components, ...modules]
})
export class ShareModule { }
