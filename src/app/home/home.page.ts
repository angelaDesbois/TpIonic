import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public pseudo ="";
  public niveau="";
  public sauvegarder = false;
  public error="";
  public startGame = false;
  public nextQuest = false;


  constructor() {}

  public commencer(){
    if((this.pseudo === "" || this.pseudo.length < 3) || this.niveau === ""){
      this.error = "Veuillez entrer un pseudo et un niveau";
      return;
    }
    this.startGame = true;
  }

  public response(response:string){
    this.nextQuest = true;
  }

}
