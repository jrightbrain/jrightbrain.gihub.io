var navHeight = $('#headerWrap').outerHeight();
	
$("#nav").on( 'click', 'li', function(e) {
	e.preventDefault();

	var $this = $(this);
	var href = $this.attr('href');
	var $content = $(href);
	var top = $content.offset().top - navHeight;
	
	$('html, body').animate({
		scrollTop: top
	}, 750)
});