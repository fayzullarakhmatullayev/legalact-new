$(document).ready(function () {
  new WOW().init();
  
  const headerSlider = $('.header-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
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
    responsive: [
      {
        breakpoint: 1412,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1142,
        settings: {
          slidesToShow: 3,
        }
      },
    ]
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
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1172,
        settings: {
          slidesToShow: 3,
        }
      },
    ]
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
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  })
  $('.partners-slider-mobile').slick({
    arrows: false,
    dots: true,
  })
  $('.career-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
  })
  $('.stuff-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
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
  
  $(window).bind('scroll', () =>{
    const scrolled = $(this).scrollTop();
    if(scrolled > $('.header-menu-top').outerHeight() - 30){
      $('.header-menu-top').addClass('header-menu-scroll animate__animated animate__fadeInDown')
    } else {
      $('.header-menu-top').removeClass('header-menu-scroll animate__animated animate__fadeInDown')
    }
  })

  $('.info-about__link, .blog-content__play').click(e => {
    e.preventDefault();
    let youtubeLink = '<iframe src="https://www.youtube.com/embed/I3VCr793OiY?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    
    $('.modal-video, .overlay').fadeIn(300)
    $('.modal-video .modal-content').html(youtubeLink)
  })
  
  $('.modal-close, .overlay').click(() => {
    $('.modal-video, .overlay, .modal-career').fadeOut(300)
    $('.modal-video .modal-content').html('')
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
    time: 1500,
  });
  
  $('.career-slider__link').click(function(e){
    e.preventDefault();
    $('.modal-career').fadeIn(300).css('display', 'flex');
    $('.overlay').fadeIn(300)
  })
  
  $('.service-tab__top').click(function(e){
    e.preventDefault()
    $(this).parent().toggleClass('service-tab__active').children('.service-tab__body').slideToggle(300)
  })
  
  headerSlider.on(('beforeChange'), function(_, _, currentSlide, _){
    if(currentSlide % 2 === 1){
      $(".header-side__overlay").css('background-color', 'rgba(227,0,15,.8)')
      $('.header-la').removeClass('la-second')
      $('.header-side').removeClass('side-second')
    } else {
      $(".header-side__overlay").css('background-color', 'rgba(0,0,0,0)')
      $('.header-la').addClass('la-second')
      $('.header-side').addClass('side-second')
    }
  })  
});



