$('h2').hide();

$('h1').mouseenter( function() {

	$('h1').stop().fadeOut().css('height', '0');

	$('h2').stop().fadeIn().css('z-index', '500');
});

$('h1').mouseleave( function() {

	$('h2').stop().fadeOut().css('z-index', '0');;

	$('h1').stop().css('height', '100px');

	
});

