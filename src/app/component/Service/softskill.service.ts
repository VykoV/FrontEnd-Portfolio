import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SoftSkill } from '../model/SoftSkill';



@Injectable({
    providedIn: 'root'
})
export class SoftSkillService {
    url = 'http://localhost:8080/softskill/';
    constructor(private httpClient: HttpClient) { }
    
//Ver
    public lista(): Observable<SoftSkill[]>{
    return this.httpClient.get<SoftSkill[]>(this.url+ 'ver');
    }


    public detail(id: number): Observable<SoftSkill>{
        return this.httpClient.get<SoftSkill>(this.url + `detail/${id}`);
    } 
//Guardar
    public save(softSkill:SoftSkill): Observable<any>{
        return this.httpClient.post<any>(this.url+'new',softSkill);
    }
//Actualizar
    public update(id: number, softSkill: SoftSkill): Observable<any>{
        return this.httpClient.put<any>(this.url + `update/${id}`,softSkill);
    }
//Eliminar
    public delete(id:number):Observable<any>{
        return this.httpClient.delete<any>(this.url+`delete/${id}`);
    }

}