'use strict'

$(function() {   
    $('a img').hover(function() {
        $(this).attr('src',
        $(this).attr('src').replace('_off', '_on'));
    }, function(){
        if (!$(this).hasClass('currentPage')) {
            $(this).attr('src', $(this).attr('src').replace('_on', '_off'))
        }
    });

    $("a[href^='http://']").attr("target", "_blank");
    
    $('.toTop').click(function() {
        $('body, html').animate({
            scrollTop: 0
        }, 1500);
        return false;
    });
});