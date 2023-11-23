import { Component } from '@angular/core';

import { NavController, ToastController } from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';
import { user } from '../moldels/user.model';


@Component({
  selector: 'app-registro',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  usuario: string = '';
  contrasena: string = '';
  recontrasena: string = '';
  
  correo: string = '';

  constructor(private navCtrl: NavController,
              private toastCtrl: ToastController,
              private firebaseSvc: FirebaseService) {}

              async enviarRegistro() {
                const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                let mensajeError = '';
              
                if (this.usuario.length < 3) {
                  mensajeError = 'El nombre de usuario debe tener al menos 3 caracteres.';
                } else if (!emailPattern.test(this.correo)) {
                  mensajeError = 'El correo electrónico no es válido.';
                } else if (this.contrasena.length < 8) {
                  mensajeError = 'La contraseña debe tener al menos 8 caracteres.';
                } else if (this.contrasena !== this.recontrasena) {
                  mensajeError = 'Las contraseñas no coinciden.';
                }
              
                if (mensajeError === '') {
                  try {
                    const res = await this.firebaseSvc.signUp({
                      uid: '',
                      name: this.usuario,
                      email: this.correo,
                      password: this.contrasena
                    });
              
                    console.log(res);

                    await this.firebaseSvc.updateUser({displayName: this.usuario})

                    
              
                    // Mostrar un mensaje de éxito
                    this.mostrarToast('Registro exitoso');
              
                    // Redirigir a la página de inicio de sesión u otra página necesaria
                    this.navCtrl.navigateForward(['/login']);
                  } catch (error) {
                    console.log(error);
                  }
                } else {
                  // Mostrar un mensaje de error si los campos no cumplen con los requisitos
                  this.mostrarToast(mensajeError);
                }
              }

  async mostrarToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top',
    });
    await toast.present();
  }
  volver() {
    this.navCtrl.navigateBack(['']);
}
}

