$(document).ready(function() {
	var fadeOut = 1;
	var fadeIn = 900;
	var resetNav = function() {
		$('.home, .indoor-duration, .olympiad, .utilities').fadeTo(fadeOut, 0, function(){ $(this).css('display', 'none'); }).fadeTo(fadeOut, 1);
		$('.nav > li > a:link, .nav > li > la:visited').css('color', 'grey');
	};
	resetNav();
		$('.home').fadeTo(fadeOut, 0, function(){ $(this).css('display', 'block'); }).fadeTo(fadeIn, 1);
		$('.nav-home').css('color', 'black');
	$('title').html("Free Flight");
	$('.nav-home').click(function() {
		resetNav();
		$('.home').fadeTo(fadeOut, 0, function(){ $(this).css('display', 'block'); }).fadeTo(fadeIn, 1);
		$('.nav-home').css('color', 'black');
		$('title').html("Free Flight");
	});
	$('.nav-indoor-duration, .nav-indoor-articles, .nav-indoor-photos').click(function() {
		resetNav();
		$('.indoor-duration').fadeTo(fadeOut, 0, function(){ $(this).css('display', 'block'); }).fadeTo(fadeIn, 1);
		$('.nav-indoor-duration').css('color', 'black');
		$('title').html("Indoor Duration | Free Flight");
	});
	$('.nav-olympiad, .nav-olympiad-wright-stuff, .nav-olympiad-elastic-launched-glider').click(function() {
		resetNav();
		$('.olympiad').fadeTo(fadeOut, 0, function(){ $(this).css('display', 'block'); }).fadeTo(fadeIn, 1);
		$('.nav-olympiad').css('color', 'black');
		$('title').html("Science Olympiad | Free Flight");
	});
	$('.nav-utilities, .nav-utilities-torque, .nav-utilities-balsa-density, .nav-utilities-dial').click(function() {
		resetNav();
		$('.utilities').fadeTo(fadeOut, 0, function(){ $(this).css('display', 'block'); }).fadeTo(fadeIn, 1);
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