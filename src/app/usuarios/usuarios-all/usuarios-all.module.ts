import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuariosAllPageRoutingModule } from './usuarios-all-routing.module';

import { UsuariosAllPage } from './usuarios-all.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuariosAllPageRoutingModule
  ],
  declarations: [UsuariosAllPage]
})
export class UsuariosAllPageModule {}
