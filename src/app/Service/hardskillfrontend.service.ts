import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HardSkillFrontEnd } from 'src/app/model/HardSkillFrontEnd';


@Injectable({
  providedIn: 'root'
})
export class HardSkillFrontEndService {
  //url = 'http://localhost:8080/hardskillfrontend/';
  url='https://portfoliovvalli.onrender.com/hardskillfrontend/';


  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<HardSkillFrontEnd[]> {
    return this.httpClient.get<HardSkillFrontEnd[]>(this.url + 'ver');
  }
  public obtener(id: number): Observable<HardSkillFrontEnd> {
    return this.httpClient.get<HardSkillFrontEnd>(this.url + `hsfe/${id}`);
  }
  public guardar(hardSkillFrontEnd: HardSkillFrontEnd): Observable<any> {
    return this.httpClient.post<any>(this.url + 'nuevo', hardSkillFrontEnd);
  }
  public actualizar(id: number, hardSkillFrontEnd: HardSkillFrontEnd): Observable<any> {
    return this.httpClient.put<any>(this.url + `actualizar/${id}`, hardSkillFrontEnd);
  }
  public eliminar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `eliminar/${id}`);
  }

}
