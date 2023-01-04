import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/component/model/educacion';
import { EducacionService } from 'src/app/component/Service/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {

  educacion: Educacion = null;

  constructor(private educacionlService:EducacionService,
              private activatedRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionlService.detail(id).subscribe(
      data => {
        this.educacion = data;
      }, err => {
        alert("Error al modificar educacion");
        this.router.navigate(['home']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionlService.update(id, this.educacion).subscribe(
      data => {
        this.router.navigate(['home']);
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['home']);
      })
  }

}
