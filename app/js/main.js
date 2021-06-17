$(function () {
    $('.header__btn').on('click', function (){
        $(".rightside-menu").removeClass('rightside-menu--close');
    });

$('.rightside-menu__close').on('click', function (){
    $(".rightside-menu").addClass('rightside-menu--close');
    });

    $('.top__slider').slick({
        dots: true,
        fade: true,
        autoplay: true,
        Speed: 2000,
        arrows: false
    });
    $('.partners__slider').slick({
        dots: false,
        autoplay: true,
        Speed: 2000,
        arrows: false,
        slidesToShow: 5
       

    });
    $('.contact-slider').slick({
        arrows: false,
        slidesToShow: 10,
        dots: true,
        slidesToScroll: 10
    });
    $('.article-slider__box').slick({
   prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/prev.svg" alt="left"></button>',
   nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="images/next.svg" alt="right"></button>',
    });
    
   
})
var mixer = mixitup('.gallery__inner', {
    load: {
        filter: '.living'
    }
});