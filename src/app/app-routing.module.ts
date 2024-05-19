/*
    Title: app-routing.module.ts
    Author: Phuong Tran
    Date: 05/05/2024
    Description: Loan App - Capstone Project.
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
