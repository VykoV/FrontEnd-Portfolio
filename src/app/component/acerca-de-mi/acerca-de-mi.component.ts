import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { AcercaDeMi } from '../model/acercademi';
import { AcercademiService } from '../Service/acercademi.service';
import { TokenService } from '../Service/token.service';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent implements OnInit {

  acercademi: AcercaDeMi[]=[];

  isLogged = false;
  constructor(private acercademiService:AcercademiService,
              private tokenService:TokenService) { }

  ngOnInit(): void {
    this.verAcercaDeMi();
    
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  verAcercaDeMi(): void {
    this.acercademiService.lista().subscribe(data =>{
      this.acercademi=data})
  }
  
  deleteAcercaDeMi(id?: number) {
    if (id != undefined) {
      this.acercademiService.delete(id).subscribe(
        data => {
          this.verAcercaDeMi();
      }, err => {
        alert("No se pudo eliminar el AcercaDeMi");
      }
  )}
  }
}
