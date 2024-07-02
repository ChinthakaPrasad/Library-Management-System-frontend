import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(private router: Router){

  }

  viewBookNavigation():void{
    this.router.navigateByUrl("view-all-books");
  }

  isHomeNavigation() : boolean{
    return this.router.url.includes("home");
  }

  isViewBorrowerNavigation() : boolean{
    return this.router.url.includes("view-all-borrowers");
  }

  isViewBookNavigation() : boolean{
    return this.router.url.includes("view-all-books");
  }

  homeNavigation():void{
    this.router.navigateByUrl("home");
  }
  viewBorrowerNavigation():void{
    this.router.navigateByUrl("view-all-borrowers");
  }

  logOutNavigation():void{
    this.router.navigateByUrl("login");
  }

  aboutNavigation():void{
    this.router.navigateByUrl("about");
  }

  isAboutNavigation():boolean{
    return this.router.url.includes("about");
  }

}
