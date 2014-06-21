var tokyoAmeshScraper = require('tokyo-amesh-scraper');

var amesh = tokyoAmeshScraper({highResolution: true});
//or
var amesh = tokyoAmeshScraper();

amesh.boundaryMapURL(function(err, data){
  data;// => http://tokyo-ame.jwa.or.jp/map/msk000.png
});
amesh.landformURL(function(err, data){
  data;// => http://tokyo-ame.jwa.or.jp/map/map000.jpg
});
amesh.rainMeshURL(function(err, data){
  data;// => http://tokyo-ame.jwa.or.jp/mesh/000/201405272250.gif
});

amesh.rainMeshURLs(function(err, data){
  data;// => ['http://meshURL1', 'http://meshURL2', ...]
});
// http://tokyo-ame.jwa.or.jp/scripts/mesh_index.js
// or
// img#railfallMesh src
// For highResolution s/000/100/g
