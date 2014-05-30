/*
 * tokyo-amesh-scraper
 * https://github.com/sanemat/tokyo-amesh-scraper
 *
 * Copyright (c) 2014 sanemat
 * Licensed under the MIT license.
 */

'use strict';

var request = require('request');
var sprintf = require("sprintf-js").sprintf;
var rainMeshSource = 'http://tokyo-ame.jwa.or.jp/scripts/mesh_index.js';

function boundaryMapUrl(callback) {
  callback('http://tokyo-ame.jwa.or.jp/map/msk000.png');
}

function landformURL(callback) {
  callback('http://tokyo-ame.jwa.or.jp/map/map000.jpg');
}

function rainMeshURL(callback) {
  request(rainMeshSource, function(error, response, body){
    var target = body.replace(/\n|\r/g, "");
    target = target.replace('Amesh.setIndexList(["', '');
    target = target.replace('"]);', '');
    var list = target.split('","');
    var url = sprintf('http://tokyo-ame.jwa.or.jp/mesh/000/%s.gif', list[0]);
    callback(url);
  });
}

module.exports.boundaryMapUrl = boundaryMapUrl;
module.exports.landformURL = landformURL;
module.exports.rainMeshURL = rainMeshURL;
