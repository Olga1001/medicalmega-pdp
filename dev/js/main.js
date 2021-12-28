let btnPlus = document.querySelectorAll('.btn-calc_plus'),
    btnMinus = document.querySelectorAll('.btn-calc_minus'),
    inputQty = document.querySelectorAll('.calc-qty'),
    calc = document.querySelectorAll('.calc'),
    tabs = document.querySelectorAll('.tabs-discription li'),
    contents = document.querySelectorAll('.content-discription .content-item');

function changeQty(qty,action) {
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
}

//+/- btns quantity
for (let i = 0; i < calc.length; i++) {
    btnPlus[i].addEventListener('click', () => changeQty(inputQty[i],'plus'))
    btnMinus[i].addEventListener('click', () => changeQty(inputQty[i],'minus'))
}

//descriptions
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', () => {
        tabs[i].closest('.tabs-discription').querySelector('.active').classList.remove('active');
        contents[i].closest('.content-discription').querySelector('.active').classList.remove('active');
        tabs[i].classList.add('active');
        contents[i].classList.add('active');
    })
}
