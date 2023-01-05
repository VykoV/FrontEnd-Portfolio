import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardSkillFrontEnd } from 'src/app/model/HardSkillFrontEnd';
import { HardSkillFrontEndService } from 'src/app/Service/hardskillfrontend.service';

@Component({
  selector: 'app-new-front-end-modal',
  templateUrl: './new-front-end-modal.component.html',
  styleUrls: ['./new-front-end-modal.component.css']
})
export class NewFrontEndModalComponent implements OnInit {

  icono: String = '';
  nombreFrontEnd: String = '';
  nivelFrontEnd: String = '';
  porcentaje: number = null;

  constructor(private hardSkillFrontEndService: HardSkillFrontEndService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const hsfe = new HardSkillFrontEnd(this.icono, this.nombreFrontEnd, this.nivelFrontEnd, this.porcentaje);
    this.hardSkillFrontEndService.save(hsfe).subscribe(
      data => {
        alert("Hard Skill Front End agregada");
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
