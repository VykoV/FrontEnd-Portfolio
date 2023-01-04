import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { PorfolioService } from 'src/app/component/Service/porfolio.service';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common'; 
import { TokenService } from '../Service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  miporfolio:any;
  theme: Theme = 'light-theme';

  isLogged=false;

  constructor(private datosPorfolio:PorfolioService,
    @Inject(DOCUMENT) private document: Document, 
    private renderer: Renderer2,
    private router: Router,
    private tokenService:TokenService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miporfolio=data;
    });
    
    this.initializeTheme();

    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }

  switchTheme() {
    this.document.body.classList.replace(
      this.theme, 
      this.theme === 'light-theme' 
      ? (this.theme = 'dark-theme') 
      : (this.theme = 'light-theme')
    );

  }
  
  initializeTheme = (): void => 
    this.renderer.addClass(this.document.body, this.theme);

    onLogOut():void{
      this.tokenService.logOut();
      window.location.reload();
      this.router.navigate(['/login']);
    }

    login(){
      this.router.navigate(['/login']);
    }
  
}

export type Theme = 'light-theme' | 'dark-theme';
