import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { OpenTriviaService } from '../provider/open-trivia.services';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public pseudo ="";
  public niveau="easy";
  public sauvegarder = false;
  public error="";
  public startGame = false;
  public nextQuest = false;
  public endGame = false;
  public questions = [];
  public questionCourante;
  public numeroQuestion = 0;
  public points= 0;


  constructor(private alertCtrl : AlertController, private openTriviaService : OpenTriviaService) {}

  ngOnInit(){}

  public async loadQuestions() {
    this.endGame = false;
    this.nextQuest = false;
    this.numeroQuestion = 0;
   // this.points = 0;
    try{
      this.questions = await this.openTriviaService.getQuestions(this.niveau, 10);
      this.loadQuestion();

    }catch(error){
      const alert = await(this.alertCtrl.create({
        message: error
      }));
      alert.present();
    }
   
  }


  public loadQuestion() {
    this.questionCourante = this.questions[this.numeroQuestion];
    this.questionCourante["answers"] = [];
    for (let answer of this.questionCourante["incorrect_answers"]) {
    this.questionCourante["answers"].push({
    correct: false,
    answer: answer
    
    });
  }
    this.questionCourante["answers"].push({
    correct: true,
    answer: this.questionCourante["correct_answer"]
    });
    
    this.questionCourante["answers"] = this.shuffleArray(this.questionCourante["answers"]);
  }

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    }
    return array;
  }





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
    this.loadQuestions();
    this.startGame = true;
  }

  public response(response:string){
    this.nextQuest = true;
    if (response["correct"]) {
      this.points++;
    }
   
    if (this.numeroQuestion >= this.questions.length - 1) {
      this.endGame = true;
    }
  }

  questionSuivante() {
    if (this.numeroQuestion < this.questions.length - 1) {
    this.numeroQuestion++;
    this.nextQuest = false;
    this.loadQuestion();
    }
  }
    
  retour() {
    this.startGame = false;

  } 

}


