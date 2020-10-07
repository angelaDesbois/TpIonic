import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})
export class OpenTriviaService {
    constructor() { }
    async getQuestions(niveau: string, nb: number) {
    return [
    {
    category: "Entertainment: Japanese Anime & Manga",
    type: "multiple",
    niveau: "easy",
    question: "In Fairy Tail, what is the nickname of Natsu Dragneel?",
    correct_answer: "The Salamander",
    incorrect_answers: ["The Dragon Slayer", "The Dragon", "The Demon"]
    },
    {
        category: "Entertainment: Japanese Anime & Manga",
        type: "multiple",
        niveau: "easy",
        question: "In Fairy Tail, what is the nickname of Natsu popo?",
        correct_answer: "The Dragon Slayer",
        incorrect_answers: ["The Salamander", "The Dragon", "The Demon"]
        },
    {
    category: "Entertainment: Video Games",
    type: "boolean",
    niveau: "medium",
    question: "Return to Castle Wolfenstein was the only game of the Wolfenstein series where you don&#039;t play as William &quot;B.J.&quot; Blazkowicz.",
   
    correct_answer: "False",
    incorrect_answers: ["True"]
    }
  ]
 }
}