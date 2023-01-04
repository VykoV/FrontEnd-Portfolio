import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../component/home/home.component';
import { LoginComponent } from 'src/app/component/login/login.component';
import { NewExperienciaLaboralComponent } from '../component/experiencia/new-experiencia-laboral/new-experiencia-laboral.component';
import { EditExperienciaLaboralComponent } from '../component/experiencia/edit-experiencia-laboral/edit-experiencia-laboral.component';
import { NewEducacionComponent } from '../component/experiencia/NewEducacion/new-educacion/new-educacion.component';
import { EditEducacionComponent } from '../component/experiencia/EditEducacion/edit-educacion/edit-educacion.component';
import { NewSSkillComponent } from '../component/hard-and-soft-skills/new-sskill/new-sskill.component';
import { EditSSkillComponent } from '../component/hard-and-soft-skills/edit-sskill/edit-sskill.component';
import { NewHSFEComponent } from '../component/hard-and-soft-skills/new-hsfe/new-hsfe.component';
import { EditHSFEComponent } from '../component/hard-and-soft-skills/edit-hsfe/edit-hsfe.component';
import { NewHSBEComponent } from '../component/hard-and-soft-skills/new-hsbe/new-hsbe.component';
import { EditHSBEComponent } from '../component/hard-and-soft-skills/edit-hsbe/edit-hsbe.component';
import { NewProyectosComponent } from '../component/proyectos/new-proyectos/new-proyectos.component';
import { EditProyectosComponent } from '../component/proyectos/edit-proyectos/edit-proyectos.component';
import { NewAcercaDeMiComponent } from '../component/acerca-de-mi/new-acerca-de-mi/new-acerca-de-mi.component';
import { EditAcercaDeMiComponent } from '../component/acerca-de-mi/edit-acerca-de-mi/edit-acerca-de-mi.component';
import { EditPersonaComponent } from '../component/banner/edit-persona/edit-persona.component';


const routes:Routes=[
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},

  {path:'',redirectTo: 'login',pathMatch:'full'},

  {path:'nuevaexperiencia', component: NewExperienciaLaboralComponent},
  {path:'editarexperiencia/:id', component: EditExperienciaLaboralComponent},

  {path:'nuevaeducacion', component: NewEducacionComponent},
  {path:'editareducacion/:id', component: EditEducacionComponent},

  {path:'nuevass', component: NewSSkillComponent},
  {path:'editarss/:id', component: EditSSkillComponent},

  {path:'nuevahsfe', component: NewHSFEComponent},
  {path:'editarhsfe/:id', component: EditHSFEComponent},

  {path:'nuevahsbe', component: NewHSBEComponent},
  {path:'editarhsbe/:id', component: EditHSBEComponent},

  {path:'nuevoproyecto', component: NewProyectosComponent},
  {path:'editarproyecto/:id', component: EditProyectosComponent},

  {path:'nuevoacercademi', component: NewAcercaDeMiComponent},
  {path:'editaracercademi/:id', component: EditAcercaDeMiComponent},

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
