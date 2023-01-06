import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from 'src/app/model/Proyectos';


@Injectable({
    providedIn: 'root'
})
export class ProyectosService {
    url = 'http://localhost:8080/proyectos/';
    constructor(private httpClient: HttpClient) { }
    
    //ver
    public lista(): Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.url+ 'ver');
    }

    public obtener(id: number): Observable<Proyectos> {
        return this.httpClient.get<Proyectos>(this.url + `proy/${id}`);
    }
    //Guardar
    public guardar(proyectos: Proyectos): Observable<any> {
        return this.httpClient.post<any>(this.url + 'nuevo', proyectos);
    }
    //Actualizar
    public actualizar(id: number, proyectos: Proyectos): Observable<any> {
        return this.httpClient.put<any>(this.url + `actualizar/${id}`, proyectos);
    }
    //Eliminar
    public eliminar(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.url + `eliminar/${id}`);
    }
}