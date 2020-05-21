import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GameService } from '../game.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  constructor(private gameService: GameService, private sanitizer: DomSanitizer) { }

  @Input() textNode = {
    text: "",
    options: []
  };
  
  @Output() next = new EventEmitter();
  @Output() intelligence = new EventEmitter();
  @Output() strength = new EventEmitter();
  @Output() affection = new EventEmitter();

  ngOnInit(): void {
    
  }

  moveToNext(next:string, intelligence:number, strength: number, affection:number) {
    this.next.emit(next);
    this.intelligence.emit(intelligence);
    this.strength.emit(strength);
    this.affection.emit(affection);

  }

  download(){
    let myJson = sessionStorage.getItem("storyline");
    let sJson = JSON.stringify(myJson, undefined, 1);
    let username = sessionStorage.getItem("username");
    sJson += username;
    console.log(sJson);
    let element = document.createElement('a');
    element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(sJson));
    element.setAttribute('download', "story.json");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click(); // simulate click
    document.body.removeChild(element);
  }

  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }



}
