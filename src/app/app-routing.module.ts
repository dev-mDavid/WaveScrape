import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home-page/home.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'current', loadChildren: () => import('./current-page/current.module').then(m => m.CurrentModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
