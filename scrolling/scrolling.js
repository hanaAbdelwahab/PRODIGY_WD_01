window.addEventListener("scroll", function() {
    var topImg = document.getElementById("top");
    var rightImg = document.getElementById("right");
    var leftImg = document.getElementById("left");
    var scrollPosition = window.scrollY;

    topImg.style.top = -scrollPosition * 1.5 + "px";
    rightImg.style.left = scrollPosition * 0.5 + "px";
    leftImg.style.left = -scrollPosition * 0.5 + "px";
});
jQuery(document).ready(function($){
    $('.slider-img').on('click',function(){
        $('.slider-img').removeClass('active');
        $(this).addClass('active');
    })
});
$(document).ready(function() {
    var achievementsVisible = false;
    var achievementsOffset = $('#achievements').offset().top;

    $(window).scroll(function() {
        var windowTop = $(window).scrollTop();
        if (windowTop > achievementsOffset - 500 && !achievementsVisible) {
            $('.achievement p').css('left', '0');
            $('#achievements').css('left', '0'); 
            achievementsVisible = true;
        } else if (windowTop <= achievementsOffset - 500 && achievementsVisible) {
            $('.achievement p').css('left', '500px'); 
            $('#achievements').css('left', '50%'); 
            achievementsVisible = false;
        }
    });
});
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#myHeader').addClass('fixed-header');
        } else {
            $('#myHeader').removeClass('fixed-header');
        }
    });
});


