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

function balsa_density_calculator() {
	var thickness = $('#balsa-density-calculator #thickness').val();
	var width = $('#balsa-density-calculator #width').val();
	var length = $('#balsa-density-calculator #length').val();
	var mass = $('#balsa-density-calculator #mass').val();
	var density_select = $('#balsa-density-calculator #density').val();

	if($('#balsa-density-calculator #thickness-units').html() == "centimeters") thickness *= 0.393701;
	if($('#balsa-density-calculator #width-units').html() == "centimeters") width *= 0.393701;
	if($('#balsa-density-calculator #length-units').html() == "centimeters") length *= 0.393701;
	if($('#balsa-density-calculator #mass-units').html() == "grams") mass *= 0.00220462;

	if(density_select == "Enter your own value")	$('#balsa-density-calculator #density-enter').css('display', 'inline');
	else $('#balsa-density-calculator #density-enter').css('display', 'none');

	if(thickness > 0 && width > 0 && length > 0 && density_select != "") {
		if(density_select == "Extra Light (-6 lbs/cubic ft)")		$('#balsa-density-calculator #output').html("Mass: Less than " + (6*(thickness * width * length / 1728)/0.00220462).toFixed(3) + " grams (" + (6*(thickness * width * length / 1728)).toFixed(3) + " pounds)");
		else if(density_select == "Light (6-10 lbs/cubic ft)")		$('#balsa-density-calculator #output').html("Mass: Between " + (6*(thickness * width * length / 1728)/0.00220462).toFixed(3) + " and " + (10*(thickness * width * length / 1728)/0.00220462).toFixed(3) + " grams (" + (6*(thickness * width * length / 1728)).toFixed(3) + " and " + (10*(thickness * width * length / 1728)).toFixed(3) + " pounds)");
		else if(density_select == "Medium (10-14 lbs/cubic ft)")	$('#balsa-density-calculator #output').html("Mass: Between " + (10*(thickness * width * length / 1728)/0.00220462).toFixed(3) + " and " + (14*(thickness * width * length / 1728)/0.00220462).toFixed(3) + " grams (" + (10*(thickness * width * length / 1728)).toFixed(3) + " and " + (14*(thickness * width * length / 1728)).toFixed(3) + " pounds)");
		else if(density_select == "Heavy (14-19 lbs/cubic ft)")		$('#balsa-density-calculator #output').html("Mass: Between " + (14*(thickness * width * length / 1728)/0.00220462).toFixed(3) + " and " + (19*(thickness * width * length / 1728)/0.00220462).toFixed(3) + " grams (" + (14*(thickness * width * length / 1728)).toFixed(3) + " and " + (19*(thickness * width * length / 1728)).toFixed(3) + " pounds)");
		else if(density_select == "Extra Heavy (19+ lbs/cubic ft)")	$('#balsa-density-calculator #output').html("Mass: Greater than " + (19*(thickness * width * length / 1728)/0.00220462).toFixed(3) + " grams (" + (19*(thickness * width * length / 1728)).toFixed(3) + " pounds)");
		else	$('#balsa-density-calculator #output').html("Mass: " + ($('#balsa-density-calculator #density-enter').val()*(thickness * width * length / 1728)/0.00220462).toFixed(3) + " grams (" + ($('#balsa-density-calculator #density-enter').val()*(thickness * width * length / 1728)).toFixed(3) + " pounds)");
	}
	else if(thickness > 0 && width > 0 && length > 0 && mass > 0) {
		var density = mass/(thickness * width * length / 1728);
		density = density.toFixed(4);
		if(density < 6)		$('#balsa-density-calculator #output').html("Extra Light Balsa (" + density + " pounds per cubic foot)");
		else if(density < 10)	$('#balsa-density-calculator #output').html("Light Balsa (" + density + " pounds per cubic foot)");
		else if(density < 14)	$('#balsa-density-calculator #output').html("Medium Balsa (" + density + " pounds per cubic foot)");
		else if(density < 19)	$('#balsa-density-calculator #output').html("Heavy Balsa (" + density + " pounds per cubic foot)");
		else $('#balsa-density-calculator #output').html("Extra Heavy Balsa (" + density + " pounds per cubic foot)");
	}
	else {
		$('#balsa-density-calculator #output').html("");
	}
};
setInterval(balsa_density_calculator, 10);