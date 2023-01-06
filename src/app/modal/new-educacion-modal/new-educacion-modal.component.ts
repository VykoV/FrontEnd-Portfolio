import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/Service/educacion.service';

@Component({
  selector: 'app-new-educacion-modal',
  templateUrl: './new-educacion-modal.component.html',
  styleUrls: ['./new-educacion-modal.component.css']
})
export class NewEducacionModalComponent implements OnInit {

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
    this.educacionlService.guardar(educa).subscribe(
        data=>{
            alert("Educacion agregada");
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
