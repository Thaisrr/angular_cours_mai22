import { Component, OnInit } from '@angular/core';
import {Observable, Subscriber, Subscription} from "rxjs";

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent {
  numb?: number;
  souscription: Subscription;

  constructor() {
    // Exemple 1 : version simplifiée
    // Erreur non traitée, donc affichée dans un console.error
    this.getData().subscribe(data => {
      console.log('1. Donnée reçue : ', data);
      this.numb = data;
    });
    // numb est undefined ici
    console.info('Hors subscribe : ', this.numb);

    // Exemple 2 : version 'objet'
    // Erreur traitée : pas d'affichage dans la console
    this.getData().subscribe({
      next: data => console.log('2. Donnée reçue : ', data),
      error: err => alert(err.toString()),
      complete: () => console.warn('Data - Finito')
      // On ne rentre pas dans complete si le flux est arrêté par erreur
      // Ni si il ne s'arrête jamais ( si l'observer ne retourne pas "complete()"
    })

    //Exemple 3 : flux
    // Ne retourne pas de "complete()"
    this.souscription = this.getFlux().subscribe(count => console.log('Flux ', count));


    setTimeout(() => {
      this.souscription.unsubscribe();
    }, 10000);

  }


  getData(): Observable<number> {
    return new Observable<number>( observer => {
      observer.next(1);
      observer.next(2);
      //observer.error(new Error('Boom !!!!!'));
      observer.next(3);
      observer.complete();
    });
  }

  getFlux(): Observable<number> {
    return new Observable<number>( obs => {
      let count = 0;
      setInterval(() => {
        obs.next(count);
        count++;
      }, 1000)
    })
  }

  /*
  A retenir sur les observables :

  - Pour accéder aux données d'un observable ( ou d'une fonction qui retourne un observable )
  -> Il faut souscrire ( .subscribe() ) à cet observable

  -> Le subscribe permet d'agir sur 3 états différents  de l'observable :
    - next : quand il emet une nouvelle valeur
    - error
    - complete : le flux est terminé, il n'émettra plus de valeurs

 -> Un observable se coupe pour 2 raisons : une erreur, ou une complétion ( complete )

 -> Certains flux ne se coupent pas d'eux même, il faut couper la souscription manuellement avec
 la méthode .unsubscribe()

   */


}
