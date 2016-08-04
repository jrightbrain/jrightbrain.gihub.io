// make a tooltip
var $tooltip = $('<div class="tooltip" />');


// make it appear on hover
$('.steps').mouseenter(showTooltip)
	.mouseleave(hideTooltip);


function showTooltip() {
	var $this = $(this);
	var title = $this.attr('title');
	var offset = $this.offset();

	// display text in title attribute
	$tooltip.text(title).hide();

	// pop up above your hover
	$tooltip.css({
		top : offset.top - 85 ,
		left : offset.left - 70
	});

	// fade in tooltip
	$('body').append($tooltip);
	$tooltip.fadeIn(250);
}

//fade out tooltip
function hideTooltip() {
	$tooltip.fadeOut(250);
}


