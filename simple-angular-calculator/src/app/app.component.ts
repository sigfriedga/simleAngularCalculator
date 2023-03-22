import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicación de Calculadora';
  operatorA: number = 0;
  operatorB: number = 0;
  result: number = 0;


  addFunction():void{
    this.result = this.operatorA + this.operatorB;
  }

  
}
