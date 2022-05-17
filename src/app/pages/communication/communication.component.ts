import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent {
  compteurTitle = 'Likes';
  compteurMessage = "Ceci est un message très important";

  handleMessage(event: string) {
    console.log('Message pris en compte dans le parent');
    alert(event);
  }


}
