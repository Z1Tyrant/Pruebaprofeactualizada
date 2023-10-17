import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuariosDetailPageRoutingModule } from './usuarios-detail-routing.module';

import { UsuariosDetailPage } from './usuarios-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuariosDetailPageRoutingModule
  ],
  declarations: [UsuariosDetailPage]
})
export class UsuariosDetailPageModule {}
