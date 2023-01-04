import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url = 'http://localhost:8080/persona/';
  constructor(private httpClient: HttpClient) { }
  //ver
  public lista(): Observable<persona[]> {
    return this.httpClient.get<persona[]>(this.url + 'ver');
  }
  
  public detail(id: number): Observable<persona> {
    return this.httpClient.get<persona>(this.url + `detail/${id}`);
  }
  //Guardar
  public save(Persona: persona): Observable<any> {
    return this.httpClient.post<any>(this.url + 'new', Persona);
  }
  //Actualizar
  public update(id: number, Persona: persona): Observable<any> {
    return this.httpClient.put<any>(this.url + `update/${id}`, Persona);
  }
  //Eliminar
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }

}