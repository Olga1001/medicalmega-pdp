"use strict";

var btnPlus = document.querySelectorAll('.btn-calc_plus'),
    btnMinus = document.querySelectorAll('.btn-calc_minus'),
    inputQty = document.querySelectorAll('.calc-qty'),
    calc = document.querySelectorAll('.calc'),
    tabs = document.querySelectorAll('.tabs-discription li'),
    contents = document.querySelectorAll('.content-discription .content-item');

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


var _loop = function _loop(i) {
  btnPlus[i].addEventListener('click', function () {
    return changeQty(inputQty[i], 'plus');
  });
  btnMinus[i].addEventListener('click', function () {
    return changeQty(inputQty[i], 'minus');
  });
};

for (var i = 0; i < calc.length; i++) {
  _loop(i);
} //descriptions


var _loop2 = function _loop2(_i) {
  tabs[_i].addEventListener('click', function () {
    tabs[_i].closest('.tabs-discription').querySelector('.active').classList.remove('active');

    contents[_i].closest('.content-discription').querySelector('.active').classList.remove('active');

    tabs[_i].classList.add('active');

    contents[_i].classList.add('active');
  });
};

for (var _i = 0; _i < tabs.length; _i++) {
  _loop2(_i);
}