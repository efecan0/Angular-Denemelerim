import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  length:number = 0;
  includeLetters:boolean = false;
  includeNumbers:boolean = false;
  includeSymbols:boolean = false;
  lastPassword:string = "";

  modifyLength(value:string){
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }

  modifyLetters(){
    this.includeLetters = !this.includeLetters;
    console.log(this.includeLetters);

  }

  modifyNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  modifySymbols(){
    this.includeSymbols = !this.includeSymbols
  }
  
buttonClick(){
  const numbers = "0123456789";
  const letters = "abcdefghijklmnopqrstuvwyz";
  const symbols = "!@#$½{[]}()=&+%+";

  var validChars = '';

  if(this.includeLetters){
    validChars+= letters;
  }

  if(this.includeNumbers){
    validChars+= numbers;
  }
  
  if(this.includeSymbols){
    validChars+= symbols;
  }
  
  var generatedPassword = "";

  for(let i =0 ; i<this.length;i++){
    var index = Math.floor(Math.random()*validChars.length);
    generatedPassword += validChars[index];
  }

  this.lastPassword = generatedPassword
}
}

