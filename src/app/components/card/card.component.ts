import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Formation} from "../../utils/models/Formation";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {

  @Input() formation! : Formation;
  @Input('index') id!: number;

  @Output() emitDelete = new EventEmitter<number>();
  @Output() emitModify = new EventEmitter<number>();

  modify() {
    this.emitModify.emit(this.id)
  }

  delete() {
    this.emitDelete.emit(this.id)
  }

}
