import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { UsuariosEditPageRoutingModule } from './usuarios-edit-routing.module';

import { usuariosEditPage } from './usuarios-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuariosEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [usuariosEditPage]
})
export class UsuariosEditPageModule {}
