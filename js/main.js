$('.multiple-items').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<button class="slider-box__btn slider-box__btnnext"><img src="img/next.svg" alt=""></button>',
  nextArrow: '<button class="slider-box__btn slider-box__btnprev"><img src="img/prev.svg" alt=""></button>',
});

$('.tab').on('click', function (e) {
  e.preventDefault();

  $($(this).siblings()).removeClass('tab--active');
  $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');
  $(this).addClass('tab--active');
  $($(this).attr('href')).addClass('tabs-content--active');
});
