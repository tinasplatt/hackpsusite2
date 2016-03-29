$(document).ready( function() {
	$('#expo-form').click( function() {
		$('iframe').toggle();
		$('.glyphicon-play').toggleClass('rotated');
	});

	$('#content > div').each( function() {
		sectionTitle = $('h1',this).text();
		$('#table-of-contents').append('<li><a href="#' 
			+ $(this).attr("id") + '">' 
			+ sectionTitle 
			+ '</a></li>')
	})
	var sponsors = Info["sponsors"];
	

	var testHTML = '';

	for (var key in sponsors) {
		var sponsor = sponsors[key];
	   	var sponsorHTML =
	   	'<tr><td class="sponsor-list-image"><img src="'
	   	+ sponsor.logo
	   	+ '"></td><td><h5>' 
	   	+ sponsor.name 
	   	+ '</h5><p>'
	   	+ sponsor.description
	   	+ '</p></td><</tr>';
		   	
	   	$('#sponsor-list').append(sponsorHTML);
	}

	var workshops = Info["workshops"];
	for (var key in workshops) {
		var workshop = workshops[key];

		console.log('poop');
	   	var workshopHTML =
	   	'<tr><td>'
	   	+ workshop.name
	   	+ '</td><td>'
	   	+ workshop.location
	   	+ '</td><td>'
	   	+ workshop.description
	   	+ '</td></tr>';
	   	var blockID = '#workshop-block-' + workshop.block;
		   	
	   	$(blockID).append(workshopHTML);
	}
	var prizes = Info["prizes"];
	for (var key in prizes) {
		var prize = prizes[key];

	   	var workshopHTML =
	   	'<tr><td>'
	   	+ prize.name
	   	+ '<br>'
	   	+ prize.sponsor
	   	+ '</td><td>'
	   	+ prize.value
	   	+ '</td><td>'
	   	+ prize.description
	   	+ '</td></tr>';
		   	
	   	$('#prize-list').append(workshopHTML);

	}
	var judges = Info["judges"];
	for (var key in judges) {
			var judge = judges[key];
		   	var judgeHTML =
		   	'<tr><td class="sponsor-list-image"><img src="'
		   	+ judge.image
		   	+ '"></td><td><h5>' 
		   	+ judge.name 
		   	+ '</h5><p>'
		   	+ judge.description
		   	+ '</p></td><</tr>';
			   	
		   	$('#judges-list').append(judgeHTML);
		}
	});