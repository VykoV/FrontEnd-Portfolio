import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from '../../model/persona.model';
import { PersonaService } from '../../Service/persona.service';

@Component({
  selector: 'app-new-persona',
  templateUrl: './new-persona.component.html',
  styleUrls: ['./new-persona.component.css']
})
export class NewPersonaComponent implements OnInit {

  imgBanner: String = '';
  imgPerfil: String = '';
  nombrePerfil: String = '';
  titulo: String = '';

  constructor(private router: Router,
    private personaService: PersonaService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const ss = new persona(this.imgBanner, this.imgPerfil, this.nombrePerfil, this.titulo);
    this.personaService.save(ss).subscribe(
      data => {
        alert("Persona agregada");
        this.router.navigate(['']);
      }, err => {
        alert("Error");
        this.router.navigate(['']);
      }

    )
  }
}
