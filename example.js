var tokyoAmesh = require('tokyo-amesh')

var mesh = tokyoAmesh({highResolution: true});
var mesh = tokyoAmesh();

mesh.boundalyMapURL();//=> http://tokyo-ame.jwa.or.jp/map/msk000.png
mesh.landformURL();//=> http://tokyo-ame.jwa.or.jp/map/map000.jpg
mesh.rainMeshURL();//=> http://tokyo-ame.jwa.or.jp/mesh/000/201405272250.gif

// http://tokyo-ame.jwa.or.jp/scripts/mesh_index.js
// or
// img#railfallMesh src
// For highResolution s/000/100/g
