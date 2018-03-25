var $j = jQuery.noConflict();
$j( document ).ready(function($) {

    // add the loading icons for lazy load
    $('.gallery').on('load.owl.lazy', function(event) {
        $('.gallery').addClass('loading');
    });

    $('.gallery').on('loaded.owl.lazy', function(event) {
        $('.gallery').removeClass('loading');
    });

    // home page carousel
    $('.carousel-hero').owlCarousel({
        autoplay: true,
        autoplayTimeout: 10000,
        merge:true,
        video:true,
        loop: true,
        slideSpeed : 300,
        paginationSpeed : 400,
        responsive:{
            0:{
                items: 1
            }
        }
    });

    $('.carousel-hero').on('changed.owl.carousel', function(event) {
        $('.carousel-hero').trigger('play.owl.video');
    });

    // home page carousel
    $('.component-1').owlCarousel({
        margin: 20,
        loop: true,
        slideSpeed : 300,
        paginationSpeed : 400,
        responsive:{
            0:{
                items: 1
            },
            480:{
                items: 2
            },
            768:{
                items: 4
            }
        }
    });
});

// needs to be window.load for autoHeight to work
(function($){  //This functions first parameter is named $
   $(window).load(function(){
       $('.gallery').owlCarousel({
           lazyLoad: true,
           navText: ['<i class="fa fa-chevron-circle-left"></i>','<i class="fa fa-chevron-circle-right"></i>'],
           autoHeight: true,
           nav: true,
           dots: false,
           loop: true,
           slideSpeed : 300,
           paginationSpeed : 400,
           responsive:{
               0:{
                   items: 1
               }
           }
       });
   });
})(jQuery);
