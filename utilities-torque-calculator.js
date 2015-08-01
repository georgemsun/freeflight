$('#torque-calculator #torque-units').click(function() {
	if($(this).html() == "in-oz.") $(this).html("gram-cm.");
	else $(this).html("in-oz.");
});
$('#torque-calculator #length-units').click(function() {							
	if($(this).html() == "inches") $(this).html("centimeters");
	else $(this).html("inches");
});
$('#torque-calculator #diameter-units').click(function() {
	if($(this).html() == "inches") $(this).html("centimeters");
	else $(this).html("inches");
});
$('#torque-calculator #angle-units').click(function() {
	if($(this).html() == "degrees") $(this).html("radians");
	else $(this).html("degrees");
});

// a = C*T*L/G*D^4
// a = angle of pointer deflection in degrees (degrees)
// C = constant: 36.5 (584)
// T = torque in inch-ounces (newton-millimeters)
// L = length of the music wire torsional element in inches (millimeters)
// D = diameter of the music wire torsional element in inches (millimeters)
// G = torsional Modulus of Elasticity for music wire in pounds/square inch

$('#torque-calculator form').bind('keyup mouseup', function() {
	var torque = $('#torque-calculator #torque').val();
	var length = $('#torque-calculator #length').val();
	var diameter = $('#torque-calculator #diameter').val();
	var angle = $('#torque-calculator #angle').val();
	var g = 12000000;
		// if(diameter < 0.025)

	if($('#torque-calculator #torque-units').html() == "gram-cm." && torque != '') torque *= 0.013887386556753966;
	if($('#torque-calculator #length-units').html() == "centimeters"  && length != '') length *= 0.393701;
	if($('#torque-calculator #diameter-units').html() == "centimeters"  && diameter != '') diameter *= 0.393701;
	if($('#torque-calculator #angle-units').html() == "radians"  && angle != '') angle *= 57.2957795;

	//a = C*T*L/G*D^4
	if(torque === "" && length != "" && diameter != "" && angle != "") {
		$('#torque-calculator #output').html("Torque: " + ((angle * g * Math.pow(diameter, 4))/(36.5 * length)).toFixed(4) + " in-oz. or " + ((angle * g * Math.pow(diameter, 4))/(36.5 * length * 0.013887386556753966)).toFixed(4) + " gram-cm.");
	}
	else if(torque != "" && length === "" && diameter != "" && angle != "") {
		$('#torque-calculator #output').html("Length: " + ((angle * g * Math.pow(diameter, 4))/(36.5 * torque)).toFixed(4) + " inches or " + ((angle * g * Math.pow(diameter, 4))/(36.5 * torque * 0.393701)).toFixed(4) + " centimeters");
	}
	else if(torque != "" && length != "" && diameter === "" && angle != "") {
		$('#torque-calculator #output').html("Diameter: " + (Math.pow((36.5 * torque * length)/(angle * g), 0.25)).toFixed(4) + " inches or " + (Math.pow((36.5 * torque * length)/(angle * g), 0.25) /  0.393701).toFixed(4) + " centimeters");
	}
	else if(torque != "" && length != "" && diameter != "" && angle === "") {
		$('#torque-calculator #output').html("Angle: " + ((36.5 * torque * length)/(g * Math.pow(diameter, 4))).toFixed(4) + " degrees or " + ((36.5 * torque * length)/(g * Math.pow(diameter, 4) * 57.2957795)).toFixed(4) + " radians");
	}
	else if(torque != "" && length != "" && diameter != "" && angle != "") {
		$('#torque-calculator #output').html("Error: Please leave one field blank.");
	}
	else {
		$('#torque-calculator #output').html("");
	}
});