let menu;
let introBtn;
let productBtn;
let activePage;
let currentPage;

let _eventhandler = function (btn) {
  btn.addEventListener('click', fadeAni);
};

activePage = document.getElementsByClassName('active-page');
currentPage = activePage.item(0);
menu = document.getElementsByClassName('btn-grad');
introBtn = menu.item(0);
productBtn = menu.item(1);
_eventhandler(introBtn);
_eventhandler(productBtn);

function fadeAni(event) {
  let index;
  if (event.target == introBtn) {
    index = 0;
  } else {
    index = 1;
  }
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
}
