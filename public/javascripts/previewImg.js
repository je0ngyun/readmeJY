'use strict';
var App = window.App || {};

App.previewImg = (function () {
  let menu;
  let previewboxs;

  let _overEvent = function (event) {
    let index = Number(App.main.getItemIndex(event, menu)) + Number(0);
    previewboxs.item(index).style.display = 'block';
  };

  let _outEvent = function (event) {
    let index = Number(App.main.getItemIndex(event, menu)) + Number(0);
    previewboxs.item(index).style.display = 'none';
  };

  return {
    run: function () {
      menu = document.querySelectorAll('.product');
      previewboxs = document.querySelectorAll('.previewbox');
      for (let item of menu) {
        App.main.addEvent(item, 'mouseover', _overEvent);
        App.main.addEvent(item, 'mouseout', _outEvent);
      }
    },
  };
})();
