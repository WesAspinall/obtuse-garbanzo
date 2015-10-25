import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

console.log('Hello, World');

import Player1 from './player1';
import CPU from './cpu';


// Card Instance

// Player1 Instance
let TwoChainz = new Player1();


// CPU Instance



// Setting up on events

let display = function() {

  $('.cardP1').addClass();

};

$('.button1').on('click', function() {

  let genNum = function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

  console.log(genNum(1, 13));


});