import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcercaDeMi } from 'src/app/model/acercademi';


@Injectable({
    providedIn: 'root'
})
export class AcercademiService {
    //url = 'http://localhost:8080/acercademi/';
    url='https://portfoliovvalli.onrender.com/acercademi/';
    constructor(private httpClient: HttpClient) { }
    //ver
    public lista(): Observable<AcercaDeMi[]> {
        return this.httpClient.get<AcercaDeMi[]>(this.url + 'ver');
    }

    public obtener(id: number): Observable<AcercaDeMi> {
        return this.httpClient.get<AcercaDeMi>(this.url + `adm/${id}`);
    }
    //Guardar
    public guardar(acercaDeMi: AcercaDeMi): Observable<any> {
        return this.httpClient.post<any>(this.url + 'nuevo', acercaDeMi);
    }
    //Actualizar
    public actualizar(id: number, acercaDeMi: AcercaDeMi): Observable<any> {
        return this.httpClient.put<any>(this.url + `actualizar/${id}`, acercaDeMi);
    }
    //Eliminar
    public eliminar(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.url + `eliminar/${id}`);
    }

}
