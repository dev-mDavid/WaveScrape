import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from "./admin.component";
import { AdminBreaksComponent } from './admin-components/admin-breaks/admin-breaks.component';

const routes: Routes = [
  { path: '', component: AdminComponent},
  {path: 'breaks', component: AdminBreaksComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
