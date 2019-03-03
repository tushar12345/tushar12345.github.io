jQuery(document).ready(function($) {      
  // Owl Carousel  
  var owl = $('.carousel-default');
  owl.owlCarousel({
    nav: true,
    dots: true,
    items: 1,
    loop: true,
    navText: ["&#xf007","&#xf006"],
    autoplay: true,
    autoplayTimeout: 4000
  });
  var owl = $('.carousel-fade-transition');
  owl.owlCarousel({
    nav: true,
    dots: true,
    items: 1,
    loop: true,
    navText: ["&#xf007","&#xf006"],
    autoplay: true,
    animateOut: 'fadeOut',
    autoplayTimeout: 4000
  });  
  // window.dispatchEvent(new Event('resize'));
});
$(document).ready(function(){
  $("#testimonial-slider").owlCarousel({
      // items:1,
      // itemsDesktop:[1000,1],
      // itemsDesktopSmall:[979,1],
      // itemsTablet:[768,1],
       //pagination:false,
      // navigation:true,
     //  navigationText:["",""],
      // autoPlay:true,
      //nav: true,
    dots: true,
    items: 1,
    loop: true,
    //navText: ["&#xf007","&#xf006"],
    autoplay: true,
   //animateOut: 'fadeOut',
    autoplayTimeout: 4000
        });
});