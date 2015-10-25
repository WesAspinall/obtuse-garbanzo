import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

console.log('Hello, World');

import Player1 from './player1';
import CPU from './cpu';
import Card from './card';






// Recording clicks

let cardQuantity = 52;
let countCard = function() {

  cardQuantity -= 1;
  console.log(cardQuantity);

  if (cardQuantity <= 0) {
    console.log ('end of deck');
  } else {
    console.log('play');
  }
};

$('.button1').on('click', countCard);