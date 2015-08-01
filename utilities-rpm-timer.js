var seconds = 0;
var freq = 10; //measured in milliseconds
$('#timer').val("0.000 seconds");

$('#rpm-timer #start-stop').click(function() {
	if($(this).html() == "Start") {
		$(this).html("Stop");
	}
	else {
		$(this).html("Start");
		if($('#rpm-timer #rotations').val() >= 0) {
			var rpm = $('#rpm-timer #rotations').val()*60/seconds;
			$('#rpm-timer #output').html("Rotations per minute: " + rpm.toFixed(3));
		}
	}
});
$('#rpm-timer #clear').click(function() {
	seconds = 0;
	$('#timer').val("0.000 seconds");
});
$('#rpm-timer #timer').bind('keyup', function() {
	seconds = parseFloat($('#rpm-timer #timer').val());
	if(seconds > 0) {
		var rpm = $('#rpm-timer #rotations').val()*60/seconds;
		$('#rpm-timer #output').html("Rotations per minute: " + rpm.toFixed(3));
	}
});

function showRemaining() {
	if($('#rpm-timer #start-stop').html() == "Stop") {
		seconds += freq/1000;
		$('#timer').val(seconds.toFixed(3) + " seconds");
	}
}
var timer = setInterval(showRemaining, freq);