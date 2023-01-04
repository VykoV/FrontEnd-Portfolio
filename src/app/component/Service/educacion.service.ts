import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';


@Injectable({
    providedIn: 'root'
})
export class EducacionService {
    url = 'http://localhost:8080/educacion/';
    constructor(private httpClient: HttpClient) { }
    //Ver
    public lista(): Observable<Educacion[]> {
        return this.httpClient.get<Educacion[]>(this.url + 'ver');
    }
    
    public detail(id: number): Observable<Educacion> {
        return this.httpClient.get<Educacion>(this.url + `detail/${id}`);
    }
    //Guardar
    public save(educacion: Educacion): Observable<any> {
        return this.httpClient.post<any>(this.url + 'new', educacion);
    }
    //Actualizar
    public update(id: number, educacion: Educacion): Observable<any> {
        return this.httpClient.put<any>(this.url + `update/${id}`, educacion);
    }
    //Eliminar
    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.url + `delete/${id}`);
    }

}