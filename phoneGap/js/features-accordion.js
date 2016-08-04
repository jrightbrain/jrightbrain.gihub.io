$(document).ready(function () {

	var $this;
	var $featureDef = $('.featureDef')

	$featureDef.hide();

	$('.feature').click(function () {

		$this = $(this);

		//$this.css( 'color', '#00a0c5');

		$this.siblings('.featureDef').stop().hide();

		$this.next().stop().fadeIn( 250 );		

		

	});

});
