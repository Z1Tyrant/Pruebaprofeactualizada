import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { usuarios } from '../model/usuarios';
import { ServiceUsuariosService } from 'src/app/usuarios/service-usuarios.service'


@Component({
  selector: 'app-usuarios-detail',
  templateUrl: './usuarios-detail.page.html',
  styleUrls: ['./usuarios-detail.page.scss'],
})
export class UsuariosDetailPage implements OnInit {


  usuarios: usuarios = {
    id: 0,
    usuario: '',
    correo: '',
    clave: '',
    fechanacimiento: new Date()
  };


  constructor(
    public restApi: ServiceUsuariosService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public route: ActivatedRoute,
    public router: Router
  ) { }


  ngOnInit() {
    this.getusuarios();
  }


  async getusuarios() {
    const idParam = this.route.snapshot.paramMap.get('id');
   
    if (idParam !== null && idParam !== undefined) {
      const usuariosId = +idParam;
     
      const loading = await this.loadingController.create({ message: 'Loading...' });
      await loading.present();


      this.restApi.getusuarios(usuariosId)
        .subscribe({
          next: (res) => {
            console.log("Data *****************");
            console.log(res);
            this.usuarios = res;
            loading.dismiss();
          },
          complete: () => { },
          error: (err) => {
            console.log("Error Detailusuarios Página", err);
            loading.dismiss();
          }
        });
    } else {
      // Handle the case where 'id' is null or undefined
      console.error("ID is null or undefined");
    }
  }


  async delete(id: number) {
    this.presentAlertConfirm(id, 'Confirme la Eliminación, De lo contrario, cancele');
  }


  async presentAlertConfirm(id: number, msg: string) {
    const alert = await this.alertController.create({
      header: 'Warning!',
      message: msg,
      buttons: [
        {
          text: 'Eliminar : ' + id + " OK",
          handler: () => {
            this.deleteConfirmado(id)
          }
        }
      ]
    });
    await alert.present();
  }


  async deleteConfirmado(id: number) {
    alert("Eliminando " + id)
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    await this.restApi.deleteusuarios(id)
      .subscribe({
        next: (res) => {
          console.log("Error Detailusuarios Página", res);
          loading.dismiss();
          this.router.navigate(['/usuarios-list']);
        },
        complete: () => { },
        error: (err) => {
          console.log("Error Detailusuarios Página", err);
          loading.dismiss();
        }
      })
  }
}





