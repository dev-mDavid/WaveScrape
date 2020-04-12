import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleSigninDirective } from "./user/google-signin.directive";

@NgModule({
  declarations: [GoogleSigninDirective],
  imports: [
    CommonModule
  ],
  exports: [GoogleSigninDirective]
})
export class CoreModule { }
