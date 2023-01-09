import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditResidentsComponent } from './add-edit-residents/add-edit-residents.component';
import { Error404Component } from './error404/error404.component';
import { PrikazResidentsComponent } from './prikaz-residents/prikaz-residents.component';

const routes: Routes = [
  {path:'',component:PrikazResidentsComponent},
  {path:'prikaz',component:PrikazResidentsComponent},
  {path:'addedit', component:AddEditResidentsComponent},
  {path:'addedit/:id', component:AddEditResidentsComponent},
  {path:'**',component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
