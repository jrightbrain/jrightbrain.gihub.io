
$(document).ready(function () {
	var $this;
	var $close = $('.close');
	var $content = $('.content')

	$('.button').click(function () {

	$this = $(this);

	$content.stop().animate({
		height : '0px'
	}, 250);

	$content.stop().animate({
		height : '300px'
	}, 250);

	$close.click( function () {
		$content.animate({
		height : '0'
	}, 250);
});
