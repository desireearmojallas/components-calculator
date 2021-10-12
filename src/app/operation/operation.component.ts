import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  @Output() choiceOp = new EventEmitter<string>();

  operationChoice : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  add(){
    console.log("add works");
    this.operationChoice = "+";
    this.choiceOp.emit(this.operationChoice);
  }

  subtract(){
    console.log("subtract works");
    this.operationChoice = "-";
    this.choiceOp.emit(this.operationChoice);
  }

  multiply(){
    console.log("multiply works");
    this.operationChoice = "*";
    this.choiceOp.emit(this.operationChoice);
  }

  divide(){
    console.log("divide works");
    this.operationChoice = "/";
    this.choiceOp.emit(this.operationChoice);
  }

}
