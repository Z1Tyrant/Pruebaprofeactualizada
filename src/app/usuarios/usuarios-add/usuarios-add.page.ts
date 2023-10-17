import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';  // Quité 'Router' aquí porque no lo estás usando en este código
import { usuarios } from '../model/usuarios';
import { Router } from '@angular/router';  // Agregué la importación de 'Router' aquí
import { ServiceUsuariosService } from 'src/app/usuarios/service-usuarios.service'

@Component({
  selector: 'app-usuarios-add',
  templateUrl: './usuarios-add.page.html',
  styleUrls: ['./usuarios-add.page.scss'],
})
export class UsuariosAddPage implements OnInit {
  usuariosForm!: FormGroup;
  usuarios: usuarios = {
    id: 0,
    usuario: '',
    correo: '',
    clave: '',
    fechanacimiento: new Date()
  };


  constructor(
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private restApi: ServiceUsuariosService,
    private router: Router  // Asegúrate de tener esta línea y la importación correspondiente arriba
  ) {}


  ngOnInit() {
    this.usuariosForm = this.formBuilder.group({
      usuarios_user: [null, Validators.required],
      usuarios_clave: [null, Validators.required],
      usuarios_email: [null, Validators.required],
      usuarios_fechanacimiento: [null, Validators.required],
    });
  }


  async onFormSubmit() {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });


    await loading.present();


    await this.restApi.addusuarios(this.usuarios).subscribe({
      next: (res) => {
        console.log("Next Addusuarios Page", res);
        loading.dismiss();
        if (res == null) {
          console.log("Next No Agrego, Ress Null ");
          return;
        }


        console.log("Next Agrego SIIIIII Router saltaré ;", this.router);
        this.router.navigate(['/usuarios-list']);
      },
      complete: () => {},
      error: (err) => {
        console.log("Error AddProduct Página", err);
        loading.dismiss();
      }
    });


    console.log("Observe que todo lo del suscribe sale después de este mensaje");
  }
}







