$('.tabs .item').on('click', function(e){
	var $z = $(this),
		z  = this,
		hash = $z.data('link') || window.location.hash,
		$siblings = $z.siblings();
	$z.addClass('active');

	if ($siblings.length > 0) {
		$siblings.removeClass('active');
	}
	var $target = $(hash);
	if ($target.length > 0) {
		var offset = $target.offset();
		console.log(offset.top);
		$('body').animate({
			scrollTop: offset.top
		},600);
	}
});