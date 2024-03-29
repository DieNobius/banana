$(function(){

  $('.portfolio__video-link').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  $('.slider-blog__inner').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="arrow left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="arrow right"></button>',
  });

  $('.menu__btn').on('click', function(){
    $('.header__top-inner').toggleClass('header__top-inner--active');

  });

  var mixir = mixitup('.portfolio__content');

});