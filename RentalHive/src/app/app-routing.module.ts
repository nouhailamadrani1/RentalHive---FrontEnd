import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentsComponent } from './components/dashboard/equipments/equipments.component';
import { Title } from '@angular/platform-browser';
import { EstimatesComponent } from './components/dashboard/estimates/estimates.component';
import { UsersComponent } from './components/dashboard/users/users.component';


const routes: Routes = [
  {
    path : 'Equipments',
    component : EquipmentsComponent ,
    title : 'Equipments Page'
  },
  {
    path : 'Estimates',
    component : EstimatesComponent,
    title : 'Estimates Page'
  },
  { path: 'users',
   component: UsersComponent,
   title : 'Users Page'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
