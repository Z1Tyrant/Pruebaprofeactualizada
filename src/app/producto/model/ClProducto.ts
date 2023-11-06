export class ClProducto {
    idProducto: number;
    codigo: string;
    nombreprod: string;
    precio: number | null;
    cantidad: number;
    fechaNacimiento: Date;
    rut: number;
    dv: string;
    enfermedad: string;
    fonocontacto: number;
    categoria: string;
    editorial: string;
    raza: string;
    edad: number;
    altura: number;
    hrini: string;
    hrfin: string;
    direccion: string;
    fCreacion: Date;
  
    constructor(obj: any) {
      this.idProducto = obj && obj.idProducto || 0;
      this.codigo = obj && obj.codigo || '';
      this.nombreprod = obj && obj.nombreprod || '';
      this.precio = obj && obj.precio || null;
      this.cantidad = obj && obj.cantidad || 0;
      this.fechaNacimiento = obj && new Date(obj.fechaNacimiento) || new Date();
      this.rut = obj && obj.rut || 0;
      this.dv = obj && obj.dv || '';
      this.enfermedad = obj && obj.enfermedad || '';
      this.fonocontacto = obj && obj.fonocontacto || 0;
      this.categoria = obj && obj.categoria || '';
      this.editorial = obj && obj.editorial || '';
      this.raza = obj && obj.raza || '';
      this.edad = obj && obj.edad || 0;
      this.altura = obj && obj.altura || 0;
      this.hrini = obj && obj.hrini || '';
      this.hrfin = obj && obj.hrfin || '';
      this.direccion = obj && obj.direccion || '';
      this.fCreacion = obj && new Date(obj.fCreacion) || new Date();
    }
  }
  