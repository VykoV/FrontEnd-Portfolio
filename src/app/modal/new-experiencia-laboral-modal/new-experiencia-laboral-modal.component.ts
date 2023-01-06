import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/model/experienciaLaboral';
import { ExperienciaLaboralService } from 'src/app/Service/experiencialaboral.service';

@Component({
  selector: 'app-new-experiencia-laboral-modal',
  templateUrl: './new-experiencia-laboral-modal.component.html',
  styleUrls: ['./new-experiencia-laboral-modal.component.css']
})
export class NewExperienciaLaboralModalComponent implements OnInit {

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
      this.experienciaLaboralService.guardar(experiencia).subscribe(
          data=>{
              alert("Experiencia Laboral agregada");
              this.router.navigate(['home']);
              window.location.reload();
          },err=>{
              alert("Error");
              this.router.navigate(['home']);
              window.location.reload();
          }
          
      )
  }

}
