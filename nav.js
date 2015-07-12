$(document).ready(function() {
	var resetNav = function() {
		$('.home, .indoor-duration, .olympiad, .utilities').css('display', 'none');
		$('.nav > li > a:link, .nav > li > la:visited').css('color', 'grey');
	};
	resetNav();
	$('.home').css('display', 'block');
	$('.nav-home').css('color', 'black');
	$('title').html("Free Flight");
	$('.nav-home').click(function() {
		resetNav();
		$('.home').css('display', 'block');
		$('.nav-home').css('color', 'black');
		$('title').html("Free Flight");
	});
	$('.nav-indoor-duration, .nav-indoor-articles, .nav-indoor-photos').click(function() {
		resetNav();
		$('.indoor-duration').css('display', 'block');
		$('.nav-indoor-duration').css('color', 'black');
		$('title').html("Indoor Duration | Free Flight");
	});
	$('.nav-olympiad, .nav-olympiad-wright-stuff, .nav-olympiad-elastic-launched-glider').click(function() {
		resetNav();
		$('.olympiad').css('display', 'block');
		$('.nav-olympiad').css('color', 'black');
		$('title').html("Science Olympiad | Free Flight");
	});
	$('.nav-utilities, .nav-utilities-torque, .nav-utilities-balsa-density, .nav-utilities-dial').click(function() {
		resetNav();
		$('.utilities').css('display', 'block');
		$('.nav-utilities').css('color', 'black');
		$('title').html("Utilities | Free Flight");
	});

	$('.nav > li').bind('mouseover', function() {
		$(this).find('ul').css('visibility', 'visible');
	});
	$('.nav > li').bind('mouseout', function() {
		$(this).find('ul').css('visibility', 'hidden');
	});				
});