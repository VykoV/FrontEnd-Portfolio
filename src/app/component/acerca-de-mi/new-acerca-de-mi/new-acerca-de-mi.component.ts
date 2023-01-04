import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcercaDeMi } from '../../model/acercademi';
import { AcercademiService } from '../../Service/acercademi.service';

@Component({
  selector: 'app-new-acerca-de-mi',
  templateUrl: './new-acerca-de-mi.component.html',
  styleUrls: ['./new-acerca-de-mi.component.css']
})
export class NewAcercaDeMiComponent implements OnInit {

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
