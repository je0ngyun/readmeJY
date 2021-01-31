'use strict';
var App = window.App || {};

App.markdown = (function () {
  let page = document.querySelectorAll('.page');
  let introduce = document.getElementById('introduce');

  function readTextFile(file, element) {
    var rawFile = new XMLHttpRequest();
    rawFile.open('GET', file, false);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
          var allText = rawFile.responseText;
          element.innerHTML = marked(allText);
        }
      }
    };
    rawFile.send(null);
  }

  return {
    run: function () {
      readTextFile('./static/test.md', introduce);
      readTextFile('./static/product1.md', page.item(0));
      readTextFile('./static/product2.md', page.item(1));
      readTextFile('./static/product3.md', page.item(2));
      readTextFile('./static/product4.md', page.item(3));
    },
  };
})();
