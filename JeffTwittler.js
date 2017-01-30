$(document).ready(function(){
	var $body = $('.twittlers');
    $body.html('');

    var index = streams.home.length - 1;
    while(index >= 0){
        var tweet = streams.home[index];
        var $tweet = $('<div></div>');
        var $user = $('<button type="button"></button>');
        $user.addClass(tweet.user);
        $user.attr("ID","awesome");
        $user.text('@' + tweet.user);
        var time = timeStampRead(tweet.created_at);
        $tweet.text(': ' + tweet.message + "; " + time);
        //$tweet.addClass(tweet.user);
        $user.appendTo($body);
        $tweet.appendTo($body);
        index -= 1;
    }
});

$('.recent').click(function(){
		var $body = $('.twittlers');
    	$body.html('');
        var maxTwittles = 10;
    	var index = streams.home.length - 1;
    	while(maxTwittles >= 0){
        	var tweet = streams.home[index];
        	var $tweet = $('<div></div>');
            var $user = $('<button type="button"></button>');
            $user.addClass(tweet.user);
            $user.attr("ID","awesome");
            $user.text('@' + tweet.user);
            var time = timeStampRead(tweet.created_at);
        	$tweet.text(': ' + tweet.message + "; " + time);
            $tweet.addClass(tweet.user);
            $user.appendTo($body);
        	$tweet.appendTo($body);
        	index -= 1;
            maxTwittles -= 1;
    	}
});

$('.all').click(function(){
        var $body = $('.twittlers');
        $body.html('');
        var maxTwittles = 10;
        var index = streams.home.length - 1;
        while(index >= 0){
            var tweet = streams.home[index];
            var $tweet = $('<div></div>');
            var $user = $('<button type="button"></button>');
            $user.addClass(tweet.user);
            $user.attr("ID","awesome");
            $user.text('@' + tweet.user);
            var time = timeStampRead(tweet.created_at);
            $tweet.text(': ' + tweet.message + "; " + time);
            $tweet.addClass(tweet.user);
            $user.appendTo($body);
            $tweet.appendTo($body);
            index -= 1;
            maxTwittles -= 1;
        }
});

var timeStampRead = function(timeStamp) {
    var string = JSON.stringify(timeStamp);
    var hours = parseFloat(string.substring(12,14));
    if (hours >= 8) {
        hours -=8;
    }
    else {
        hours += 16;
    }
    return hours + string.substring(14,17) + "    " + string.substring(6,8) + "/" + string.substring(9,11) + "/" + string.substring(1,5);
}

$(document).on("click", "#awesome", function(){
            var $body = $('.twittlers');
            $('div').text('');
            console.log("button pressed")
            var index = streams.home.length - 1;
            while(index >= 0){
                var tweet = streams.home[index];
                var $tweet = $('<div></div>');
                var time = timeStampRead(tweet.created_at);
                $tweet.text('@' + tweet.user + ': ' + tweet.message + "; " + time);
                if (tweet.user === $(this).attr("class")) {
                    $tweet.appendTo($body);
        }
        index -= 1;
    }
});
