$(function(){
    $('.team_slide').owlCarousel({
    loop:true,
    margin:30,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 500,
    dots:false,
    nav:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        992:{
            items:3,

        },
        1200:{
            items:4,

        }
    }
});
     $('.test_slide').owlCarousel({
    loop:true,
    margin:30,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 500,
    dots:false,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,

        },
        1200:{
            items:1,

        }
    }
});
    
$('.counter').counterUp({
                delay: 10,
                time: 1000
            });
    
});