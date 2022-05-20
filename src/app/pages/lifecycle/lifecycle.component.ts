import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, OnDestroy {
  @Input() message = 'Hello World !';

  constructor() {
    console.log("Instanciation de la classe")
  }

  ngOnInit(): void {
    console.log('Initialisation du composant');
    // Appels API
    // Initialisation de données, appelle de méthode à lancer une fois à l'initialisation du composant
  }

  // Se déclanche quand le parent modifie l'Input
  ngOnChanges(changes:SimpleChanges) {
    console.log(changes);
    console.log('Modification de la vue')
  }

  ngOnDestroy() {
    console.log('Destruction du composant');
    // Couper les flux, les intervals, les websockets....
    // unsubscribe
  }


}
