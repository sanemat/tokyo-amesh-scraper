/*
 * tokyo-amesh-scraper
 * https://github.com/sanemat/tokyo-amesh-scraper
 *
 * Copyright (c) 2014 sanemat
 * Licensed under the MIT license.
 */

'use strict';

var request = require('request');
var rainMeshSource = 'http://tokyo-ame.jwa.or.jp/scripts/mesh_index.js';

function boundaryMapUrl(callback) {
  callback('http://tokyo-ame.jwa.or.jp/map/msk000.png');
}

function landformURL(callback) {
  callback('http://tokyo-ame.jwa.or.jp/map/map000.jpg');
}

function rainMeshURL(callback) {
  callback('http://tokyo-ame.jwa.or.jp/mesh/000/201405272250.gif');
}

module.exports.boundaryMapUrl = boundaryMapUrl;
module.exports.landformURL = landformURL;
module.exports.rainMeshURL = rainMeshURL;
