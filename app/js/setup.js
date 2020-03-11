'use strict';

var cat = document.querySelector('.category__all');
cat.addEventListener('click', function () {
    var wrap = document.querySelector('.category__wrap');
    wrap.classList.toggle('category__wrap_open');
});
