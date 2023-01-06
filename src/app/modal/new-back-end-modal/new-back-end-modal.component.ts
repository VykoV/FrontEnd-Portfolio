import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardSkillBackEnd } from 'src/app/model/HardSkillBackEnd';
import { HardSkillBackEndService } from 'src/app/Service/hardskillbackend.service';

@Component({
  selector: 'app-new-back-end-modal',
  templateUrl: './new-back-end-modal.component.html',
  styleUrls: ['./new-back-end-modal.component.css']
})
export class NewBackEndModalComponent implements OnInit {

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
    this.hardSkillBackEndService.guardar(hsbe).subscribe(
      data => {
        alert("Hard Skill Back End agregada");
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
