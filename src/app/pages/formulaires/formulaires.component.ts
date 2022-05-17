import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaires',
  templateUrl: './formulaires.component.html',
  styleUrls: ['./formulaires.component.css']
})
export class FormulairesComponent  {

  userSearch?: string;
  user = {name: '', email: ''};
  nameError = false;


  concat() {
    return this.user.name + this.user.email;
  }

  checkName() {
    if(!this.user.name || this.user.name.length < 3) {
      this.nameError = true;
    } else {
      this.nameError = false;
    }
  }

  handleSubmit() {
    if(!this.nameError) {
      console.log('Saving user : ', this.concat())
    }
  }

}
