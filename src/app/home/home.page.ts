import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

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


  constructor(private alertCtrl : AlertController) {}

  ngOnInit(){}

  public async commencer(){
    if((this.pseudo === "" || this.pseudo.length < 3) || this.niveau === ""){
      const alert = await this.alertCtrl.create({
        header : 'infos manquantes',
        message : "Veuillez entrer un pseudo et un niveau"
    });
      alert.present();
     // this.error = "Veuillez entrer un pseudo et un niveau";
      return;
    }
    this.startGame = true;
  }

  public response(response:string){
    this.nextQuest = true;
  }

}
