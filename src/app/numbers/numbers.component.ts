import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  num1 = "";
  num2 = "";
  
  @Output() sendInput1 = new EventEmitter<string>();
  @Output() sendInput2 = new EventEmitter<string>();

  sendNum1(){
    this.sendInput1.emit(this.num1);
  }

  sendNum2(){
    this.sendInput2.emit(this.num2);
  }
}
