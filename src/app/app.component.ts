import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CALCULATOR';
  num1 = "";
  num2 = "";
  operationChoice = "";


  receiveNum1($event : any){
    this.num1 = $event;
  }
  receiveNum2($event : any){
    this.num2 = $event;
  }



  receiveAdd($event : any){
    this.operationChoice = $event;
  }
  receiveSubtract($event : any){
    this.operationChoice = $event;
  }
  receiveMultiply($event : any){
    this.operationChoice = $event;
  }
  receiveDivide($event : any){
    this.operationChoice = $event;
  }

}



