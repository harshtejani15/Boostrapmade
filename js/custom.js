$(document).ready(function () {



$('.toggle').click(function() {
	$("body").toggleClass('menu_open');
})



$('.has-dropdown').click(function() {
	$('.dd-box-shadow').toggleClass('dropdown-active');

})


$('#dd-box-shadow ').click(function() {
	$('.drowpdown-menu-ul').toggleClass('dropdown-active');

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