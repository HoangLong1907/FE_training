import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  youtubeLink = 'https://www.youtube.com/watch?v=JutCh8pgzV0';
  emailAddress = 'lhlong2@tma.com.vn';
  constructor(public router:Router){

  }

  onHome(){
    window.scrollTo({top:0, behavior:'smooth'})
  }

  onAbout(){
    this.router.navigate(['./portfolio-website/about'])
  }

  onContact(){
    this.router.navigate(['./portfolio-website/contact'])
  }
}
