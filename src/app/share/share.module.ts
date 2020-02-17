import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from '../shell/shell.component';

const components = [];

const modules = [
  CommonModule,
];
@NgModule({
  declarations: [...components, ShellComponent],
  imports: [ ...modules ],
  exports: [...components, ...modules]
})
export class ShareModule { }
