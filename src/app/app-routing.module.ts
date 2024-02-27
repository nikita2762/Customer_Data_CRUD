import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './component/add/add.component';
import { EditComponent } from './component/edit/edit.component';
import { ViewComponent } from './component/view/view.component';
import { WatchComponent } from './component/watch/watch.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'add',component:AddComponent},
  {path:'view',component:ViewComponent},
  {path:'watch',component:WatchComponent},
  {path:'edit/:id',component:EditComponent},
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'dashboard', component: DashboardComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

