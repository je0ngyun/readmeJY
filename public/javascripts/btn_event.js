'use strict';

let intro_btn;
let product_btn;

let btn_click_event = function (event) {
  let obj = event.target.id;
  if (obj === intro_btn.id) {
    alert('소개버튼클릭');
  }
  if (obj === product_btn.id) {
    alert('작품버튼클릭');
  }
};

let init = function () {
  intro_btn = document.getElementById('intro_btn');
  intro_btn.addEventListener('click', btn_click_event);
  product_btn = document.getElementById('product_btn');
  product_btn.addEventListener('click', btn_click_event);
};

window.onload = init;
