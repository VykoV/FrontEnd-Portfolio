import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from '../../model/persona.model';
import { PersonaService } from '../../Service/persona.service';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit {

  Persona:persona=null;

  constructor(private personaService:PersonaService,
              private activatedRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data => {
        this.Persona = data;
      }, err => {
        alert("Error al modificar persona");
        this.router.navigate(['home']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.update(id, this.Persona).subscribe(
      data => {
        this.router.navigate(['home']);
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['home']);
      })
  }
}
