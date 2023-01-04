import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardSkillFrontEnd } from '../../model/HardSkillFrontEnd';
import { HardSkillFrontEndService } from '../../Service/hardskillfrontend.service';

@Component({
  selector: 'app-new-hsfe',
  templateUrl: './new-hsfe.component.html',
  styleUrls: ['./new-hsfe.component.css']
})
export class NewHSFEComponent implements OnInit {

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
        this.router.navigate(['']);
      }, err => {
        alert("Error");
        this.router.navigate(['']);
      }

    )
  }
}
