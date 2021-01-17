var App = window.App || {};

App.main = (function () {
  let menu;
  let activePage;
  let currentPage;

  let _fadeAni = function (event) {
    App.main.pauseRock(menu, 'click', _fadeAni);
    let index = App.main.getItemIndex(event, menu);
    let element = activePage.item(index);
    let op;
    let timer;

    if (element != currentPage) {
      op = 1;
      timer = setInterval(fadeOut, 17);
      setTimeout(function () {
        currentPage = element;
        op = 0.1;
        timer = setInterval(fadeIn, 17);
      }, 500);
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
      menu = document.querySelectorAll('.btn-grad');
      activePage = document.querySelectorAll('.active-page');
      currentPage = activePage.item(0);
      for (let item of menu) {
        App.main.addEvent(item, 'click', _fadeAni);
      }
    },
    addEvent: function (obj, event, callback) {
      obj.addEventListener(event, callback);
    },
    delEvent: function (obj, event, callback) {
      obj.removeEventListener(event, callback, false);
    },
    pauseRock: function (list, event, callback) {
      for (let item of list) {
        App.main.delEvent(item, event, callback);
      }
      setTimeout(function () {
        for (let item of list) {
          App.main.addEvent(item, event, callback);
        }
      }, 600);
    },
    getItemIndex: function (item, list) {
      let indexArr = Array.from(list);
      for (let index in indexArr) {
        if (list.item(index) === item.currentTarget) {
          return index;
        }
      }
    },
    getIndex: function (item, list) {
      let indexArr = Array.from(list);
      for (let index in indexArr) {
        if (menu.item(index) === item.currentTarget) {
          console.log('success');
          return index;
        }
      }
    },
  };
})();

window.addEventListener(
  'load',
  function () {
    App.main.run();
  },
  false,
);
