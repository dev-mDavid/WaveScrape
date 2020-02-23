import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentRoutingModule } from './current-routing.module';
import { CurrentComponent } from './current.component';
import { ShareModule } from "../share/share.module";

@NgModule({
  declarations: [CurrentComponent],
  imports: [
    CommonModule,
    CurrentRoutingModule,
    ShareModule
  ]
})
export class CurrentModule { }
