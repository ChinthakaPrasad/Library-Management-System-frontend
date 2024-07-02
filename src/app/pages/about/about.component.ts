import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(private router:Router){

  }

  viewBookClicked():void{
    this.router.navigateByUrl("view-all-books");
  }

  goToAdmin():void{
    this.router.navigate([], {fragment:"admin"});
  }

}
