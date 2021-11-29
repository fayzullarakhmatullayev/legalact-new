$(document).ready(function () {
  $('.header-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: '<img class="next-arrow" src="./img/icons/next-arrow.svg" alt="next-arrow">',
    prevArrow: '<img class="prev-arrow" src="./img/icons/prev-arrow.svg" alt="prev-arrow">',
  })
});