'use strict';

let menu;
let intro_btn;
let product_btn;
let clicked;
let active_page;
let current_page;

let bg_color = '#5120ff';
let black_color = '000000';

let fadeout = function (box) {};

let fadein = function (box) {};

let _eventhandler = function (btn) {
  btn.addEventListener('click', fade_ani);
};

let init = function () {
  active_page = document.getElementsByClassName('active_page');
  current_page = active_page.item(0);
  menu = document.getElementsByClassName('btn-grad');
  //index 0 is nav bar
  intro_btn = menu.item(1);
  product_btn = menu.item(2);

  _eventhandler(intro_btn);
  _eventhandler(product_btn);
};

let fade_ani = function (event) {
  let index;
  if (event.target == intro_btn) {
    index = 0;
  } else {
    index = 1;
  }
  let element = active_page.item(index);
  let op;
  let timer;

  if (element.style.display === 'block') {
    op = 1;
    timer = setInterval(fadeOut, 20);
  } else {
    op = 0.1;
    timer = setInterval(fadeIn, 20);
  }

  function fadeOut() {
    if (op <= 0.1) {
      clearInterval(timer);
      element.style.display = 'none';
    }
    element.style.opacity = op;
    op -= op * 0.1;
  }

  function fadeIn() {
    element.style.display = 'block';
    if (op >= 0.95) {
      clearInterval(timer);
    }
    element.style.opacity = op;
    op += op * 0.1;
  }
};

window.onload = init;
