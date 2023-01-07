import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SoftSkill } from 'src/app/model/SoftSkill';



@Injectable({
    providedIn: 'root'
})
export class SoftSkillService {
    //url = 'http://localhost:8080/softskill/';
    url='https://portfoliovvalli.onrender.com/softskill/';

    constructor(private httpClient: HttpClient) { }

    public lista(): Observable<SoftSkill[]>{
    return this.httpClient.get<SoftSkill[]>(this.url+ 'ver');
    }

    public obtener(id: number): Observable<SoftSkill>{
        return this.httpClient.get<SoftSkill>(this.url + `ss/${id}`);
    } 

    public guardar(softSkill:SoftSkill): Observable<any>{
        return this.httpClient.post<any>(this.url+'nuevo',softSkill);
    }

    public actualizar(id: number, softSkill: SoftSkill): Observable<any>{
        return this.httpClient.put<any>(this.url + `actualizar/${id}`,softSkill);
    }
    public eliminar(id:number):Observable<any>{
        return this.httpClient.delete<any>(this.url+`eliminar/${id}`);
    }

}