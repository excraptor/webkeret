import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  textNode: {
    id: "",
    text: "",
    options: []
  };
  traits = {
    intelligence: 10,
    strength: 10,
    affection: 10
  };

  constructor(private router: Router, private gameService: GameService) { }

  ngOnInit(): void {
    console.log(+sessionStorage.getItem("nextTextID"));
    this.textNode = this.gameService.showTextNode(+sessionStorage.getItem("nextTextID"));
    console.log(this.textNode);
  }

  restart() {
    sessionStorage.setItem("nextTextID", "1");
    sessionStorage.removeItem("storyline");
    sessionStorage.removeItem("username");
    this.gameService.currentStory = [];
    this.gameService.i = 1;
    this.router.navigate(['/']);
  }
  
  goToNext(nextTextID: string) {
    this.textNode = this.gameService.showTextNode(+nextTextID);
  }

  updateIntelligence(intelligence: number) {
    this.traits.intelligence = intelligence;
  }

  updateStrength(strength: number) {
    this.traits.strength = strength;
  }

  updateAffection(affection: number) {
    this.traits.affection = affection;
  }



}
