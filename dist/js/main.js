"use strict";

var btnPlus = document.querySelectorAll('.btn-calc_plus'),
    //btn +
btnMinus = document.querySelectorAll('.btn-calc_minus'),
    //btn -
inputQty = document.querySelectorAll('.calc-qty'),
    //quantity input
calc = document.querySelectorAll('.calc'),
    // calc wrapper +\-
tabs = document.querySelectorAll('.tabs-discription li'),
    //tabs description
contents = document.querySelectorAll('.content-discription .content-item'),
    // content discription
dataButton = document.querySelectorAll('[data-button]'),
    // btn for open popup or block
closeBtn = document.querySelectorAll('[data-close]'),
    //btn close for hide popup or block
slidesNav = document.querySelectorAll('.slider-nav .slide'),
    //slides navigation
slidesFor = document.querySelectorAll('.slider-for'); //slider main

function changeQty(qty, action) {
  if (action == 'plus') {
    qty.value = parseInt(qty.value) + 1;
  } else if (action == 'minus') {
    qty.value = parseInt(qty.value) - 1;
  }

  if (qty.value > 1) {
    qty.previousElementSibling.disabled = false;
  } else {
    qty.previousElementSibling.disabled = true;
    qty.value = 1;
  }
} //+/- btns quantity


calc.forEach(function (el, i) {
  btnPlus[i].addEventListener('click', function () {
    return changeQty(inputQty[i], 'plus');
  });
  btnMinus[i].addEventListener('click', function () {
    return changeQty(inputQty[i], 'minus');
  });
}); //descriptions

var _loop = function _loop(i) {
  tabs[i].addEventListener('click', function () {
    tabs[i].closest('.tabs-discription').querySelector('.active').classList.remove('active');
    contents[i].closest('.content-discription').querySelector('.active').classList.remove('active');
    tabs[i].classList.add('active');
    contents[i].classList.add('active');
  });
};

for (var i = 0; i < tabs.length; i++) {
  _loop(i);
}

function toggleActive(getData, action) {
  if (document.querySelector("[data-item=".concat(getData, "]"))) {
    if (action == true) {
      document.querySelector("[data-item=".concat(getData, "]")).classList.add('active');
    } else {
      document.querySelector("[data-item=".concat(getData, "]")).classList.remove('active');
    }
  }
}

var _loop2 = function _loop2(_i) {
  dataButton[_i].addEventListener('click', function () {
    return toggleActive(dataButton[_i].getAttribute('data-button'), true);
  });

  closeBtn[_i].addEventListener('click', function () {
    return toggleActive(closeBtn[_i].getAttribute('data-close'), false);
  });
};

for (var _i = 0; _i < dataButton.length; _i++) {
  _loop2(_i);
}

document.querySelectorAll('.popup').forEach(function (popup) {
  popup.addEventListener('click', function (e) {
    if (e.target.classList.contains('popup')) {
      popup.classList.remove('active');
    }
  });
});
slidesFor.forEach(function (el) {
  el.addEventListener('mousemove', function (e) {
    document.querySelector('.img-zoom-result').style.visibility = 'visible';
    document.querySelector('.img-zoom-lens').style.visibility = 'visible';
  });
  el.addEventListener('mouseout', function (e) {
    document.querySelector('.img-zoom-result').style.visibility = 'hidden';
    document.querySelector('.img-zoom-lens').style.visibility = 'hidden';
  });
}); //slider

slidesNav.forEach(function (el, i) {
  el.addEventListener('click', function () {
    el.closest('.slider-nav').querySelector('.active').classList.remove('active');
    el.classList.add('active');
    var src = el.querySelector('img').getAttribute('src');
    document.querySelector('.slider-for_img').setAttribute('src', src);
    document.querySelector('.img-zoom-result').style.backgroundImage = "url(\"".concat(src, "\")");
  });
});
document.querySelectorAll('.select_item').forEach(function (el) {
  el.addEventListener('click', function () {
    el.closest('.select_filter').classList.toggle('active');
  });
});