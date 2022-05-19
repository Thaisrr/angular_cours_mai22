import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Serie} from "../../utils/models/Serie";

@Component({
  selector: 'app-formulaires-reactifs',
  templateUrl: './formulaires-reactifs.component.html',
  styleUrls: ['./formulaires-reactifs.component.css']
})
export class FormulairesReactifsComponent {

  bookTitleControl = new FormControl('', [Validators.required, Validators.minLength(2)] );
  favoriteBook?: string;

  serieControl = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.maxLength(120)]),
    isFinished : new FormControl(false),
    seasons: new FormControl(1),
    author: new FormGroup({
      studio: new FormControl(),
      director: new FormControl()
    })
  });

  testGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.testGroup = this.formBuilder.group({
      nom: '',
      prenom: this.formBuilder.control(
        {value: '',},
        [Validators.required]
      ),
      email: undefined
    })
  }

  submitTitle() {
    this.favoriteBook = this.bookTitleControl.value;
    console.log("Champs valide ? " + this.bookTitleControl.valid)
    if(this.bookTitleControl.valid) {
      console.info('Données envoyées');
      this.bookTitleControl.reset();
    }
  }

  submitSerie() {
    console.info(this.serieControl.value);

    if(this.serieControl.valid) {
      const serie: Serie = this.serieControl.value;
      console.log(serie);
      this.serieControl.reset();
    } else {
      console.warn('Formulaire invalide !')
    }

  }

  /* Etats d'un input :
  - pristine : jamais reçu d'interraction
  - dirty : déjà reçu une interraction (==

  - touched : a déjà perdu le focus
  - untouched : jamais perdu le focus
   */




}
