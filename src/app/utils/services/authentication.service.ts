import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, catchError, map, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url = 'https://reqres.in/api/login';
  tokenKey = 'token';
  isLogged$:  BehaviorSubject<boolean>;

  constructor(private http: HttpClient) {
    let bool = this.isLogged();
    this.isLogged$ = new BehaviorSubject<boolean>(bool);
  }

  login(user: {email: string, password: string}): Observable<boolean> {
      return this.http.post<{token: string}>(this.url, user).pipe(
        tap(({token}) => localStorage.setItem(this.tokenKey, token ) ),
        tap(() => this.isLogged$.next(true)),
        map(() => true),
        catchError(err => {throw new Error(this.handleError(err))})
      );
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.isLogged$.next(false);
  }

  isLogged():boolean {
    return !!localStorage.getItem(this.tokenKey) // retourne true si le contenue du storage est truthy ( string )
  }


  handleError(err: any) {
    if(err instanceof HttpErrorResponse && err.status === 400) {
      // dans la vrai : 401
        return 'Identifiants ou mot de passe invalide'
    }
    return `Quelque chose s'est mal, réessayez plus tard`
  }

}
