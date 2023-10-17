import { Injectable } from '@angular/core';
import {  usuarios} from './model/usuarios';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';




// Importamos  las librerías necesarias
// creamos Constantes que utilizaremos en el envio
const apiUrl = "http://localhost:3000/usuarios";
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };


@Injectable({
  providedIn: 'root'
})
export class ServiceUsuariosService {
  // Injectamos HttpClient, para poder consular una página
  constructor(private http: HttpClient) { }


  // Controla y enviará un mensaje a consola para todos los errores
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error("handleError Harrys", error); // log to console instead
      return of(result as T);
    };
  }


  // Método Agregar usuarios, y devuelve un observable del tipo usuarios
  // Debe ser un Observable si deses suscribir este método en otro lado
  addusuarios(usuarios: usuarios): Observable<usuarios> {
    console.log("Res-api Enviando Addusuarios : ", usuarios);
    // Ojo No lo ejecuta lo declara
    // El Pipe lo intercepta
    return this.http.post<usuarios>(apiUrl, usuarios, httpOptions)
      .pipe(  // Tubería
        // tap intersecta la respuesta si no hay error
        tap((usuarios: usuarios) => console.log('added usuarios w/:', usuarios)),
        // En caso de que ocurra Error
        catchError(this.handleError<usuarios>('addusuarios'))
      );
  }


  // Obtenemos todos los Productos
  getusuarioss(): Observable<usuarios[]> {
    console.log("getusuarioss ()");
    return this.http.get<usuarios[]>(apiUrl)
      .pipe(
        tap(heroes => console.log('fetched usuarioss')),
        catchError(this.handleError('getusuarioss', []))
      );
  }




  //  Obtener un Producto
  getusuarios(id: number): Observable<usuarios> {


    //const url = '${apiUrl}/${id}';
    //return this.http.get<usuarios>(url).pipe(
    console.log("getusuarios ID:" + id);
    return this.http.get<usuarios>(apiUrl + "/" + id)
      .pipe(
        tap(_ => console.log('fetched usuarios id=${id}')),
        catchError(this.handleError<usuarios>('getusuarios id=${id}'))
      );
  }


  deleteusuarios(id: number): Observable<usuarios> {
    //const url = '${apiUrl}/${id}';
    //return this.http.delete<usuarios>(url, httpOptions).pipe(
    return this.http.delete<usuarios>(apiUrl + "/" + id, httpOptions)
      .pipe(
        tap(_ => console.log('deleted usuarios id=${id}')),
        catchError(this.handleError<usuarios>('deleteusuarios'))
      );
  }


  updateusuarios(id: number, usuarios: usuarios): Observable<usuarios> {
    return this.http.put<usuarios>(apiUrl + "/" + id, usuarios, httpOptions)
      .pipe(
        tap(_ => console.log('updated usuarios id=${id}')),
        catchError(this.handleError<any>('updateusuarios'))
      );
  }




}

