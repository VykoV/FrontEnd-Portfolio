import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from 'src/app/model/Proyectos';


@Injectable({
    providedIn: 'root'
})
export class ProyectosService {
    //url = 'http://localhost:8080/proyectos/';
    url='https://portfoliovvalli.onrender.com/proyectos/';
    constructor(private httpClient: HttpClient) { }
    
    public lista(): Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.url+ 'ver');
    }
    public obtener(id: number): Observable<Proyectos> {
        return this.httpClient.get<Proyectos>(this.url + `proy/${id}`);
    }
    public guardar(proyectos: Proyectos): Observable<any> {
        return this.httpClient.post<any>(this.url + 'nuevo', proyectos);
    }
    public actualizar(id: number, proyectos: Proyectos): Observable<any> {
        return this.httpClient.put<any>(this.url + `actualizar/${id}`, proyectos);
    }
    public eliminar(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.url + `eliminar/${id}`);
    }
}