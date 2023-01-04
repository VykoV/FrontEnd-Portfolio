import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HardSkillFrontEnd } from '../model/HardSkillFrontEnd';


@Injectable({
  providedIn: 'root'
})
export class HardSkillFrontEndService {
  url = 'http://localhost:8080/hardskillfrontend/';
  constructor(private httpClient: HttpClient) { }
  //Ver
  public lista(): Observable<HardSkillFrontEnd[]> {
    return this.httpClient.get<HardSkillFrontEnd[]>(this.url + 'ver');
  }

  public detail(id: number): Observable<HardSkillFrontEnd> {
    return this.httpClient.get<HardSkillFrontEnd>(this.url + `detail/${id}`);
  }
  //Guardar
  public save(hardSkillFrontEnd: HardSkillFrontEnd): Observable<any> {
    return this.httpClient.post<any>(this.url + 'new', hardSkillFrontEnd);
  }
  //Actualizar
  public update(id: number, hardSkillFrontEnd: HardSkillFrontEnd): Observable<any> {
    return this.httpClient.put<any>(this.url + `update/${id}`, hardSkillFrontEnd);
  }
  //Eliminar
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }

}
