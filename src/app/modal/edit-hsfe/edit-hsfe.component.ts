import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HardSkillFrontEnd } from 'src/app/model/HardSkillFrontEnd';
import { HardSkillFrontEndService } from 'src/app/Service/hardskillfrontend.service';

@Component({
  selector: 'app-edit-hsfe',
  templateUrl: './edit-hsfe.component.html',
  styleUrls: ['./edit-hsfe.component.css']
})
export class EditHSFEComponent implements OnInit {

  hardSkillFrontEnd:HardSkillFrontEnd=null;  
  constructor(private hardSkillFrontEndService:HardSkillFrontEndService,
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.hardSkillFrontEndService.obtener(id).subscribe(
      data => {
        this.hardSkillFrontEnd = data;
      }, err => {
        alert("Error al modificar Hard Skill FrontEnd");
        this.router.navigate(['home']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.hardSkillFrontEndService.actualizar(id, this.hardSkillFrontEnd).subscribe(
      data => {
        alert("Hard Skill FrontEnd Actualizado");
        this.router.navigate(['home']);
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['home']);
      })
  }
}
