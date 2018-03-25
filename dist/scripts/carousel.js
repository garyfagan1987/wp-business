$(document).ready(function() {

    // home page carousel
    $('.carousel-hero').owlCarousel({
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
        owl.trigger('play.owl.video');
    })

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
$(window).load(function() {
    // gallery carousel
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
