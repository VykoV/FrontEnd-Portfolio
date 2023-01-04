import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { persona } from 'src/app/component/model/persona.model';
import { PersonaService } from 'src/app/component/Service/persona.service';
import { TokenService } from '../Service/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  
  persona: persona[]=[];

  isLogged = false;

  constructor(private personaService:PersonaService,
              private tokenService:TokenService) { }

  ngOnInit(): void {
    this.verPersona();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  verPersona():void {
    this.personaService.lista().subscribe(data =>{
      this.persona=data})
  }

  deletePersona(id?: number) {
    if (id != undefined) {
      this.personaService.delete(id).subscribe(
        data => {
          this.verPersona();
      }, err => {
        alert("No se pudo eliminar la persona");
      }
  )}
  }
}

