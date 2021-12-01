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
  $('.service-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: 0,
    arrows: false,
    dots: true,
    focusOnSelect: true,
  })
  $('.news-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: 0,
    arrows: false,
    dots: true,
    focusOnSelect: true
  })
  $('.partners-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: 0,
    arrows: false,
    dots: true,
    focusOnSelect: true
  })
  
  $('.faq-blog__top').click(function(){
    $(this).next().slideToggle(300).parent().toggleClass('faq-active')
  })
  $('.header-menu__burger').click(function(e){
    e.preventDefault();
    $('.menu').slideDown(300)
  })
  $('.menu-top__close').click(function(e){
    e.preventDefault();
    $('.menu').slideUp(300)
  })
});