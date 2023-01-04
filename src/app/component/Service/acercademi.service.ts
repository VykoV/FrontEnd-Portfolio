import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcercaDeMi } from '../model/acercademi';


@Injectable({
    providedIn: 'root'
})
export class AcercademiService {
    url = 'http://localhost:8080/acercademi/';
    constructor(private httpClient: HttpClient) { }
    //ver
    public lista(): Observable<AcercaDeMi[]> {
        return this.httpClient.get<AcercaDeMi[]>(this.url + 'ver');
    }

    public detail(id: number): Observable<AcercaDeMi> {
        return this.httpClient.get<AcercaDeMi>(this.url + `detail/${id}`);
    }
    //Guardar
    public save(acercaDeMi: AcercaDeMi): Observable<any> {
        return this.httpClient.post<any>(this.url + 'new', acercaDeMi);
    }
    //Actualizar
    public update(id: number, acercaDeMi: AcercaDeMi): Observable<any> {
        return this.httpClient.put<any>(this.url + `update/${id}`, acercaDeMi);
    }
    //Eliminar
    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.url + `delete/${id}`);
    }

}
