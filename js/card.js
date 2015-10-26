import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

// Suit Constructor
let suitType = function() {

  this.hearts = 'hearts',
  this.clubs = 'clubs',
  this.diamonds = 'diamonds',
  this.spades = 'spades',
 
};

// Card Constructor
let Card = function(name, suitType, img, cardValue) {

  this.Name = name,
  this.suitType = suitType,
  this.Img = img,
  this.CardValue = cardValue;

}

Card.prototype.toString = function() {
  let value = '';
  switch (this.suit) {
    case suitType.hearts: value = 'Hearts';
    case suitType.clubs: value = 'Clubs';
    case suitType.diamonds: value = 'Diamonds';
    case suitType.spades: value = 'Spades';
  }
  return name 
}


let deck = [];

deck.push(new Card('','','',''))

deo
