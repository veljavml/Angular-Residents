import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrikazResidentsComponent } from './prikaz-residents/prikaz-residents.component';
import { AddEditResidentsComponent } from './add-edit-residents/add-edit-residents.component';
import { Error404Component } from './error404/error404.component';
import { from, Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './material/materials/materials.module';
import {MatNativeDateModule} from '@angular/material/core';
import {ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    PrikazResidentsComponent,
    AddEditResidentsComponent,
    Error404Component,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialsModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
