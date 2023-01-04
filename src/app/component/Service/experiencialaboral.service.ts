import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienciaLaboral } from '../model/experienciaLaboral';


@Injectable({
    providedIn: 'root'
})
export class ExperienciaLaboralService {
    [x: string]: any;
    url = 'http://localhost:8080/experiencialaboral/';
    constructor(private httpClient: HttpClient) { }
//Ver
    public lista(): Observable<ExperienciaLaboral[]>{
    return this.httpClient.get<ExperienciaLaboral[]>(this.url+ 'ver');
    }

    public detail(id: number): Observable<ExperienciaLaboral>{
        return this.httpClient.get<ExperienciaLaboral>(this.url + `detail/${id}`);
    } 
//Guardar
    public save(experienciaLaboral:ExperienciaLaboral): Observable<any>{
        return this.httpClient.post<any>(this.url+'new',experienciaLaboral);
    }
//Actualizar
    public update(id: number, experienciaLaboral: ExperienciaLaboral): Observable<any>{
        return this.httpClient.put<any>(this.url + `update/${id}`,experienciaLaboral);
      }
//Eliminar
    public delete(id:number):Observable<any>{
        return this.httpClient.delete<any>(this.url+`delete/${id}`);
    }

}
