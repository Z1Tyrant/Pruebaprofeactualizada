import { Component, OnInit } from '@angular/core';


// Importamos Librerías
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { usuarios } from '../model/usuarios';
//import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ServiceUsuariosService } from 'src/app/usuarios/service-usuarios.service'


@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.page.html',
  styleUrls: ['./usuarios-list.page.scss'],
})
export class UsuariosListPage implements OnInit {


 // Creamos la Variable para el Html
 usuarios: usuarios[] = [];
 // Injectamos Librerias
 constructor(public restApi: ServiceUsuariosService
   , public loadingController: LoadingController
   , public router: Router) { }


 // LLamamos al método que rescata los productos  
 ngOnInit() {
   this.getusuarioss();
 }


 // Método  que rescta los productos
 async  getusuarioss() {
   console.log("Entrando :getusuarios");
   // Crea un Wait (Esperar)
   const loading = await this.loadingController.create({
     message: 'Harrys Loading...'
   });
   // Muestra el Wait
   await loading.present();
   console.log("Entrando :");
   // Obtiene el Observable del servicio
   await this.restApi.  getusuarioss()
     .subscribe({
       next: (res) => {
         console.log("Res:" + res);
 // Si funciona asigno el resultado al arreglo productos
         this.usuarios = res;
         console.log("thisusuarios:",this.usuarios);
         loading.dismiss();
       }
       , complete: () => { }
       , error: (err) => {
 // Si da error, imprimo en consola.
         console.log("Err:" + err);
         loading.dismiss();
       }
     })
 }




}



