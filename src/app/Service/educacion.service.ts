import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from 'src/app//model/educacion';


@Injectable({
    providedIn: 'root'
})
export class EducacionService {
    url = 'http://localhost:8080/educacion/';

    constructor(private httpClient: HttpClient) { }

    public lista(): Observable<Educacion[]> {
        return this.httpClient.get<Educacion[]>(this.url + 'ver');
    }
    public obtener(id: number): Observable<Educacion> {
        return this.httpClient.get<Educacion>(this.url + `ed/${id}`);
    }
    public guardar(educacion: Educacion): Observable<any> {
        return this.httpClient.post<any>(this.url + 'nuevo', educacion);
    }
    public actualizar(id: number, educacion: Educacion): Observable<any> {
        return this.httpClient.put<any>(this.url + `actualizar/${id}`, educacion);
    }
    public eliminar(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.url + `eliminar/${id}`);
    }

}