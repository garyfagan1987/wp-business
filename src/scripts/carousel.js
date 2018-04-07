var $j = jQuery.noConflict();

function mobileCarousel(width, $element, options) {
  var $iconGridCarousel = $element,
    carouselOptions = options;

  if ($j(window).width() < width) {
    $iconGridCarousel.addClass('owl-carousel owl-theme');
    $iconGridCarousel.owlCarousel(carouselOptions);
  } else {
    $iconGridCarousel.removeClass('owl-carousel owl-theme');
    $iconGridCarousel.addClass('off');
  }

  $j(window).resize(function () {
    if ($j(window).width() < width) {
      if ($iconGridCarousel.hasClass('off')) {
        $iconGridCarousel.addClass('owl-carousel owl-theme').removeClass('off');
        $iconGridCarousel.owlCarousel(carouselOptions);
      }
    } else {
      if (!$iconGridCarousel.hasClass('off')) {
        $iconGridCarousel.removeClass('owl-carousel owl-theme');
        $iconGridCarousel.addClass('off').trigger('destroy.owl.carousel');
        $iconGridCarousel.find('.owl-stage-outer').children(':eq(0)').unwrap();
      }
    }
  });
}

$j(document).ready(function ($) {

  // add the loading icons for lazy load
  var $gallery = $('.js-gallery'),
    $carouselHero = $('.js-carousel-hero'),
    $itemCarousel = $('.js-item-carousel'),
    itemOptions = {
      margin: 20,
      loop: true,
      slideSpeed: 300,
      paginationSpeed: 400,
      responsive: {0: {items: 1}, 600: {items: 2}, 768: {items: 3}}
    };

  // mobile icon grid carousel
  mobileCarousel(600, $j('.js-icon-grid__carousel'), {
    margin: 20,
    slideSpeed: 300,
    paginationSpeed: 400,
    responsive: {0: {items: 1}, 480: {items: 2}}
  });

  // mobile item columns carousel
  mobileCarousel(768, $j('.js-item-columns__carousel'), itemOptions);

  $gallery.on('load.owl.lazy', function () {
    $gallery.addClass('loading');
  });

  $gallery.on('loaded.owl.lazy', function () {
    $gallery.removeClass('loading');
  });

  // home page carousel
  $carouselHero.owlCarousel({
    loop: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    responsive: {0: {items: 1}}
  });

  $carouselHero.on('changed.owl.carousel', function () {
    $carouselHero.trigger('play.owl.video');
  });

  // home page carousel
  $itemCarousel.owlCarousel(itemOptions);
});

// needs to be window.load for autoHeight to work
(function ($) {  //This functions first parameter is named $
  $(window).load(function () {
    $('.gallery').owlCarousel({
      lazyLoad: true,
      navText: ['<i class="fa fa-chevron-circle-left"></i>', '<i class="fa fa-chevron-circle-right"></i>'],
      autoHeight: true,
      nav: true,
      dots: false,
      loop: true,
      slideSpeed: 300,
      paginationSpeed: 400,
      responsive: {0: {items: 1}}
    });
  });
})(jQuery);
