$('.owl-carousel').owlCarousel({
    
    autoplay: true,
    rewind:true,
    autoplayTimeout: 2000,

    margin:10,
    dots:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:3,
            
        },
        1000:{
            items:3,
            
            loop:false
        }
    }
    
})