import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class GameService {
  traits = {
    intelligence: 10,
    strength: 10,
    affection: 10
  };

  story = [
    {
      id: 1,
      text: 'You have have a lecture at 10am. What do you do?',
      options: [
        {
          text: 'Take that lecture',
          nextText: 2,
          intelligence: 11,
          strength: 9,
          affection: 10
        },
        {
          text: 'Sleep until 12am',
          nextText: 3,
          intelligence: 9,
          strength: 12,
          affection: 10
        }
      ]
    },
    {
      id: 2,
      text: 'The lecture is boring. Your mate suggests going to get a beer instead.',
      options: [
        {
          text: 'Go with him',
          nextText: 4,
          intelligence: 10,
          strength: 8,
          affection: 10
        },
        {
          text: 'Try to pay attention anyways',
          nextText: 5,
          intelligence: 12,
          strength: 9,
          affection: 10
        }
      ]
    },
    {
      id: 3,
      text: 'You wake up at 4pm, that party last night was brutal',
      options: [
        {
          text: 'Feel guilty, and drink a healing beer',
          nextText: 6,
          intelligence: 4,
          strength: 42,
          affection: 15
        }
      ]
    },
    {
      id: 4,
      text: 'You order two beers. You start wondering, why are you drinking at 10am. This is serious.',
      options: [
        {
          text: 'Swipe away the demons, and continue talking with your friend',
          nextText: 6,
          intelligence: 10,
          strength: 13,
          affection: 19
        },
        {
          text: 'Your anxiety kicks in, so you go back to the lecture. You gotta keep grinding',
          nextText: 5,
          intelligence: 9,
          strength: 8,
          affection: 9
        }
      ]
    },
    {
      id: 5,
      text: "The lecture is over, it wasn't even that bad. You forgot to do one of your homeworks for the next class.",
      options: [
        {
          text: 'Try to do it anyways, but you have to skip lunch',
          nextText: 7,
          intelligence: 13,
          strength: 8,
          affection: 9
        },
        {
          text: "Have lunch, and try to stay sneaky during class, hoping the teacher doesn't recognize",
          nextText: 8,
          intelligence: 11,
          strength: 11,
          affection: 9
        }
      ]
    },
    {
      id: 6,
      text: 'You suddenly die of alcohol poisoning',
      options: []
    },
    {
      id: 7,
      text: 'You get recognized as one of the most hardworking students, and you get a million dollars. Life is finally fair.',
      options: []
    },
    {
      id: 8,
      text: 'You end up working for a multinational company for low wage, your life is quite mediocre, but you are still having some fun',
      options: []
    }
  ]
//7, 8
  currentStory = {};
  i = 1;

  constructor() { }

  nextEpisode(option) {
    let nextTextID = option.nextText;
    sessionStorage.setItem("nextTextID", nextTextID);
  }

  showTextNode(id: number):any {
    let ret: any;
    this.story.forEach(textNode => {
      if(textNode.id === id){
        ret = textNode;
      }
    });
    this.currentStory[this.i] = ret;
    this.i++;
    sessionStorage.setItem("storyline", JSON.stringify(this.currentStory))
    return ret;
  }



}
