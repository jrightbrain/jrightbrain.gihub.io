$('#nav').on('click', 'a', function( event ){
	event.preventDefault();
	var $this = $(this);
	var tabId = $this.attr('href');

	$this.addClass('active').siblings('.active').removeClass('active');

	$(tabId).fadeIn().siblings('.tab:visible').hide();
});