$(document).ready(function(){
	var $body = $('.twittlers');
    $body.html('');

    var index = streams.home.length - 1;
    while(index >= 0){
        var tweet = streams.home[index];
        var $tweet = $('<div></div>');
        $tweet.text('@' + tweet.user + ': ' + tweet.message);
        $tweet.appendTo($body);
        index -= 1;
    }
});





$('button').on('click', function(){
		var $body = $('.twittlers');
    	$body.html('');

    	var index = streams.home.length - 1;
    	while(index >= 0){
        	var tweet = streams.home[index];
        	var $tweet = $('<div></div>');
        	$tweet.text('@' + tweet.user + ': ' + tweet.message);
        	$tweet.appendTo($body);
        	index -= 1;
    	}
});


