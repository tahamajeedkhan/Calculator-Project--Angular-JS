import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stringToEval : string = "";
  takeinput(num:string){
    this.stringToEval = this.stringToEval + num;
    console.log(this.stringToEval);
  }
  evaluate(){
    if(this.stringToEval != undefined){
      this.stringToEval = eval(this.stringToEval);
    }
  }
  reset(){
    this.stringToEval = "";
  }
}
