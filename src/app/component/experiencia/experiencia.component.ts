import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';
import { ExperienciaLaboral } from '../model/experienciaLaboral';
import { EducacionService } from '../Service/educacion.service';
import { ExperienciaLaboralService } from '../Service/experiencialaboral.service';
import { TokenService } from '../Service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experienciaLaboral: ExperienciaLaboral[] = [];
  educacion: Educacion[] = [];
  ubscription = Subscription;

  constructor(private experienciaLaboralService: ExperienciaLaboralService,
    private educacionService: EducacionService,
    private tokenService: TokenService) {

  }

  isLogged = false;


  ngOnInit(): void {
    this.verExperienciaLaboral();
    this.verEducacion();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  verExperienciaLaboral(): void {
    this.experienciaLaboralService.lista().subscribe(data => {
      this.experienciaLaboral = data
    })
  }
  
  deleteExperienciaLaboral(id?: number) {
    if (id != undefined) {
      this.experienciaLaboralService.delete(id).subscribe(
        data => {
          this.verExperienciaLaboral();
      }, err => {
        alert("No se pudo eliminar la Experiencia Laboral");
      }
  )}
  }

  verEducacion(): void {
    this.educacionService.lista().subscribe(data => {
      this.educacion = data
    })
  }

  deleteEducacion(id?: number) {
    if (id != undefined) {
      this.educacionService.delete(id).subscribe(
        data => {
          this.verEducacion();
      }, err => {
        alert("No se pudo eliminar la Educacion");
      }
  )}
  }
}