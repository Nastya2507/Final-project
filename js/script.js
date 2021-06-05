$(document).ready(function(){
 $('.slider').slick({
     arrows:true,
     dots: false,
     adaptiveHeight:false,
     slidesToShow:1,
     slidesToScroll:1,
     speed:500,
     easing:'ease',
     autoplay:false,
     prevArrow: $('.slick-btn-prev'),
     nextArrow: $('.slick-btn-next'),
     autoplaySpeed:1000,
     pauseOnFocus:true,
     pauseOnHover:true,
 });   
});
$('.slider').on('beforeChange', function(event, slick, curentSlide, nextSlide){
    console.log(curentSlide);
});
$('.slider').on('afterChange', function(event, slick, curentSlide, nextSlide){
    console.log(curentSlide);
});
$('.slider').slik('setPosition');