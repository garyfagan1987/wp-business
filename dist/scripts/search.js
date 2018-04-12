(function() {
  "use strict";

    var $j = jQuery.noConflict();

    $j(document).ready(function($) {
        $('.js-search-link').click(function(event) {
            event.preventDefault();
            $('.js-form-search').toggleClass('u-hide').find('input').focus();
        });
    });
}());