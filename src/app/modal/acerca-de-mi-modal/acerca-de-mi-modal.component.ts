import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcercaDeMi } from 'src/app/model/acercademi';
import { AcercademiService } from 'src/app/Service/acercademi.service';

@Component({
  selector: 'app-acerca-de-mi-modal',
  templateUrl: './acerca-de-mi-modal.component.html',
  styleUrls: ['./acerca-de-mi-modal.component.css']
})
export class AcercaDeMiModalComponent implements OnInit {

  destacable: String= '';
  informacionAcercaDeMi: String= '';

  constructor(private acercaDeMiService: AcercademiService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const adm = new AcercaDeMi(this.destacable, this.informacionAcercaDeMi);
    this.acercaDeMiService.save(adm).subscribe(
      data => {
        alert("Acerca de mi agregada");
        this.router.navigate(['']);
      }, err => {
        alert("Error");
        this.router.navigate(['']);
      }

    )
  }
}
