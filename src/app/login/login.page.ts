import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private toastCtrl: ToastController
  ) {}

  login() {
    // ... Código de inicio de sesión existente
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top',
    });
    await toast.present();
  }

  crearCuenta() {
    this.showToast('Ingresa tus datos');
    this.router.navigate(['/register']);
  }

  olvidasteContrasena() {
    this.navCtrl.navigateForward(['/recoverpass']);
  }

  administracion() {
    // Aquí es donde realizas la navegación a la página de administración
    this.router.navigate(['/administracion']);
  }

  volver() {
    this.navCtrl.navigateBack(['']);
  }
}
