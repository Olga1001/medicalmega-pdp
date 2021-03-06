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
slidesFor = document.querySelectorAll('.slider-for .slide'),
    //slider main
price = document.querySelectorAll('.pr'),
    //price
alphabet = document.querySelectorAll('.alphabet li'),
    //alphabets
listCategories = document.querySelectorAll('.list_categories ul'); //list categories

function changeQty(qty, pr, action) {
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

  pr.innerHTML = (+pr.dataset.price * +qty.value).toFixed(2);

  if (qty.closest('.product_sidebar')) {
    if (qty.value > 1) {
      document.querySelector('.product_sidebar .add-cart span').hidden = false;
    } else {
      document.querySelector('.product_sidebar .add-cart span').hidden = true;
    }
  }
} //+/- btns quantity


calc.forEach(function (el, i) {
  btnPlus[i].addEventListener('click', function () {
    return changeQty(inputQty[i], price[i], 'plus');
  });
  btnMinus[i].addEventListener('click', function () {
    return changeQty(inputQty[i], price[i], 'minus');
  });
  inputQty[i].addEventListener('input', function () {
    return changeQty(inputQty[i], price[i]);
  });
}); //change Class active

function toggleClass(item, content) {
  var _loop = function _loop(i) {
    item[i].addEventListener('click', function () {
      item[i].parentElement.querySelector('.active').classList.remove('active');
      content[i].parentElement.querySelector('.active').classList.remove('active');
      item[i].classList.add('active');
      content[i].classList.add('active');
    });
  };

  for (var i = 0; i < item.length; i++) {
    _loop(i);
  }
}

toggleClass(tabs, contents); //descriptions

toggleClass(alphabet, listCategories); //all categories 

function toggleActive(getData, action) {
  if (document.querySelector("[data-item=".concat(getData, "]"))) {
    if (action == true) {
      document.querySelector("[data-item=".concat(getData, "]")).classList.add('active');
    } else {
      document.querySelector("[data-item=".concat(getData, "]")).classList.remove('active');
    }
  }
}

var _loop2 = function _loop2(i) {
  dataButton[i].addEventListener('click', function () {
    return toggleActive(dataButton[i].getAttribute('data-button'), true);
  });
  closeBtn[i].addEventListener('click', function () {
    return toggleActive(closeBtn[i].getAttribute('data-close'), false);
  });
};

for (var i = 0; i < dataButton.length; i++) {
  _loop2(i);
}

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
}); //select

function remActiveSelect() {
  var dropdowns = document.querySelectorAll(".select");

  for (var _i = 0; _i < dropdowns.length; _i++) {
    if (dropdowns[_i].classList.contains('active')) {
      dropdowns[_i].classList.remove('active');
    }
  }
}

document.querySelectorAll('.select_current').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.stopImmediatePropagation();
    remActiveSelect();
    el.parentElement.classList.toggle('active');
  });
  el.nextElementSibling.querySelectorAll('.select_option').forEach(function (option, index) {
    option.addEventListener('click', function (e) {
      e.stopImmediatePropagation();
      option.closest('.select').querySelector('.active').classList.remove('active');
      option.classList.add('active');

      if (index == 0) {
        el.innerHTML = "<span>".concat(option.innerHTML, "</span>");
      } else {
        el.innerHTML = option.innerHTML;
      }
    });
  });
});
document.body.addEventListener('click', function (e) {
  if (!e.target.matches('.select_current')) remActiveSelect();
});
window.addEventListener('scroll', function () {
  return remActiveSelect();
}); //range

if (document.querySelector('#order-pr')) {
  var subtotal = +document.querySelector('#order-pr').innerText;
  document.querySelector('.range_slider span').style.width = subtotal * 100 / 150 + '%';
} //select filter


document.querySelectorAll('.select_filter').forEach(function (el) {
  el.querySelector('.select_item').addEventListener('click', function () {
    return el.classList.toggle('active');
  });
}); // radio buttons

document.querySelectorAll('.available-options .checkbox').forEach(function (checkbox, index) {
  checkbox.addEventListener('click', function (e) {
    if (checkbox.checked) {
      var optionAvailable = checkbox.nextElementSibling.querySelectorAll('span')[0],
          optionPrice = checkbox.nextElementSibling.querySelector('.radio-check_price').innerHTML.replace('$', ''),
          caseCount = 1;

      if (optionAvailable.innerText.includes('Each')) {
        caseCount = 1;
      } else {
        caseCount = optionAvailable.innerText.replace(/\D/g, '');
      }

      document.querySelector('.product_sidebar .calc-qty').dataset["case"] = caseCount;
      document.querySelector('.product_sidebar .add-cart .pr').dataset.price = optionPrice;
      document.querySelector('.product_sidebar .add-cart .pr').innerHTML = (+optionPrice * +document.querySelector('.product_sidebar .calc-qty').value).toFixed(2);
    }
  });
});