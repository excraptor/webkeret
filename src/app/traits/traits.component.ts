import { Component, OnInit, Input, Output, } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-traits',
  templateUrl: './traits.component.html',
  styleUrls: ['./traits.component.css']
})
export class TraitsComponent implements OnInit {

  @Input() traits = {
    intelligence: 0,
    strength: 0,
    affection: 0
  };
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

}
