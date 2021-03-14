var App = window.App || {};

App.main = (function () {
  return {
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
  };
})();

window.addEventListener(
  'load',
  function () {
    App.pageToggle.run();
    App.productToggle.run();
    App.scroll.run();
    App.preview.run();
    App.letterAni.run();
    App.markdown.run();
    App.previewImg.run();
  },
  false,
);
