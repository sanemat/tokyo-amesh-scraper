# tokyo-amesh-scraper [![Build Status](https://secure.travis-ci.org/sanemat/tokyo-amesh-scraper.png?branch=master)](http://travis-ci.org/sanemat/tokyo-amesh-scraper)

The scraper for tokyo-ame.jwa.or.jp

## Getting Started
Install the module with: `npm install tokyo-amesh-scraper`

```javascript
var TokyoAmeshScraper = require('tokyo-amesh-scraper');
var amesh = TokyoAmeshScraper();

amesh.boundaryMapURL(callback);// callback => http://tokyo-ame.jwa.or.jp/map/msk000.png
amesh.landformURL(callback);// callback => http://tokyo-ame.jwa.or.jp/map/map000.jpg
amesh.rainMeshURL(callback);// callback => http://tokyo-ame.jwa.or.jp/mesh/000/201405272250.gif
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
v0.1.0 Adjust high resolution/ normal resolution.

## License
Copyright (c) 2014 sanemat. Licensed under the MIT license.
