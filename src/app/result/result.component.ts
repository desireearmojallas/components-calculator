import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() num1 : any = "";
  @Input() num2 : any = "";
  @Input() operatorChoice : any = "";
  result !: number;

  constructor() { }

  ngOnInit(): void {
  }

  answer(){
    console.log("answer works");
    if (this.operatorChoice === "+")
    this.result = this.num1 + this.num2;
    else if (this.operatorChoice === "-")
    this.result = this.num1 - this.num2;
    else if (this.operatorChoice === "*")
    this.result = this.num1 * this.num2;
    else if (this.operatorChoice === "/")
    this.result = this.num1 / this.num2;
  }

}


