/* 
Write a function that is going create a deck of cards and also perfom operations like initialize the card, shuffle the card, draw the card and reset the card

*/

//  @desc: PSEUDOCODE FOR THE PROBLEM
//  in a card i have suits and also ranks
//  the suit include 'Heart' 'Spades' 'Diamonds' 'Clubs';
//  a rank includes the '2, 3, 4, 5, 6, 7, 8, 9, 10, Ace, Jack, Queen, King';
//  initialize the cards to include all the suits
//  create a method that changes the position of all cards
//  create a method that draws one of the card from its position
//  reset the card


class Cards {
  constructor(private suit: string, private rank: string) {
    this.suit = suit;
    this.rank = rank;
  }

  toString() {
    return `Card: ${this.rank} of ${this.suit}`;
  }
}

class Deck {
  suit: string[];
  rank: string[];
  cards: Cards[];

  constructor() {
    this.suit = ["Heart", "Spades", "Diamonds", "Clubs"];
    this.rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10","Ace", "Jack", "Queen", "King"];
    this.cards = [];
    this.initializeDeck();
  }

  initializeDeck() {
    this.cards = [] // mainly used when the reset function is being called
    for (const suit of this.suit) {
      for (const rank of this.rank) {
        this.cards.push(new Cards(suit, rank))
      }
    }
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  draw() {
    return this.cards.pop();
  }

  reset() {
    this.initializeDeck();
    this.shuffle();
  }
}

const deckOne = new Deck();
deckOne.shuffle()
console.log(deckOne.draw()!.toString())
console.log(deckOne.draw()!.toString())
console.log(deckOne.cards.length)