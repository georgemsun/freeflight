var which = 0;

function setBackground() {
	if(which == 0) {
		$('.jumbotron').fadeTo(300, 0.15, function(){ $(this).css('background', 'url("background.jpg")'); }).fadeTo(300, 0.2);
		which = 1;
	}
	else {
		$('.jumbotron').fadeTo(300, 0.15, function(){ $(this).css('background', 'url("https://c1.staticflickr.com/9/8297/7801882114_e2c0283b53_b.jpg")'); }).fadeTo(300, 0.2);
		which = 0;
	}
}
// var timer = setInterval(setBackground, 10000);