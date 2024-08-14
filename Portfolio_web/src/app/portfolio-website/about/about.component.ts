import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  showCompany:boolean=true;
  showProjects:boolean=true;

  projects = [
    {
      name :'Project 1',
      description: 'Cirpack',
      year: 2023
    },

    {
      name :'Project 2',
      description: '5G/USC',
      year: 2024
    },

    {
      name :'Project 3',
      description: 'Soctrip',
      year: 2024
    },
  ]
}
