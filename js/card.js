import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

// Suit Constructor
let Suit = function() {

  this.diamonds = 'diamonds',
  this.hearts = 'hearts',
  this.spades = 'spades',
  this.clubs = 'clubs'
 
};

// CardConstructor
let Card = function(name, suit, img, cardValue) {

  this.name = name,
  this.suit = suit,
  this.img = img,
  this.cardValue = cardValue;

}

Card.prototype.toString = function() {
  let value = '';
  switch (this.suit) {
    case Suit.hearts: value = 'Hearts';
    case Suit.clubs: value = 'Clubs';
    case Suit.diamonds: value = 'Diamonds';
    case Suit.spades: value = 'Spades';
  }
}


let deck = [];

deck.push(new Card('','','',''))

deo
export default Card;