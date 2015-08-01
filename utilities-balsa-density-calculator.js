$('#balsa-density-calculator #thickness-units').click(function() {
	if($(this).html() == "inches") $(this).html("centimeters");
	else $(this).html("inches");
});
$('#balsa-density-calculator #width-units').click(function() {
	if($(this).html() == "inches") $(this).html("centimeters");
	else $(this).html("inches");
});
$('#balsa-density-calculator #length-units').click(function() {
	if($(this).html() == "inches") $(this).html("centimeters");
	else $(this).html("inches");
});
$('#balsa-density-calculator #mass-units').click(function() {
	if($(this).html() == "grams") $(this).html("pounds");
	else $(this).html("grams");
});

$('#balsa-density-calculator form').bind('keyup mouseup', function() {
	var thickness = $('#balsa-density-calculator #thickness').val();
	var width = $('#balsa-density-calculator #width').val();
	var length = $('#balsa-density-calculator #length').val();
	var mass = $('#balsa-density-calculator #mass').val();

	if($('#balsa-density-calculator #thickness-units').html() == "centimeters") thickness *= 0.393701;
	if($('#balsa-density-calculator #width-units').html() == "centimeters") width *= 0.393701;
	if($('#balsa-density-calculator #length-units').html() == "centimeters") length *= 0.393701;
	if($('#balsa-density-calculator #mass-units').html() == "grams") mass *= 0.00220462;

	if(thickness > 0 && width > 0 && length > 0 && mass > 0) {
		var density = mass/(thickness * width * length / 1728);
		density = density.toFixed(4);
		if(density < 6)	$('#balsa-density-calculator #output').html("Extra Light Balsa (" + density + " pounds per cubic foot)");
		else if(density < 10)	$('#balsa-density-calculator #output').html("Light Balsa (" + density + " pounds per cubic foot)");
		else if(density < 14)	$('#balsa-density-calculator #output').html("Medium Balsa (" + density + " pounds per cubic foot)");
		else if(density < 19)	$('#balsa-density-calculator #output').html("Heavy Balsa (" + density + " pounds per cubic foot)");
		else $('#balsa-density-calculator #output').html("Extra Heavy Balsa (" + density + " pounds per cubic foot)");
	}
	else {
		$('#balsa-density-calculator #output').html("");
	}
});