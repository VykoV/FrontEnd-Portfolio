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
import { NewExperienciaLaboralComponent } from './component/experiencia/new-experiencia-laboral/new-experiencia-laboral.component';
import { EditExperienciaLaboralComponent } from './component/experiencia/edit-experiencia-laboral/edit-experiencia-laboral.component';
import { EditEducacionComponent } from './component/experiencia/EditEducacion/edit-educacion/edit-educacion.component';
import { NewEducacionComponent } from './component/experiencia/NewEducacion/new-educacion/new-educacion.component';
import { EditSSkillComponent } from './component/hard-and-soft-skills/edit-sskill/edit-sskill.component';
import { NewSSkillComponent } from './component/hard-and-soft-skills/new-sskill/new-sskill.component';
import { NewHSBEComponent } from './component/hard-and-soft-skills/new-hsbe/new-hsbe.component';
import { EditHSBEComponent } from './component/hard-and-soft-skills/edit-hsbe/edit-hsbe.component';
import { NewHSFEComponent } from './component/hard-and-soft-skills/new-hsfe/new-hsfe.component';
import { EditHSFEComponent } from './component/hard-and-soft-skills/edit-hsfe/edit-hsfe.component';
import { EditProyectosComponent } from './component/proyectos/edit-proyectos/edit-proyectos.component';
import { NewProyectosComponent } from './component/proyectos/new-proyectos/new-proyectos.component';
import { NewAcercaDeMiComponent } from './component/acerca-de-mi/new-acerca-de-mi/new-acerca-de-mi.component';
import { EditAcercaDeMiComponent } from './component/acerca-de-mi/edit-acerca-de-mi/edit-acerca-de-mi.component';
import { EditPersonaComponent } from './component/banner/edit-persona/edit-persona.component';
import { NewPersonaComponent } from './component/banner/new-persona/new-persona.component';



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
    NewExperienciaLaboralComponent,
    EditExperienciaLaboralComponent,
    EditEducacionComponent,
    NewEducacionComponent,
    EditSSkillComponent,
    NewSSkillComponent,
    NewHSBEComponent,
    EditHSBEComponent,
    NewHSFEComponent,
    EditHSFEComponent,
    EditProyectosComponent,
    NewProyectosComponent,
    NewAcercaDeMiComponent,
    EditAcercaDeMiComponent,
    EditPersonaComponent,
    NewPersonaComponent
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
