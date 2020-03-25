let Parser = require('rss-parser');
let parser = new Parser();
var FB = require('fb');
var Twitter = require('twitter');

(async () => {

    let feed = await parser.parseURL('https://daily-dev-tips.com/feed.xml');

    console.log(feed.title);

    feed.items.forEach(item => {
        console.log(item.title);
    });

})();

FB.setAccessToken('ACCESS_TOKEN');
FB.api(
    '/DailyDevTipsBlog/feed',
    'POST',
    { "message": "Testing with api" },
    function (response) {
        console.log(response);
    }
);

var client = new Twitter({
    consumer_key: '{CONSUMER_KEY}',
    consumer_secret: '{CONSUMER_SECRET}',
    access_token_key: '{ACCESS_TOKEN_KEY}',
    access_token_secret: '{ACCESS_TOKEN_SECRET}'
});

client.post('statuses/update', { status: 'I Love Twitter' }, function (error, tweet, response) {
    if (error) throw error;
    console.log(tweet);  // Tweet body.
    console.log(response);  // Raw response object.
});