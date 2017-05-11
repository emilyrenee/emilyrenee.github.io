
//hamburger nav functionality from CodePen
$(document).ready(function () {
	 $(".navbar-toggle").on("click", function () {
		$(this).toggleClass("active");
	 });
});


$('.btn-group').sticky({
  topSpacing: 0,
  //  to scale
  getWidthFrom: '.container',
  responsiveWidth: true
});

//rotates chevron and hide/shows details
$('.panel-title').on('click', function (e) {
	$(this).children(":first").toggleClass('glyphicon-menu-up');
	$(this).next().toggleClass('panel-body-show');
});
