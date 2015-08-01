$('#dial-generator canvas').css('display', 'none');
$('#dial-generator #show-hide').click(function() {
	if($('#dial-generator #show-hide').html() == "Show dial") {
		$('#dial-generator canvas').css('display', 'block');
		$('#dial-generator #show-hide').html("Hide dial");
	}
	else {
		$('#dial-generator canvas').css('display', 'none');
		$('#dial-generator #show-hide').html("Show dial");
	}
});

var circle_radius = 288;
var hole_diameter = 24;
var tick_length_major = 50;
var tick_length_minor = 30;
var tick_length_subminor = 30;
var text_position = 80;
var major = 1;
var minor = 1;
var minor_sub = 1;
var major_increments = 0.1;
var circle_radius_major = circle_radius - tick_length_major;
var circle_radius_minor = circle_radius - tick_length_minor;
var circle_radius_subminor = circle_radius - tick_length_subminor;
var circle_radius_text = circle_radius - text_position;

var drawDial = function() {
	var canvas = document.getElementById('dial-generator-canvas');
	canvas.width = document.body.clientWidth * 0.75;
	canvas.height = document.body.clientWidth * 0.75;
	var context = canvas.getContext("2d");

	var circle_x = canvas.width/2;
	var circle_y = canvas.height/2;

	//SUBMINOR
	context.beginPath();
	for(var i = -0.5*Math.PI; i < 1.5*Math.PI; i+=(2*Math.PI/major/minor/minor_sub)) {
		context.moveTo(circle_radius_subminor*Math.cos(i) + circle_x, circle_radius_subminor*Math.sin(i) + circle_y);
		context.lineTo(circle_radius*Math.cos(i) + circle_x, circle_radius*Math.sin(i) + circle_y);	
	}
	context.strokeStyle = 'grey';
	context.stroke(); context.closePath();

	//MINOR
	context.beginPath();
	for(var i = -0.5*Math.PI; i < 1.5*Math.PI; i+=(2*Math.PI/major/minor)) {
		context.moveTo(circle_radius_minor*Math.cos(i) + circle_x, circle_radius_minor*Math.sin(i) + circle_y);
		context.lineTo(circle_radius*Math.cos(i) + circle_x, circle_radius*Math.sin(i) + circle_y);	
	}
	context.strokeStyle = 'red';
	context.stroke(); context.closePath();

	//MAJOR
	context.beginPath();
	for(var i = -0.5*Math.PI; i < 1.5*Math.PI; i+=(2*Math.PI/major)) {
		context.moveTo(circle_radius_major*Math.cos(i) + circle_x, circle_radius_major*Math.sin(i) + circle_y);
		context.lineTo(circle_radius*Math.cos(i) + circle_x, circle_radius*Math.sin(i) + circle_y);	
	}
	context.strokeStyle = 'black';
	context.lineWidth = 2;
	context.stroke(); context.closePath();

	//CIRCLE
	context.beginPath();
	context.arc(circle_x,circle_y,circle_radius,0,2*Math.PI);
	context.strokeStyle = 'black';
	context.lineWidth = 1;
	context.stroke(); context.closePath();

	//CIRCLE
	context.beginPath();
	context.arc(circle_x,circle_y,hole_diameter,0,2*Math.PI);
	context.strokeStyle = 'black';
	context.lineWidth = 1;
	context.stroke(); context.closePath();

	//LABELS
	var j = 0;
	for(var i = -0.5*Math.PI; i < 1.5*Math.PI; i+=(2*Math.PI/major)) {
		context.font = '20px Arial';
		context.textAlign="center"; 
		context.fillText(Math.round(j * 100) / 100,circle_radius_text*Math.cos(i) + circle_x, circle_radius_text*Math.sin(i) + circle_y+7);
		j+=major_increments;
	}
};
$(document).ready(function() {
	drawDial();
	$('#dial-generator form').bind('keyup mouseup', function() {
		if($('#dial-generator #major').val() > 0) major = $('#dial-generator #major').val();
		else major = 1;
		if($('#dial-generator #minor').val() > 0) minor = $('#dial-generator #minor').val();
		else minor = 1;
		if($('#dial-generator #minor-sub').val() > 0) minor_sub = $('#dial-generator #minor-sub').val();
		else minor_sub = 1;
		if($('#dial-generator #major-increments').val() > 0) major_increments = parseInt($('#dial-generator #major-increments').val()/0.01, 10)*0.01;
		else major_increments = 1;

		if($('#dial-generator #radius').val() > 0) circle_radius = $('#dial-generator #radius').val() * 96;
		if($('#dial-generator #hole-diameter').val() > 0) hole_diameter = $('#dial-generator #hole-diameter').val() * 96;
		if($('#dial-generator #tick-length-major').val() > 0) tick_length_major = $('#dial-generator #tick-length-major').val() * 96;
		if($('#dial-generator #tick-length-minor').val() > 0) tick_length_minor = $('#dial-generator #tick-length-minor').val() * 96;
		if($('#dial-generator #tick-length-subminor').val() > 0) tick_length_subminor = $('#dial-generator #tick-length-subminor').val() * 96;
		if($('#dial-generator #text-position').val() > 0) text_position = $('#dial-generator #text-position').val() * 96;

		circle_radius_major = circle_radius - tick_length_major;
		circle_radius_minor = circle_radius - tick_length_minor;
		circle_radius_subminor = circle_radius - tick_length_subminor;
		circle_radius_text = circle_radius - text_position;
		drawDial();
	});
});