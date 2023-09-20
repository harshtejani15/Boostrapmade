$(document).ready(function () {



$('.toggle').click(function() {
	$("body").toggleClass('menu_open');
})






// fixed header
    $(window).scroll(function() {
        var header = $('.header');
        var scroll = $(window).scrollTop();
        var homeScroll = 100;
        if (scroll > homeScroll) {
            header.addClass('fixed');
            jQuery('#return-to-top').fadeIn(300);
        } else {
            header.removeClass('fixed');
            jQuery('#return-to-top').fadeOut(300);
        }
    });

});


$(window).load(function(){
	$('.cssloader-parent').fadeOut(1000,function(){
		$(this).remove();
	});
});