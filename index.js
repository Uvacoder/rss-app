let Parser = require('rss-parser');
let parser = new Parser();
var FB = require('fb');

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