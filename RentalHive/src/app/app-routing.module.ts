import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentsComponent } from './components/dashboard/equipments/equipments.component';
import { Title } from '@angular/platform-browser';
import { EstimatesComponent } from './components/dashboard/estimates/estimates.component';
import { UsersComponent } from './components/dashboard/users/users.component';
import { UserFormComponent } from './components/dashboard/user-form/user-form.component';
import { ContractsComponent } from './components/dashboard/contracts/contracts.component';
import { RentalRequestFormComponent } from './components/rental-request-form/rental-request-form.component';
import { RentalRequestListComponent } from './components/rental-request-list/rental-request-list.component';

import { EquipmentFormComponent } from './components/dashboard/equipment-form/equipment-form.component';
import { EstimateFormComponent } from './components/dashboard/estimate-form/estimate-form.component';


const routes: Routes = [
  {
    path : 'Equipments',
    component : EquipmentsComponent ,
    title : 'Equipments Page'
  },{
    path: 'Equipments',
    
    title: 'Equipments Page',
    children: [
      { path: 'add', component: EquipmentFormComponent, title: 'Add Equipment Page' }]
  },{
    path: 'Equipments',
    
    title: 'Equipments Page',
    children: [
      { path: 'update', component: EquipmentFormComponent, title: 'Update Equipment Page' }]
  },
  {
    path : 'Estimates',
    component : EstimatesComponent,
    title : 'Estimates Page'
  },{
    path: 'Estimates',
    
    title: 'Estimates Page',
    children: [
      { path: 'add', component: EstimateFormComponent, title: 'Add Estimate Page' }]
  },{
    path: 'Estimates',
    
    title: 'Estimates Page',
    children: [
      { path: 'update', component: EstimateFormComponent, title: 'Update Estimate Page' }]
  },
  {
    path : 'contracts',
    component : ContractsComponent,
    title : 'contracts Page'
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
