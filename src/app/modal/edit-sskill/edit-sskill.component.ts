import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SoftSkill } from 'src/app/model/SoftSkill';
import { SoftSkillService } from 'src/app/Service/softskill.service';

@Component({
  selector: 'app-edit-sskill',
  templateUrl: './edit-sskill.component.html',
  styleUrls: ['./edit-sskill.component.css']
})
export class EditSSkillComponent implements OnInit {

  softSkill:SoftSkill=null;  

  constructor(private softSkillService:SoftSkillService,
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.softSkillService.obtener(id).subscribe(
      data => {
        this.softSkill = data;
      }, err => {
        alert("Error al modificar Soft Skill");
        this.router.navigate(['home']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.softSkillService.actualizar(id, this.softSkill).subscribe(
      data => {
        alert("Soft Skill Actualizada");
        this.router.navigate(['home']);
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['home']);
      })
  }

}
