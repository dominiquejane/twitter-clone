$(document).ready(function() {

	$('.tweet-compose').on('click', function() {
		$(this).css('height', '5em');
		$('#tweet-controls').css('visibility','visible');
	});

	$('.tweet-compose').on('blur', function() {
		$(this).css('height', '2.5em');
		$('#tweet-controls').css('visibility', 'hidden');
	});

	var max_characters = 140;
	$('#char-count').text(max_characters);
	$('textarea').bind('keyup keydown', function() {
		var count = $('#char-count');
    var characters = $(this).val().length;
    var remaining = max_characters - characters;
    $('#char-count').text(remaining);

    if (remaining <= 10) {
        count.css('color', 'red');
    } else {
        count.css('color', '#999');
    }

    if (remaining < 0) {
    	$('#tweet-submit').css('visibility', 'hidden');
    }
    else {
    	$('#tweet-submit').css('visibility', 'visible');

    }

 		});

	});
