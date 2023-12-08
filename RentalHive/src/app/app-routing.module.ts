import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentsComponent } from './components/dashboard/equipments/equipments.component';
import { Title } from '@angular/platform-browser';
import { EstimatesComponent } from './components/dashboard/estimates/estimates.component';
import { UsersComponent } from './components/dashboard/users/users.component';
import { UserFormComponent } from './components/dashboard/user-form/user-form.component';
import { RentalRequestFormComponent } from './components/rental-request-form/rental-request-form.component';
import { RentalRequestListComponent } from './components/rental-request-list/rental-request-list.component';



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
  },
  
  {
    path: 'users',

    title: 'Users Page',
    children: [
      { path: 'add', component: UserFormComponent, title: 'Add User Page' }
    ]
  },
  // {
  //   path: 'users/add',
  //   component: UserFormComponent,
  //   title: 'Add User Page'
  // }
  {
    path: 'rentalrequest',
    component: RentalRequestListComponent
  },
  {
    path: 'rentalrequest',
    children: [
      { path: 'add',
        component: RentalRequestFormComponent,
        title: 'Add Rental Request Page'
      },
      {
        path: ':id',
        component: RentalRequestFormComponent,
        title: 'Edit Rental Request Page'
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
