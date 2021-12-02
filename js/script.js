$(document).ready(function () {
  new WOW().init();
  
  $('.header-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    swipeToSlide: true,
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
    swipeToSlide: true,
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
    swipeToSlide: true,
    focusOnSelect: true
  })
  
  $('.partners-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
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
    $(".light-overlay").fadeIn(300)
  })
  
  $('.menu-top__close, .light-overlay').click(function(e){
    e.preventDefault();
    $('.menu').slideUp(300)
    $(".light-overlay").fadeOut(300)
  })
  
  $('.menu-nav__link').click(function(e){
    e.preventDefault();
    let href = $(this).attr('href')
    
    $('.menu-nav__link').removeClass('menu-active')
    $(this).addClass('menu-active')
    
    $('.menu-active__links').removeClass('menu-active__links animate__slideInUp')
    $(href).addClass('menu-active__links animate__slideInUp')
  })
  
  $(window).bind('scroll', () =>{
    const scrolled = $(this).scrollTop();
    if(scrolled > $('.header-menu-top').outerHeight()){
      $('.header-content').css('margin-top', '350px')
      $('.header-menu-top').addClass('header-menu-scroll animate__animated animate__fadeInDown')
    } else {
      $('.header-content').css('margin-top', '240px')
      $('.header-menu-top').removeClass('header-menu-scroll animate__animated animate__fadeInDown')
    }
  })
  
  $('.info-about__link, .blog-content__play').click(e => {
    e.preventDefault();
    let youtubeLink = '<iframe src="https://www.youtube.com/embed/I3VCr793OiY?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    
    $('.modal-video, .overlay').fadeIn(300)
    $('.modal-content').html(youtubeLink)
  })
  
  $('.modal-close, .overlay').click(() => {
    $('.modal-video, .overlay').fadeOut(300)
    $('.modal-content').html('')
  })
  
  $('.one').click(function(e){
    e.preventDefault();
    $('#one .blog-content__info').removeClass('wow').addClass('animate__animated animate__fadeInUp')
  })
  
  $('.blog-top__link').click(function(e){
    e.preventDefault();
    let href = $(this).attr('href')
    $('.blog-top__link').removeClass('blog-active')
    $(this).addClass('blog-active')
    
    $('.blog-content__wrapper').removeClass('blog-content-active').find('.blog-content__info').removeClass('animate__fadeInUp')
    $(href).addClass('blog-content-active').find('.blog-content__info').addClass('animate__fadeInUp')
  })
  
  $('.stuff-top__link').click(function(e){
    e.preventDefault()
    let href = $(this).attr('href')
    $('.stuff-top__link').removeClass('stuff-active')
    $(this).addClass('stuff-active')
    $('.stuff-inner').removeClass('stuff-inner-active')
    $(href).addClass('stuff-inner-active')
  })
  
  $(".counter").counterUp({
    time: 2000,
  });
});



