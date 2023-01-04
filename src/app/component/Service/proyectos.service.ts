import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/Proyectos';


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

    public detail(id: number): Observable<Proyectos> {
        return this.httpClient.get<Proyectos>(this.url + `detail/${id}`);
    }
    //Guardar
    public save(proyectos: Proyectos): Observable<any> {
        return this.httpClient.post<any>(this.url + 'new', proyectos);
    }
    //Actualizar
    public update(id: number, proyectos: Proyectos): Observable<any> {
        return this.httpClient.put<any>(this.url + `update/${id}`, proyectos);
    }
    //Eliminar
    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.url + `delete/${id}`);
    }
}