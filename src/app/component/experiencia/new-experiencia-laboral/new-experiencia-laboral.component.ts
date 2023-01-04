import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { ExperienciaLaboral } from '../../model/experienciaLaboral';
import { ExperienciaLaboralService } from '../../Service/experiencialaboral.service';

@Component({
  selector: 'app-new-experiencia-laboral',
  templateUrl: './new-experiencia-laboral.component.html',
  styleUrls: ['./new-experiencia-laboral.component.css']
})
export class NewExperienciaLaboralComponent implements OnInit {

  descripcion:String='';
  imgEmpresa:String='';
  nombreEmpresa: String='';
  periodoPuestoFin: String='';
  periodoPuestoInicio: String='';
  puesto: String='';

  constructor(private experienciaLaboralService:ExperienciaLaboralService,
              private router:Router){}
  
  ngOnInit(): void {
      
  }

  onCreate(): void {
      const experiencia=new ExperienciaLaboral(this.descripcion,this.imgEmpresa,this.nombreEmpresa,this.periodoPuestoFin,this.periodoPuestoInicio,this.puesto);
      this.experienciaLaboralService.save(experiencia).subscribe(
          data=>{
              alert("Experiencia Laboral agregada");
              this.router.navigate(['']);
          },err=>{
              alert("Error");
              this.router.navigate(['']);
          }
          
      )
  }

}
