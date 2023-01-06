import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { AcercaDeMiComponent } from './component/acerca-de-mi/acerca-de-mi.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';
import { HardAndSoftSkillsComponent } from './component/hard-and-soft-skills/hard-and-soft-skills.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import { LoginComponent } from './component/login/login.component';
import { BannerComponent } from './component/banner/banner.component';
import { HomeComponent } from './component/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EditExperienciaLaboralComponent } from './modal/edit-experiencia-laboral/edit-experiencia-laboral.component';
import { EditEducacionComponent } from './modal/edit-educacion/edit-educacion.component';

import { EditSSkillComponent } from 'src/app/modal/edit-sskill/edit-sskill.component';
import { EditHSBEComponent } from './modal/edit-hsbe/edit-hsbe.component';
import { EditHSFEComponent } from 'src/app/modal/edit-hsfe/edit-hsfe.component';
import { EditProyectosComponent } from './modal/edit-proyectos/edit-proyectos.component';

import { EditAcercaDeMiComponent } from './modal/edit-acerca-de-mi/edit-acerca-de-mi.component';
import { EditPersonaComponent } from './modal/edit-persona/edit-persona.component';
import { NewPersonaComponent } from './modal/new-persona/new-persona.component';
import { AcercaDeMiModalComponent } from './modal/acerca-de-mi-modal/acerca-de-mi-modal.component';
import { NewProyectoModalComponent } from './modal/new-proyecto-modal/new-proyecto-modal.component';
import { NewEducacionModalComponent } from './modal/new-educacion-modal/new-educacion-modal.component';
import { NewExperienciaLaboralModalComponent } from './modal/new-experiencia-laboral-modal/new-experiencia-laboral-modal.component';
import { NewFrontEndModalComponent } from './modal/new-front-end-modal/new-front-end-modal.component';
import { NewBackEndModalComponent } from './modal/new-back-end-modal/new-back-end-modal.component';
import { NewSoftSkillModalComponent } from './modal/new-soft-skill-modal/new-soft-skill-modal.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeMiComponent,
    ExperienciaComponent,
    HardAndSoftSkillsComponent,
    ProyectosComponent,
    LoginComponent,
    BannerComponent,
    HomeComponent,

    EditExperienciaLaboralComponent,
    EditEducacionComponent,

    EditSSkillComponent,
    EditHSBEComponent,
    EditHSFEComponent,
    EditProyectosComponent,

    EditAcercaDeMiComponent,
    EditPersonaComponent,
    NewPersonaComponent,
    AcercaDeMiModalComponent,
    NewProyectoModalComponent,
    NewEducacionModalComponent,
    NewExperienciaLaboralModalComponent,
    NewFrontEndModalComponent,
    NewBackEndModalComponent,
    NewSoftSkillModalComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
