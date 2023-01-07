import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from 'src/app/model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //url = 'http://localhost:8080/persona/';
  url='https://portfoliovvalli.onrender.com/persona/';
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<persona[]> {
    return this.httpClient.get<persona[]>(this.url + 'ver');
  }
  
  public obtener(id: number): Observable<persona> {
    return this.httpClient.get<persona>(this.url + `pers/${id}`);
  }

  /*public guardar(Persona: persona): Observable<any> {
    return this.httpClient.post<any>(this.url + 'nuevo', Persona);
  }*/
 
  public actualizar(id: number, Persona: persona): Observable<any> {
    return this.httpClient.put<any>(this.url + `actualizar/${id}`, Persona);
  }
  //Eliminar
  /* public eliminar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `eliminar/${id}`);
  }*/

}