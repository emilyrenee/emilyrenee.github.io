
//hamburger nav functionality from CodePen
$(document).ready(function () {
	 $(".navbar-toggle").on("click", function () {
		$(this).toggleClass("active");
	 });
});

// click connect btn to scroll to footer
$('.btn-connect').click(function() {
	$('body').scrollTo("#footer", 400);
});

//rotates chevron and hide/shows details
$('.panel-title').on('click', function (e) {
	$(this).children(":first").toggleClass('glyphicon-menu-up');
	$(this).next().toggleClass('panel-body-show');
});
