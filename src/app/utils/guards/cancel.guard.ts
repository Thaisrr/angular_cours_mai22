import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {SecretComponent} from "../../pages/secret/secret.component";

@Injectable({
  providedIn: 'root'
})
export class CancelGuard implements CanDeactivate<SecretComponent> {
  canDeactivate(
    component: SecretComponent,
    currentRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    next: RouterStateSnapshot
  ): boolean {
    const leave = component.canLeave;
  // const leave = window.confirm('Êtes vous sûr⋅e de vouloir quitter cette page ? Les données seront supprimées.');
    console.log(leave)
    return leave
  }

}
