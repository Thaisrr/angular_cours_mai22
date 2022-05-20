import { Component, OnInit } from '@angular/core';
import {catchError, map, Observable, of, tap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-observable-bis',
  templateUrl: './observable-bis.component.html',
  styleUrls: ['./observable-bis.component.css']
})
export class ObservableBisComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    this.loadMeteo()
  }

  // Simuler un retour d'API
  httpGet(): Observable<any> {
    const meteo = {
      data: {
        page : {
          num: 1,
          pages: 1,
          el: 1,
          result: {
            meteo: {
              temp: 25,
              city: 'Lille'
            }
          }
        }
      }
    }
    return new Observable<any>(observer => {
      observer.next(meteo)
      observer.error(new Error('API ERROR'))
      observer.complete()
    })

  }


  // Dans le service
  getMeteo(): Observable<string | {temp: number, city: string}> {
    return this.httpGet().pipe(
      map(res => res.data.page.result.meteo), // map : entrée : réponse, retour : données modifiées
      tap(res => { console.log('Donnée Récupérée !') }), // entrée: donnée, pas de retour
      catchError(err => {
        if(err instanceof HttpErrorResponse) {
          console.log('Erreur status : ', err.status)
        }
        throw new Error(`Quelque chose s'est mal passé`)
      }), // pas de retour,
      catchError(err => of("ça marche pas")) // retour  récupéré comme valeur de l'observable
    )
  }

  // Dans le composant
  loadMeteo() {
    this.getMeteo().subscribe({
      next: res => {console.log('Reponse reçue !', res)},
      error: err => {console.log('Erreur reçue :', err.toString())},
      complete: () => console.log('Observable terminé')
    })
  }


}
