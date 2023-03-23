import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  operatorA: number;
  operatorB: number;

  @Output() resultAdd = new EventEmitter < number > ();


  addFunction(): void {
    let result = this.operatorA + this.operatorB;
    this.resultAdd.emit(result);

  }
}
