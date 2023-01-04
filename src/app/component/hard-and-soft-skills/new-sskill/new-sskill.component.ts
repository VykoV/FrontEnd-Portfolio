import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SoftSkill } from '../../model/SoftSkill';
import { SoftSkillService } from '../../Service/softskill.service';

@Component({
  selector: 'app-new-sskill',
  templateUrl: './new-sskill.component.html',
  styleUrls: ['./new-sskill.component.css']
})
export class NewSSkillComponent implements OnInit {

  icono: String = '';
  nombreSkill: String = '';
  nivelSkill: String = '';
  porcentaje: number = null;

  constructor(private softSkillService: SoftSkillService,
    private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const ss = new SoftSkill(this.icono, this.nombreSkill, this.nivelSkill, this.porcentaje);
    this.softSkillService.save(ss).subscribe(
      data => {
        alert("Soft Skill agregada");
        this.router.navigate(['']);
      }, err => {
        alert("Error");
        this.router.navigate(['']);
      }

    )
  }

}
