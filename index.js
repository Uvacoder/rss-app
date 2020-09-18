let Parser = require('rss-parser');
let parser = new Parser();
const fs = require('fs');

let rawdata = fs.readFileSync('site.json');
let siteData = JSON.parse(rawdata);

(async () => {
    let feed = await parser.parseURL('https://daily-dev-tips.com/sitemap.xml');
    feed.items.forEach(item => {
        let url = item.id;
        if (!siteData.url) {
            // Do magic posting stuff
            siteData[url] = {
                'published': true
            };
        }
    });
    fs.writeFileSync('site.json', JSON.stringify(siteData));
})();