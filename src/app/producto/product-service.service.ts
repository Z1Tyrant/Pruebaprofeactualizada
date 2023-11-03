import { Injectable } from '@angular/core';
import { ClProducto } from './model/ClProducto';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const apiUrl = "https://sumativa2.onrender.com/api/productos";
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root' // Define que el servicio estará disponible en toda la aplicación
})
export class ProductServiceService {
  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error("Error en la operación: " + operation, error);
      return of(result as T);
    };
  }

  addProduct(producto: ClProducto): Observable<ClProducto> {
    console.log("Enviando producto para agregar: ", producto);
    return this.http.post<ClProducto>(apiUrl, producto, httpOptions)
      .pipe(
        tap((producto: ClProducto) => console.log('Producto agregado:', producto)),
        catchError(this.handleError<ClProducto>('addProduct'))
      );
  }

  getProducts(): Observable<ClProducto[]> {
    console.log("Obteniendo productos");
    return this.http.get<ClProducto[]>(apiUrl)
      .pipe(
        tap(products => console.log('Productos obtenidos')),
        catchError(this.handleError('getProducts', []))
      );
  }

  getProduct(idProducto: string): Observable<ClProducto> {
    console.log("Obteniendo producto con ID: " + idProducto);
    return this.http.get<ClProducto>(apiUrl + "/" + idProducto)
      .pipe(
        tap(_ => console.log('Producto obtenido con ID: ' + idProducto)),
        catchError(this.handleError<ClProducto>('getProduct'))
      );
  }

  deleteProduct(idProducto: number): Observable<ClProducto> {
    console.log("Eliminando producto con ID: " + idProducto);
    return this.http.delete<ClProducto>(apiUrl + "/" + idProducto, httpOptions)
      .pipe(
        tap(_ => console.log('Producto eliminado con ID: ' + idProducto)),
        catchError(this.handleError<ClProducto>('deleteProduct'))
      );
  }

  updateProduct(idProducto: number, producto: ClProducto): Observable<ClProducto> {
    console.log("Actualizando producto con ID: " + idProducto);
    return this.http.put<ClProducto>(apiUrl + "/" + idProducto, producto, httpOptions)
      .pipe(
        tap(_ => console.log('Producto actualizado con ID: ' + idProducto)),
        catchError(this.handleError<ClProducto>('updateProduct'))
      );
  }
}
