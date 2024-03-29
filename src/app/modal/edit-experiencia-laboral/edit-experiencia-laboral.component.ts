import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaLaboral } from '../../model/experienciaLaboral';
import { ExperienciaLaboralService } from 'src/app/Service/experiencialaboral.service';

@Component({
  selector: 'app-edit-experiencia-laboral',
  templateUrl: './edit-experiencia-laboral.component.html',
  styleUrls: ['./edit-experiencia-laboral.component.css']
})
export class EditExperienciaLaboralComponent implements OnInit {

  experienciaLaboral: ExperienciaLaboral = null;

  constructor(private experienciaLaboralService: ExperienciaLaboralService,
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaLaboralService.obtener(id).subscribe(
      data => {
        this.experienciaLaboral = data;
      }, err => {
        alert("Error al modificar experiencia");
        this.router.navigate(['home']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaLaboralService.actualizar(id, this.experienciaLaboral).subscribe(
      data => {
        alert("Experiencia Laboral Actualizado");
        this.router.navigate(['home']);
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['home']);
      })
  }

}
