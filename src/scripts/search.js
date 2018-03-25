var $j = jQuery.noConflict();
$j( document ).ready(function($) {
    $('#search').click(function(event){
        event.preventDefault();
        $('.c-form-search').toggleClass('u-hide').find('input').focus();
    });
});
