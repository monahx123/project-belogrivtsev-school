$(function(){

$('.multiple-items').slick({
    slidesToShow: 3,
    slidesToScroll: 1,

    prevArrow: '<button class="slider-box__btn slider-box__btnnext"><img src="img/next.svg" alt=""></button>',
    nextArrow: '<button class="slider-box__btn slider-box__btnprev"><img src="img/prev.svg" alt=""></button>'
  });

  $('a').click(function() {
    $(this).next().toggle('slow');
    return false;
  });
  
  $('.tab').on('click', function(e){
    e.preventDefault();
  
    $('.tab').removeClass('tab--active');
    $('.tabs-content').removeClass('tabs-content--active');
  
    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');
  });


});
  
  