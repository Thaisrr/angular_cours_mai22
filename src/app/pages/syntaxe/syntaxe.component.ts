import { Component} from '@angular/core';

@Component({
  selector: 'app-syntaxe',
  templateUrl: './syntaxe.component.html',
  styleUrls: ['./syntaxe.component.css']
})
export class SyntaxeComponent {

  message = 'Hello World !';
  name?: string;
  imageUrl = 'https://wallpaperaccess.com/full/19546.jpg';
  image = {
    alt : 'Hipster Cat',
    source: 'https://wallpaperaccess.com/full/128440.jpg',
    bidule: 'Coucou'
  }
  paragraphe = "Un super paragraphe";
  maclasse = 'red';
  mesclasses = ['red', 'centered'];
  isLogged = false;
  fruits = ['Pommes', 'Mangues', 'Framboises'];
  chaine = '<p>Coucou</p>';



  handleClic() {
    console.log('Click Click');
  }

  handleOver() {
    console.log('over');
  }

  clicParent() {
    console.info('Clic Parent')
  }

  clicEnfant(event: Event) {
    console.log(event);
    event.stopPropagation();
    console.info('Clic Enfant')
  }

  clicBtn(e: Event) {
    e.stopPropagation();
    console.info('Clic Button')
  }


  login() {
    this.isLogged = !this.isLogged;
  }


  // Exemple getter setter

  _toto?: string;

  get toto() {
    return this._toto;
  }

  set toto(toto) {
    this._toto = toto;
  }

  useToto() {
    console.log(this.toto);
    this.toto = 'Coucou';
  }




}
