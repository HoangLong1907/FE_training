import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioWebsiteRoutingModule } from './portfolio-website-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    PortfolioWebsiteRoutingModule,
    MatCardModule
  ]
})
export class PortfolioWebsiteModule { }
