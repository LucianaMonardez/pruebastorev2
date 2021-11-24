
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';

import { AuthentificationRoutingModule } from './authentification-routing.module';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatFormFieldModule,
    SharedModule,
    ReactiveFormsModule,
    AuthentificationRoutingModule,
    MatButtonModule
  ]
})
export class AuthentificationModule { }
