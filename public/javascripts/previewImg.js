'use strict';
var App = window.App || {};

App.previewImg = (function () {
  let menu;
  let previewboxs;
  let pos;

  let _overEvent = function (event) {
    let index = Number(App.main.getItemIndex(event, menu)) + Number(0);
    previewboxs.item(index).style.display = 'block';
  };

  let _outEvent = function (event) {
    let index = Number(App.main.getItemIndex(event, menu)) + Number(0);
    previewboxs.item(index).style.display = 'none';
  };

  let _moveEvent = function (event) {
    let index = Number(App.main.getItemIndex(event, menu)) + Number(0);
    previewboxs.item(index).style.left = pos.positionX + 30 + 'px';
    previewboxs.item(index).style.top = pos.positionY + 'px';
  };

  function get_position_of_mousePointer(event) {
    event = event || window.event;

    var x = 0; // 마우스 포인터의 좌측 위치
    var y = 0; // 마우스 포인터의 위쪽 위치
    x = event.clientX;
    y = event.clientY;
    return { positionX: x, positionY: y };
  }

  function trackPointer(event) {
    pos = get_position_of_mousePointer(event);
  }

  return {
    run: function () {
      menu = document.querySelectorAll('.product');
      previewboxs = document.querySelectorAll('.previewbox');
      let body = document.body;

      App.main.addEvent(body, 'mousemove', trackPointer);

      for (let item of menu) {
        App.main.addEvent(item, 'mouseover', _overEvent);
        App.main.addEvent(item, 'mouseout', _outEvent);
        App.main.addEvent(item, 'mousemove', _moveEvent);
      }
    },
  };
})();
