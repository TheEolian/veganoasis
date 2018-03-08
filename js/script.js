$(document).ready(function () {
	$(document).on("scroll", onScroll);

	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();
		$(document).off("scroll");

		$('.nav a').on('click', function() {
			$('.navbar-collapse').collapse('hide');
		});

		var target = this.hash;
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 500, 'swing', function () {
			window.location.hash = target;
			$(document).on("scroll", onScroll);
		});
	});
	function onScroll(event){
		$(document).scrollTop();
	};

});
