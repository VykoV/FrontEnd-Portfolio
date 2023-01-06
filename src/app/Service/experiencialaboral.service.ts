import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienciaLaboral } from 'src/app/model/experienciaLaboral';


@Injectable({
    providedIn: 'root'
})
export class ExperienciaLaboralService {
    [x: string]: any;
    url = 'http://localhost:8080/experiencialaboral/';
    constructor(private httpClient: HttpClient) { }

    public lista(): Observable<ExperienciaLaboral[]>{
    return this.httpClient.get<ExperienciaLaboral[]>(this.url+ 'ver');
    }

    public obtener(id: number): Observable<ExperienciaLaboral>{
        return this.httpClient.get<ExperienciaLaboral>(this.url + `el/${id}`);
    } 

    public guardar(experienciaLaboral:ExperienciaLaboral): Observable<any>{
        return this.httpClient.post<any>(this.url+'nuevo',experienciaLaboral);
    }

    public actualizar(id: number, experienciaLaboral: ExperienciaLaboral): Observable<any>{
        return this.httpClient.put<any>(this.url + `actualizar/${id}`,experienciaLaboral);
    }

    public eliminar(id:number):Observable<any>{
        return this.httpClient.delete<any>(this.url+`eliminar/${id}`);
    }

}
