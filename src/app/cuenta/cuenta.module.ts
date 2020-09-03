import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';

import { CuentaRoutingModule } from './cuenta-routing.module';
import { CuentaComponent } from './cuenta.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';


@NgModule({
  declarations: [CuentaComponent, MyProfileComponent, ProfileEditComponent],
  imports: [
    CommonModule,
    CuentaRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule

  ]
})
export class CuentaModule { }
