import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardSkillBackEnd } from '../../model/HardSkillBackEnd';
import { HardSkillBackEndService } from '../../Service/hardskillbackend.service';

@Component({
  selector: 'app-new-hsbe',
  templateUrl: './new-hsbe.component.html',
  styleUrls: ['./new-hsbe.component.css']
})
export class NewHSBEComponent implements OnInit {

  icono: String = '';
  nombreBackEnd: String = '';
  nivelBackEnd: String = '';
  porcentaje: number = null;

  constructor(private hardSkillBackEndService: HardSkillBackEndService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const hsbe = new HardSkillBackEnd(this.icono, this.nombreBackEnd, this.nivelBackEnd, this.porcentaje);
    this.hardSkillBackEndService.save(hsbe).subscribe(
      data => {
        alert("Hard Skill Back End agregada");
        this.router.navigate(['']);
      }, err => {
        alert("Error");
        this.router.navigate(['']);
      }

    )
  }
}
