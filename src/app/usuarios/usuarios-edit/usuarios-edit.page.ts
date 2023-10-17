import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { usuarios } from '../model/usuarios';
import { ServiceUsuariosService } from 'src/app/usuarios/service-usuarios.service'


@Component({
  selector: 'app-usuarios-edit',
  templateUrl: './usuarios-edit.page.html',
  styleUrls: ['./usuarios-edit.page.scss'],
})
export class usuariosEditPage implements OnInit {
  usuariosForm!: FormGroup;
  usuarios: usuarios = { id: 0, usuario: '', correo: '', clave: '', fechanacimiento: new Date() };
  id: number = 0;


  constructor(
    public restApi: ServiceUsuariosService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder
  ) {}


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id) {
        this.getusuarios(this.id);
      }
    });


    this.usuariosForm = this.formBuilder.group({
      usuarios_username: [null, Validators.required],
      usuarios_mail: [null, Validators.required],
      usuarios_password: [null, Validators.required],
      usuarios_fechanacimiento: [null, Validators.required],
    });
  }


  async onFormSubmit() {
    console.log('onFormSubmit ID:' + this.id);
    this.usuarios.id = this.id;


    await this.restApi.updateusuarios(this.id, this.usuarios).subscribe({
      next: (res) => {
        let id = res['id'];
        this.router.navigate(['/usuarios-detail/' + this.id]);
      },
      complete: () => {},
      error: (err) => {
        console.log(err);
      },
    });
  }


  async getusuarios(id: number) {
    const loading = await this.loadingController.create({
      message: 'Loading...',
    });


    await loading.present();


    await this.restApi.getusuarios(Number(id)).subscribe({
      next: (data) => {
        console.log('getProductID data****');
        console.log(data);


        this.id = data.id;


        this.usuariosForm.setValue({
          usuarios_username: data.usuario,
          usuarios_mail: data.correo,
          usuarios_password: data.clave,
          usuarios_fechanacimiento: data.fechanacimiento,
        });


        loading.dismiss();
      },
      complete: () => {},
      error: (err) => {
        console.log('getusuariosID Errr****+');
        console.log(err);
        loading.dismiss();
      },
    });
  }


  async presentAlertConfirm(msg: string) {
    const alert = await this.alertController.create({
      header: 'Warning!',
      message: msg,
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            this.router.navigate(['/usuarios-list/']);
          },
        },
      ],
    });
    await alert.present();
  }
}







