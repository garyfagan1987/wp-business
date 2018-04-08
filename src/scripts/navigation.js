var $j = jQuery.noConflict();
$j(document).ready(function ($) {

  $(document).bind('click', function (e) {
    if ($(e.target).hasClass('u-navigation-open')) {
      $('body').removeClass('u-navigation-open');
    }
  });

  $('body').hammer().bind("swipeleft", function (e) {
    if ($(e.target).parents('body').hasClass('u-navigation-open')) {
      $('body').removeClass('u-navigation-open');
    }
  });

  $('body').hammer().bind("swiperight", function (e) {
    if (!$(e.target).parents('body').hasClass('u-navigation-open') && $(e.target).parents('.owl-carousel').length < 1) {
      $('body').addClass('u-navigation-open');
    }
  });

  // @todo, add a unit here
  $('.c-navigation a.next').click(function (e) {
    e.preventDefault();
    $('.c-navigation > ul').animate({
      left: '-100%'
    }, 250);
    var subId = $(this).data('id');
    $('.c-navigation__sub--' + subId).addClass('c-navigation__sub--show').removeClass('c-navigation__sub--hide');
  });

  $('.c-navigation a.previous').click(function (e) {
    e.preventDefault();
    $('.c-navigation > ul').animate({
      left: '0'
    }, 250, function () {
      $('.c-navigation__sub').addClass('c-navigation__sub--hide').removeClass('c-navigation__sub--show');
    });
  });

  $('.c-navigation-close').click(function () {
    $('body').removeClass('u-navigation-open');
  });

  $('a.c-navigation-open').click(function () {
    $('body').addClass('u-navigation-open');
  });
});
