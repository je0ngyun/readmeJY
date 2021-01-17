'use strict';
var App = window.App || {};

App.select = (function () {
  let menu;
  let activePage;
  let currentPage;

  let _getIndx = function (item) {
    let indexArr = Array.from(menu);
    for (let index in indexArr) {
      if (menu.item(index) === item.currentTarget) {
        return index;
      }
    }
  };

  let _fadeAni = function (event) {
    let index = _getIndx(event);
    let element = activePage.item(index);
    let op;
    let timer;

    if (element != currentPage) {
      op = 1;
      timer = setInterval(fadeOut, 15);
      setTimeout(function () {
        currentPage = element;
        op = 0.1;
        timer = setInterval(fadeIn, 15);
      }, 550);
    }

    function fadeOut() {
      if (op <= 0.1) {
        clearInterval(timer);
        currentPage.style.display = 'none';
      }
      currentPage.style.opacity = op;
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

  return {
    run: function () {
      menu = document.querySelectorAll('.product');
      activePage = document.querySelectorAll('.page');
      currentPage = activePage.item(0);
      for (let item of menu) {
        App.main.addEvent(item, 'click', _fadeAni);
      }
    },
  };
})();
window.addEventListener(
  'load',
  function () {
    App.select.run();
  },
  false,
);
