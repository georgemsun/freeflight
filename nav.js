$(document).ready(function() {
	var fadeOut = 1;
	var fadeIn = 900;
	var fadeIn_menu = 200;
	var currentPage = "home";
	var resetNav = function() {
		$('.home, .general, .utilities').fadeTo(fadeOut, 0, function(){ $(this).css('display', 'none'); }).fadeTo(fadeOut, 1);
		$('.nav > li > a:link, .nav > li > la:visited').css('color', 'grey');
	};
	resetNav();
		$('.home').fadeTo(fadeOut, 0, function(){ $(this).css('display', 'block'); }).fadeTo(fadeIn, 1);
		$('.nav-home').css('color', 'black');
	$('title').html("Free Flight");
	$('.nav-home').click(function() {
		if(currentPage != "home") {
			resetNav();
			$('.home').fadeTo(fadeOut, 0, function(){ $(this).css('display', 'block'); }).fadeTo(fadeIn, 1);
			$('.nav-home').css('color', 'black');
			$('title').html("Free Flight");
			currentPage = "home";
		}
	});
	$('.nav-general, .nav-general-articles, .nav-general-materials, .nav-general-photos, .nav-general-elastic-launched-glider, .nav-general-wright-stuff ').click(function() {
		if(currentPage != "general") {
			resetNav();
			$('.general').fadeTo(fadeOut, 0, function(){ $(this).css('display', 'block'); }).fadeTo(fadeIn, 1);
			$('.nav-general').css('color', 'black');
			$('title').html("General Resources | Free Flight");
			currentPage = "general";
		}
	});
	$('.nav-utilities, .nav-utilities-rpm-timer, .nav-utilities-balsa-density, .nav-utilities-dial, .nav-utilities-torque').click(function() {
		if(currentPage != "utilities") {
			resetNav();
			$('.utilities').fadeTo(fadeOut, 0, function(){ $(this).css('display', 'block'); }).fadeTo(fadeIn, 1);
			$('.nav-utilities').css('color', 'black');
			$('title').html("Utilities | Free Flight");
			currentPage = "utilities";
		}
	});

	$('.nav > li').bind('mouseover', function() {
		$(this).find('ul').css('visibility', 'visible');
		// $(this).fadeTo(fadeOut, 0, function(){ $(this).find('ul').css('visibility', 'visible'); }).fadeTo(fadeIn_menu, 1);
	});
	$('.nav > li').bind('mouseout', function() {
		$(this).find('ul').css('visibility', 'hidden');
		// $(this).fadeTo(fadeOut, 0, function(){ $(this).find('ul').css('visibility', 'hidden'); }).fadeTo(fadeIn_menu, 1);
	});				
});