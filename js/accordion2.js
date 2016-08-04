$(document).ready(function () {
	var $this;
	var $close = $('.close');
	var $content = $('.content')

	$('.logos').click(function () {

	$this = $(this);

	

	$('.content').stop().animate({
		height : '300px'
	}, 250);

	$close.click( function () {
		$content.animate({
		height : '0'
	}, 250);
});
