import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HardSkillBackEnd } from '../../model/HardSkillBackEnd';
import { HardSkillBackEndService } from '../../Service/hardskillbackend.service';

@Component({
  selector: 'app-edit-hsbe',
  templateUrl: './edit-hsbe.component.html',
  styleUrls: ['./edit-hsbe.component.css']
})
export class EditHSBEComponent implements OnInit {

  hardSkillBackEnd:HardSkillBackEnd=null;

  constructor(private hardSkillBackEndService:HardSkillBackEndService,
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.hardSkillBackEndService.detail(id).subscribe(
      data => {
        this.hardSkillBackEnd = data;
      }, err => {
        alert("Error al modificar Hard Skill BackEnd");
        this.router.navigate(['home']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.hardSkillBackEndService.update(id, this.hardSkillBackEnd).subscribe(
      data => {
        this.router.navigate(['home']);
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['home']);
      })
  }

}
