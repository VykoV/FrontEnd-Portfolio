import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { HardSkillBackEnd } from '../model/HardSkillBackEnd';
import { HardSkillFrontEnd } from '../model/HardSkillFrontEnd';
import { SoftSkill } from '../model/SoftSkill';
import { HardSkillBackEndService } from '../Service/hardskillbackend.service';
import { HardSkillFrontEndService } from '../Service/hardskillfrontend.service';
import { SoftSkillService } from '../Service/softskill.service';
import { TokenService } from '../Service/token.service';

@Component({
  selector: 'app-hard-and-soft-skills',
  templateUrl: './hard-and-soft-skills.component.html',
  styleUrls: ['./hard-and-soft-skills.component.css']
})
export class HardAndSoftSkillsComponent implements OnInit {
  
  hardSkillFrontEnd:HardSkillFrontEnd[]=[];
  hardSkillBackEnd:HardSkillBackEnd[]=[];
  softSkill:SoftSkill[] = [];
  
  subscription = Subscription;

  isLogged = false;

  constructor(private hardSkillFrontEndService:HardSkillFrontEndService,
              private hardSkillBackEndService:HardSkillBackEndService,
              private softSkillService:SoftSkillService,
              private tokenService: TokenService) { }
  
    ngOnInit(): void {
      this.verHardSkillFrontEnd();
      this.verHardSkillBackEnd();
      this.verSoftSkill();

      if (this.tokenService.getToken()) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }

  }

  verHardSkillFrontEnd():void{
    this.hardSkillFrontEndService.lista().subscribe(data =>{
    this.hardSkillFrontEnd=data})
  }
  deleteHardSkillFrontEnd(id?: number) {
    if (id != undefined) {
      this.hardSkillFrontEndService.delete(id).subscribe(
        data => {
          this.verHardSkillFrontEnd();
      }, err => {
        alert("No se pudo eliminar");
      }
  )}
  }

  verHardSkillBackEnd():void{
    this.hardSkillBackEndService.lista().subscribe(data =>{
    this.hardSkillBackEnd=data})
  }
  deleteHardSkillBackEnd(id?: number) {
    if (id != undefined) {
      this.hardSkillBackEndService.delete(id).subscribe(
        data => {
          this.verHardSkillBackEnd();
      }, err => {
        alert("No se pudo eliminar");
      }
  )}
  }

  verSoftSkill():void{
    this.softSkillService.lista().subscribe(data =>{
    this.softSkill=data})
  }

  deleteSoftSkill(id?: number) {
    if (id != undefined) {
      this.softSkillService.delete(id).subscribe(
        data => {
          this.verSoftSkill();
      }, err => {
        alert("No se pudo eliminar");
      }
  )}
  }

}