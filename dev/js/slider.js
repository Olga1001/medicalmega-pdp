
let sliderCategories = tns({
    container: document.querySelector('.product_sidebar .available-options .justify-content-between'),
    items: 2,
    axis: 'horizontal',
    controls: true,
    loop: false,
    prevButton: document.querySelector('.arrow_button_prev'),
    nextButton: document.querySelector('.arrow_button_next'),
    autoplayButton: false,
    autoplayButtonOutput: false,
    mouseDrag: true,
    nav: false,
    // autoWidth: true,
    preventScrollOnTouch: 'auto',
    swipeAngle: false,
});
