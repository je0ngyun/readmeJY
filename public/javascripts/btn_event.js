'use strict';

let menu;
let intro_btn;
let product_btn;
let active_page;
let current_page;

let bg_color = '#5120ff';
let black_color = '000000';

let fadeout = function (index) {
  console.log(active_page.item(index));
};

let fadein = function (index) {
  console.log(active_page.item(index));
};

let btn_click_event = function (event) {
  for (let item of menu) {
    item.style.removeProperty('color');
    item.style.removeProperty('border-bottom');
  }
  event.target.style.color = bg_color;
  event.target.style.borderBottomColor = bg_color;
};

let init = function () {
  active_page = document.getElementsByClassName('active_page');
  current_page = active_page.item(0);
  menu = document.getElementsByClassName('menu-btn');
  intro_btn = menu.item(0);
  product_btn = menu.item(1);
  intro_btn.addEventListener('click', btn_click_event);
  product_btn.addEventListener('click', btn_click_event);
};

window.onload = init;
