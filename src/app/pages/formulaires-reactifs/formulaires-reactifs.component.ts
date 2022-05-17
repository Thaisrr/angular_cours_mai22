import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-formulaires-reactifs',
  templateUrl: './formulaires-reactifs.component.html',
  styleUrls: ['./formulaires-reactifs.component.css']
})
export class FormulairesReactifsComponent {

  bookTitleControl = new FormControl();
  favoriteBook?: string;

  submitTitle() {
    this.favoriteBook = this.bookTitleControl.value;
  }




}
