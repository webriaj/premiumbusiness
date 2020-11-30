 $('.client').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.indicatorImg'
});
$('.indicatorImg').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.client',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});

