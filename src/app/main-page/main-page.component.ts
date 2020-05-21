import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  username: string;

  constructor(private _router: Router, private gameService: GameService) { }

  ngOnInit(): void {
  }

  startGame() {
    if(this.username != null) {
      sessionStorage.setItem("nextTextID", "1");
      sessionStorage.removeItem("storyline");
      sessionStorage.setItem("username", this.username);
      this._router.navigate(['/game']);
    }
  }
}
