var seconds = 0;
var freq = 10; //measured in milliseconds
$('#rpm-timer #timer').val("0.000 seconds");

var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'audio.mp3');

$('#rpm-timer #start-stop').click(function() {
	if($(this).html() == "Start") {
		$(this).html("Stop");
	}
	else {
		$(this).html("Start");
	}
	audioElement.play();
});
function rpm_calculator() {
	if($('#rpm-timer #rotations').val() >= 0) {
		var rpm = $('#rpm-timer #rotations').val()*60/seconds;
		if($('#rpm-timer #start-stop').html() == "Start" && seconds != 0) $('#rpm-timer #output').html("Rotations per minute: " + rpm.toFixed(3) + " rpm");
	}
}
$('#rpm-timer #clear').click(function() {
	seconds = 0;
	$('#rpm-timer #timer').val("0.000 seconds");
	$('#rpm-timer #start-stop').html("Start");
	$('#rpm-timer #output').html("");
});
$('#rpm-timer #timer').bind('keyup', function() {
	seconds = parseFloat($('#rpm-timer #timer').val());
	if(seconds > 0) {
		var rpm = $('#rpm-timer #rotations').val()*60/seconds;
		$('#rpm-timer #output').html("Rotations per minute: " + rpm.toFixed(3) + " rpm");
	}
});

function showRemaining() {
	if($('#rpm-timer #start-stop').html() == "Stop") {
		seconds += freq/1000;
		$('#rpm-timer #timer').val(seconds.toFixed(3) + " seconds");
	}
}
setInterval(showRemaining, freq);
setInterval(rpm_calculator, 10);