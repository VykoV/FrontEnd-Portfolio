import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/Proyectos';
import { ProyectosService } from '../Service/proyectos.service';
import { TokenService } from '../Service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  
  proyectos:Proyectos[]=[];
  subscription = Subscription;

  isLogged = false;

  constructor(private proyectosService: ProyectosService,
              private tokenService: TokenService) { }

  ngOnInit(): void {
    this.verProyectos();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  verProyectos(): void {
    this.proyectosService.lista().subscribe(data =>{
      this.proyectos=data;});
  }

  deleteProyectos(id?: number) {
    if (id != undefined) {
      this.proyectosService.delete(id).subscribe(
        data => {
          this.verProyectos();
      }, err => {
        alert("No se pudo eliminar el proyecto");
      }
  )}
  }

}