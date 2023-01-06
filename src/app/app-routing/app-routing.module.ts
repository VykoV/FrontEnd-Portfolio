import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../component/home/home.component';
import { LoginComponent } from 'src/app/component/login/login.component';
import { EditExperienciaLaboralComponent } from '../modal/edit-experiencia-laboral/edit-experiencia-laboral.component';
import { EditEducacionComponent } from '../modal/edit-educacion/edit-educacion.component';
import { EditSSkillComponent } from 'src/app/modal/edit-sskill/edit-sskill.component';
import { EditHSFEComponent } from 'src/app/modal/edit-hsfe/edit-hsfe.component';
import { EditHSBEComponent } from '../modal/edit-hsbe/edit-hsbe.component';
import { EditProyectosComponent } from '../modal/edit-proyectos/edit-proyectos.component';

import { EditPersonaComponent } from '../modal/edit-persona/edit-persona.component';
import { EditAcercaDeMiComponent } from '../modal/edit-acerca-de-mi/edit-acerca-de-mi.component';


const routes:Routes=[
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},

  {path:'',redirectTo: 'login',pathMatch:'full'},

  {path:'editaracercademi/:id', component: EditAcercaDeMiComponent},
  
  {path:'editarexperiencia/:id', component: EditExperienciaLaboralComponent},

  {path:'editareducacion/:id', component: EditEducacionComponent},

  {path:'editarss/:id', component: EditSSkillComponent},

  {path:'editarhsfe/:id', component: EditHSFEComponent},

  {path:'editarhsbe/:id', component: EditHSBEComponent},

  {path:'editarproyecto/:id', component: EditProyectosComponent},

  {path:'editarpersona/:id', component: EditPersonaComponent}

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
