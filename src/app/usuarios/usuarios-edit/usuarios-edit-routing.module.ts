import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { usuariosEditPage} from './usuarios-edit.page';

const routes: Routes = [
  {
    path: '',
    component: usuariosEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosEditPageRoutingModule {}
