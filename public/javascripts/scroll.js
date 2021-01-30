'use strict';
var App = window.App || {};

App.scroll = (function () {
  function scrollAutoTestFnc() {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight,
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop,
    );
    let clientHeight = document.documentElement.clientHeight;
    if (scrollHeight - (scrollTop + clientHeight) < 100) {
      document.querySelector('.float').classList.add('fl-in');
    }
    if (scrollHeight - (scrollTop + clientHeight) > 100) {
      document.querySelector('.float').classList.remove('fl-in');
    }
  }
  return {
    run: function () {
      App.main.addEvent(document, 'scroll', scrollAutoTestFnc);
    },
  };
})();
