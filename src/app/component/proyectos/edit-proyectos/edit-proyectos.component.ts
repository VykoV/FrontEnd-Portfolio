import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from '../../model/Proyectos';
import { ProyectosService } from '../../Service/proyectos.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit {

  proyectos: Proyectos=null;
  constructor(private proyectosService:ProyectosService,
              private activatedRouter:ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectosService.detail(id).subscribe(
      data => {
        this.proyectos = data;
      }, err => {
        alert("Error al modificar proyectos");
        this.router.navigate(['home']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectosService.update(id, this.proyectos).subscribe(
      data => {
        this.router.navigate(['home']);
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['home']);
      })
  }

}
