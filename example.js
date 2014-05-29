var tokyoAmesh = require('tokyo-amesh');

var mesh = tokyoAmesh({highResolution: true});
var mesh = tokyoAmesh();

mesh.boundaryMapURL(function(data){});// data => http://tokyo-ame.jwa.or.jp/map/msk000.png
mesh.landformURL(function(data){});// data => http://tokyo-ame.jwa.or.jp/map/map000.jpg
mesh.rainMeshURL(function(data){});// data => http://tokyo-ame.jwa.or.jp/mesh/000/201405272250.gif

// http://tokyo-ame.jwa.or.jp/scripts/mesh_index.js
// or
// img#railfallMesh src
// For highResolution s/000/100/g
