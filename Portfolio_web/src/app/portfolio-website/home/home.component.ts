import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // standalone: true,
  // imports: [
  //   NavbarComponent, 
  //   FooterComponent
  // ]
})
export class HomeComponent {
  openAngularWebsite() {
    window.open('https://angular.io', '_blank');
  }

  openJavaScriptWebsite() {
    window.open('https://javascript.info/', '_blank');
  }

  openCssWebsite() {
    window.open('https://cssreference.io/', '_blank');
  }
}
