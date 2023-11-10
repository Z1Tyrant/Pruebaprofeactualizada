import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.page.html',
  styleUrls: ['./administracion.page.scss'],
})
export class AdministracionPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  navigateToAddProductPage() {
    // Aquí es donde realizas la navegación a la página de añadir producto
    this.router.navigate(['/product-add']);
    
    // o puedes usar navCtrl para la navegación
    // this.navCtrl.navigateForward('/product-add');
  }
  navigateToProductAllPage() {
    this.router.navigate(['/product-all']);
  }
  navigateToProductListPage() {
    this.router.navigate(['/product-list']);
  }
  navigateToProductDetailPage() {
    this.router.navigate(['/product-detail']);
  }
  navigateToProductEditPage() {
    this.router.navigate(['/product-edit']);
  }
  volver() {
    this.navCtrl.navigateBack(['']);
  }
}
