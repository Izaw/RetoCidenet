import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {EmployeService} from './services/employe.service';
import { CommonModule } from '../../node_modules/@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//Rutas
import {routing, appRoutingProviders} from './app.routing';

//Componentes
import { AppComponent } from './app.component';
import { SaveComponent } from './save/save.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    SaveComponent,
    UpdateComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing   
  ],
  
  providers: [
    EmployeService,appRoutingProviders
  ],


  bootstrap: [AppComponent],

  exports: [
    SaveComponent
  ]
})
export class AppModule { }
