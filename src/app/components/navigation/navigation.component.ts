import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../utils/services/authentication.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isLogged: boolean = false;

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.auth.isLogged$.subscribe(res => this.isLogged = res)
  }

  logout() {
    this.auth.logout();
  }

}
