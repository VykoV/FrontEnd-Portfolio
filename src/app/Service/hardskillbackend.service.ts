import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HardSkillBackEnd } from 'src/app/model/HardSkillBackEnd';


@Injectable({
    providedIn: 'root'
})
export class HardSkillBackEndService {
    url = 'http://localhost:8080/hardskillbackend/';
    constructor(private httpClient: HttpClient) { }

    public lista(): Observable<HardSkillBackEnd[]> {
        return this.httpClient.get<HardSkillBackEnd[]>(this.url + 'ver');
    }
    public obtener(id: number): Observable<HardSkillBackEnd> {
        return this.httpClient.get<HardSkillBackEnd>(this.url + `hsbe/${id}`);
    }
    public guardar(hardSkillBackEnd: HardSkillBackEnd): Observable<any> {
        return this.httpClient.post<any>(this.url + 'nuevo', hardSkillBackEnd);
    }
    public actualizar(id: number, hardSkillBackEnd: HardSkillBackEnd): Observable<any> {
        return this.httpClient.put<any>(this.url + `actualizar/${id}`, hardSkillBackEnd);
    }
    public eliminar(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.url + `eliminar/${id}`);
    }

}
