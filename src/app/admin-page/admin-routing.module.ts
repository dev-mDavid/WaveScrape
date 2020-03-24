import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from "./admin.component";
import { AdminShellComponent } from "./admin-shell/admin-shell.component";
import { AdminCurrentComponent } from "./admin-components/admin-current/admin-current.component";

const routes: Routes = [
  { path: '', component: AdminComponent},
  {path: 'current', component: AdminCurrentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
