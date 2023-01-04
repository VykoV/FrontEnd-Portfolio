import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HardSkillBackEnd } from '../model/HardSkillBackEnd';


@Injectable({
    providedIn: 'root'
})
export class HardSkillBackEndService {
    url = 'http://localhost:8080/hardskillbackend/';
    constructor(private httpClient: HttpClient) { }

    //Ver
    public lista(): Observable<HardSkillBackEnd[]> {
        return this.httpClient.get<HardSkillBackEnd[]>(this.url + 'ver');
    }

    public detail(id: number): Observable<HardSkillBackEnd> {
        return this.httpClient.get<HardSkillBackEnd>(this.url + `detail/${id}`);
    }
    //Guardar
    public save(hardSkillBackEnd: HardSkillBackEnd): Observable<any> {
        return this.httpClient.post<any>(this.url + 'new', hardSkillBackEnd);
    }
    //Actualizar
    public update(id: number, hardSkillBackEnd: HardSkillBackEnd): Observable<any> {
        return this.httpClient.put<any>(this.url + `update/${id}`, hardSkillBackEnd);
    }
    //Eliminar
    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.url + `delete/${id}`);
    }

}
