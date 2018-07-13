const arr = require('./script-2');

let hey = '';
var ui;
/*
window.funky = function() {
    console.log(scr);
  } */

  function funky() {

    var makeList = '';
    for (let i = 0; i < arr.length; i++) {
      makeList += `<li>${arr[i]}</li>`;
    }

    $("ul").html(makeList);
    
  }

  module.exports = {
    funky
  };

