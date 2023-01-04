import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcercaDeMi } from '../../model/acercademi';
import { AcercademiService } from '../../Service/acercademi.service';

@Component({
  selector: 'app-edit-acerca-de-mi',
  templateUrl: './edit-acerca-de-mi.component.html',
  styleUrls: ['./edit-acerca-de-mi.component.css']
})
export class EditAcercaDeMiComponent implements OnInit {

  acercaDeMi:AcercaDeMi=null;

  constructor(private acercaDeMiService:AcercademiService,
              private activatedRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.acercaDeMiService.detail(id).subscribe(
      data => {
        this.acercaDeMi = data;
      }, err => {
        alert("Error al modificar acerca De Mi");
        this.router.navigate(['home']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.acercaDeMiService.update(id, this.acercaDeMi).subscribe(
      data => {
        this.router.navigate(['home']);
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['home']);
      })
  }

}
