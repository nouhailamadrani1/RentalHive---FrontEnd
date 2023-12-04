import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './components/dashboard/head/head.component';
import { ScriptComponent } from './components/dashboard/script/script.component';
import { EquipmentsComponent } from './components/dashboard/equipments/equipments.component';
import { EstimatesComponent } from './components/dashboard/estimates/estimates.component';
import { RentalsComponent } from './components/dashboard/rentals/rentals.component';
import { UsersComponent } from './components/dashboard/users/users.component';
import { ContractsComponent } from './components/dashboard/contracts/contracts.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SideBarComponent } from './components/dashboard/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    ScriptComponent,
    EquipmentsComponent,
    EstimatesComponent,
    RentalsComponent,
    UsersComponent,
    ContractsComponent,
    LandingPageComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
