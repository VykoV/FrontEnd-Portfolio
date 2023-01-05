import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SoftSkill } from 'src/app/model/SoftSkill';
import { SoftSkillService } from 'src/app/Service/softskill.service';

@Component({
  selector: 'app-new-soft-skill-modal',
  templateUrl: './new-soft-skill-modal.component.html',
  styleUrls: ['./new-soft-skill-modal.component.css']
})
export class NewSoftSkillModalComponent implements OnInit {

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
