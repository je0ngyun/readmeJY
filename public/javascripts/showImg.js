'use strict';
var App = window.App || {};

App.showImg = (function () {
  let menu;
  let img;

  let _overEvent = function (event) {
    let index = Number(App.main.getItemIndex(event, menu)) + Number(1);
    let element = img.item(index);
    for (let item of img) {
      item.style.display = 'none';
    }
    element.style.display = 'block';
  };

  let _outEvent = function () {
    if (img.item(0).style.display == 'block') {
      return;
    }
    for (let item of img) {
      item.style.display = 'none';
    }
    img.item(0).style.display = 'block';
  };

  return {
    run: function () {
      menu = document.querySelectorAll('.product');
      img = document.querySelectorAll('.project-img');
      for (let item of menu) {
        App.main.addEvent(item, 'mouseover', _overEvent);
        App.main.addEvent(item, 'mouseout', _outEvent);
      }
    },
  };
})();

window.addEventListener(
  'load',
  function () {
    App.showImg.run();
  },
  false,
);
