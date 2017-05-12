
//hamburger nav functionality from CodePen
$(document).ready(function () {
	 $(".navbar-toggle").on("click", function () {
		$(this).toggleClass("active");
	 });
});


const portLink = $('.port-link');
$.each(portLink, function() {
	$(this).hover(
  	function() {
    	$(this).next().css('display', 'block'); 
    },
	function() {
    	$(this).next().css('display', 'none'); 
    });
})


//rotates chevron and hide/shows details
$('.panel-title').on('click', function (e) {
	$(this).children(":first").toggleClass('glyphicon-menu-up');
	$(this).next().toggleClass('panel-body-show');
});

//sticky.js plugin responsive sizing
$('.btn-group').sticky({
  topSpacing: 0,
  //  to scale
  getWidthFrom: '.container',
  responsiveWidth: true
});



const logoContent = $('.logo').html();
const logoContentInitials = "<h1>EH</h1>";

$(document).ready(function(){
	let windowSize = $(window).width();
	if (windowSize >= 768){	
		console.log('hello world');
		$('.unstuck-logo').sticky({
		  topSpacing: 0,
		  //  to scale
		  getWidthFrom: '.container',
		  responsiveWidth: true
		});

		$('.panel').css('position', 'relative');
		$('.panel').css('z-index', '-1');
		$('.logo-link').css('z-index', '5000'); //not working?

		$('.unstuck-logo').on('sticky-start', function () {
			$(this).html(logoContentInitials).addClass('logo-sticker');
			$(this).css("z-index", "350");
		});

		$('.unstuck-logo').on('sticky-end', function () {
			$(this).append(logoContent).addClass('unstuck-logo');
			$(this).removeClass('logo-sticker');
			$(this).filter('div:contains("EH"):first-child').remove();
		});
	}	
});





