let btnPlus = document.querySelectorAll('.btn-calc_plus'),
    btnMinus = document.querySelectorAll('.btn-calc_minus'),
    inputQty = document.querySelectorAll('.calc-qty');

function addQty(qty) {
    qty.value += 1;
    if (qty.value != 0 && qty.value != 1) {
        qty.previousElementSibling.disabled = false;
    } else {
        qty.previousElementSibling.disabled = true;
    }
}
for (let i = 0; i < array.length; i++) {
    btnPlus[i].addEventListener('click', addQty(inputQty[i]))
}

