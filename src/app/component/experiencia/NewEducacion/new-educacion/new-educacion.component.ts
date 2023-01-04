import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/component/model/educacion';
import { EducacionService } from 'src/app/component/Service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {

  logo:String='';
  nombreCurso:String='';
  carreraCurso: String='';
  titulo: String='';
  periodoEstudiosFin: String='';
  periodoEstudiosInicio: String='';

  constructor(private educacionlService:EducacionService,
    private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educa=new Educacion(this.logo,this.nombreCurso,this.carreraCurso,this.titulo,this.periodoEstudiosFin,this.periodoEstudiosInicio);
    this.educacionlService.save(educa).subscribe(
        data=>{
            alert("Educacion agregada");
            this.router.navigate(['']);
        },err=>{
            alert("Error");
            this.router.navigate(['']);
        }
        
    )
}
}
