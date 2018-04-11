(function() {
  "use strict";

  var $j = jQuery.noConflict();

  $j(document).ready(function ($) {

    var $body = $('body'),
        $navigation = $('.js-navigation'),
        $navigationClose = $('.js-navigation-close'),
        $navigationOpen = $('.js-navigation-open'),
        navigationOpenSelector = 'u-navigation-open',
        navigationSub = 'c-navigation__sub',
        transitionSpeed = 250;

    $(document).bind('click', function (e) {
      if ($(e.target).hasClass(navigationOpenSelector)) {
        $body.removeClass(navigationOpenSelector);
      }
    });

    $body.hammer().bind("swipeleft", function (e) {
      if ($(e.target).parents('body').hasClass(navigationOpenSelector)) {
        $body.removeClass(navigationOpenSelector);
      }
    });

    $body.hammer().bind("swiperight", function (e) {
      if (!$(e.target).parents('body').hasClass(navigationOpenSelector) && $(e.target).parents('.owl-carousel').length < 1) {
        $body.addClass(navigationOpenSelector);
      }
    });

    $navigation.find('.next').click(function (e) {
      e.preventDefault();
      $navigation.find('ul').first().animate({
        left: '-100%'
      }, transitionSpeed);
      $('.' + navigationSub + '--' + $(this).data('id')).addClass(navigationSub + '--show').removeClass(navigationSub + '--hide');
    });

    $navigation.find('.previous').click(function (e) {
      e.preventDefault();
      $navigation.find('ul').first().animate({
        left: '0'
      }, transitionSpeed, function () {
        $('.' + navigationSub).addClass(navigationSub + '--hide').removeClass(navigationSub + '--show');
      });
    });

    $navigationClose.click(function () {
      $body.removeClass(navigationOpenSelector);
    });

    $navigationOpen.click(function () {
      $body.addClass(navigationOpenSelector);
    });
  });

}());