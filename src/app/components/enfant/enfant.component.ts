import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent  {
  counter = 0;
  @Input() title! : string; // "obligatoire"
  @Input() message? : string; // optionnel
  @Input() action : string = '++'; // optionnel avec valeur par défaut
  @Input('machin') bidule?: string;
  //@Input( nom utilisé dans le parent ) nom de la variable ici;
  // On peut passer n'importe quel type d'input :
  //

  // Typage à la volée
  msg? : string;
  user: {nom: string, email: string} = {nom: 'Toto', email: 'email'};
  role? : 'ADMIN' | 'MODO';
  truc? : string | number;


  @Output() emitMessage = new EventEmitter<string>();
  // Peut être n'importe quel type de données ( objet créé depuis une
  //interface, tableau, Object, primitifs....


  incrementCounter() {
    this.counter++;
  }

  sendMessage() {
    console.log('Message envoyé...');
    this.emitMessage.emit('Hello World !');
  }



}
