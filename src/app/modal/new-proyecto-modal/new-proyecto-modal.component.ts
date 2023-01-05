import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/Proyectos';
import { ProyectosService } from 'src/app/Service/proyectos.service';

@Component({
  selector: 'app-new-proyecto-modal',
  templateUrl: './new-proyecto-modal.component.html',
  styleUrls: ['./new-proyecto-modal.component.css']
})
export class NewProyectoModalComponent implements OnInit {

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
        this.router.navigate(['home']);
        window.location.reload();
      }, err => {
        alert("Error");
        this.router.navigate(['home']);
        window.location.reload();
      }

    )
  }
}
