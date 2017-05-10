
//hamburger nav functionality from CodePen
$(document).ready(function () {
			  $(".navbar-toggle").on("click", function () {
				    $(this).toggleClass("active");
			  });
});


$('.btn-group').sticky();

//if dipslay = hidden for panels then toggle class by clicking the chevron

$('.glyphicon-menu-down').on('click', function () {
	console.log("Hello World");
	$(this).toggleClass('glyphicon-menu-up');
	let panelBody = $('.panel-body');
	if (panelBody.style[display="none"]) {
		panelBody.css('display', 'inline');
	}
});