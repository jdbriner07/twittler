$(document).ready(function(){
	var $body = $('.twittlers');
    $body.html('');

    var index = streams.home.length - 1;
    while(index >= 0){
        var tweet = streams.home[index];
        var $tweet = $('<div></div>');
        console.log(JSON.stringify(tweet.created_at));
        $tweet.text('@' + tweet.user + ': ' + tweet.message + "; " + tweet.created_at);
        $tweet.appendTo($body);
        index -= 1;
    }
});

$('.recent').on('click', function(){
		var $body = $('.twittlers');
    	$body.html('');
        var maxTwittles = 10;

    	var index = streams.home.length - 1;
    	while(maxTwittles >= 0){
        	var tweet = streams.home[index];
        	var $tweet = $('<div></div>');
        	$tweet.text('@' + tweet.user + ': ' + tweet.message + "; " + tweet.created_at);
        	$tweet.appendTo($body);
        	index -= 1;
            maxTwittles -= 1;
    	}
});

$('.all').on('click', function(){
        var $body = $('.twittlers');
        $body.html('');

        var index = streams.home.length - 1;
        while(index >= 0){
            var tweet = streams.home[index];
            var $tweet = $('<div></div>');
            $tweet.text('@' + tweet.user + ': ' + tweet.message + "; " + tweet.created_at);
            $tweet.appendTo($body);
            index -= 1;
        }
});

var timeStampRead = function(timeStamp) {
    return timeStamp.substring(11,15) + "    " + timeStamp.substring(5,7) + "/" + timeStamp.substring(8,10) + "/" + timeStamp.substring(0,4);
}
