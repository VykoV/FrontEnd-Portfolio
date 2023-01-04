import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from '../../model/Proyectos';
import { ProyectosService } from '../../Service/proyectos.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {

  nombreProyecto: String = '';
  descripcionProyecto: String = '';
  urlImgProyecto: String = '';
  urlRepositorio: String = '';

  constructor(private proyectosService: ProyectosService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proy = new Proyectos(this.nombreProyecto, this.descripcionProyecto, this.urlImgProyecto, this.urlRepositorio);
    this.proyectosService.save(proy).subscribe(
      data => {
        alert("Proyecto agregado");
        this.router.navigate(['']);
      }, err => {
        alert("Error");
        this.router.navigate(['']);
      }

    )
  }
}
