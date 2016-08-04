function displayContent( $slider, $navOriginal ) {

		$('.nav-original').removeClass('active');
		$navOriginal.addClass('active');

		//$slider;
		$slider.css({
			position : 'absolute',
			zIndex : 99999999
		});

		$slider.slideDown(250, function() {
			$slider.css({
				position: 'static',
				zIndex : 0
			});

			$slider.siblings( ':visible' )
				.hide();
		});

		var navHeight = $('#nav').outerHeight();

		var $this = $(this);
		var id = $this.attr('id');
		var $content = $('#work');
		var top = $content.offset().top - navHeight;

		$('html, body').animate({
			scrollTop: top
		}, 750)

}

/*  -- SLIDER ACTIONS --*/

$(document).ready(function() {

	$('#logos').click( function () {
		displayContent( $('#logoSlider'), $('#logos') );
	});


	$('#prints').click( function () {
		displayContent( $('#printSlider'), $('#prints') );
	});


	$('#sites').click( function () {
		displayContent( $('#siteSlider'), $('#sites') );
	});

});

/*  -- RESUME ACTIONS --*/

//$('#resume').hide();
$( '#resume' ).animate({ height : 'toggle' }, 0 );

$('.resume-btn').click( function() {

	$( '#resume' ).animate({ height : 'toggle' }, 500 );
	$('.resume-btn').css('background-color', '#ee7a52');

	var resHeight = $('#resume').outerHeight();

	var $this = $(this);
	var id = $this.attr('id');
	var $content = $('#aboutMe');
	var top = $content.offset().top - resHeight;

	$('html, body').animate({
		scrollTop: top
	}, 750)
});