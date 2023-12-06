import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentsComponent } from './components/dashboard/equipments/equipments.component';
import { Title } from '@angular/platform-browser';
import { EstimatesComponent } from './components/dashboard/estimates/estimates.component';
import { UsersComponent } from './components/dashboard/users/users.component';
import { UserFormComponent } from './components/dashboard/user-form/user-form.component';
import { EquipmentFormComponent } from './components/dashboard/equipment-form/equipment-form.component';



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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
