import { Component, OnInit } from '@angular/core';
import {Formation} from "../../utils/models/Formation";

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent {
  compteurTitle = 'Likes';
  compteurMessage = "Ceci est un message très important";

  formations: Formation[] = [
    {title: 'Angular Init', price: 1000000, duration: 35, description: `Angular c'est chouette`, img: 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png'},
    {title: 'React Init', price: 1000000, duration: 35, description: `Angular c'est chouette`, img: 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png'},
    {title: 'VueJS Init', price: 1000000, duration: 35, description: `Angular c'est chouette`, img: 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png'},
    {title: 'NodeJS Init', price: 1000000, duration: 35, description: `Angular c'est chouette`, img: 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png'},
  ];

  handleMessage(event: string) {
    console.log('Message pris en compte dans le parent');
    alert(event);
  }

  deleteFormation(index: number) {
    this.formations.splice(index, 1);
  }

  modifyFormation(index: number) {
    this.formations[index].price += 100;
  }



}
