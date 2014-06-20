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
var RAIN_MESH_SOURCE = 'http://tokyo-ame.jwa.or.jp/scripts/mesh_index.js';
var TOKYO_AMESH_URL = 'http://tokyo-ame.jwa.or.jp/';

function Amesh(opts, cb) {
  opts = opts || {};
  this.cb = null;
  if (cb) { this.cb = cb; }
  if (typeof opts === 'function') { this.cb = opts; }
  this.highResolution = opts.highResolution || false;
  this.reinMeshSource = RAIN_MESH_SOURCE;
  this.tokyoAmeshURL = TOKYO_AMESH_URL;
}

Amesh.prototype = {
  boundaryMapURL: function(callback) {
    var prefix = (this.highResolution) ? '100' : '000';
    var url = sprintf('http://tokyo-ame.jwa.or.jp/map/msk%s.png', prefix);
    callback(url);
  },
  landformURL: function(callback) {
    var prefix = (this.highResolution) ? '100' : '000';
    var url = sprintf('http://tokyo-ame.jwa.or.jp/map/map%s.jpg', prefix);
    callback(url);
  },
  rainMeshURL: function(callback) {
    var that = this;
    request(this.reinMeshSource, function(error, response, body){
      var target = body.replace(/\n|\r/g, "");
      target = target.replace('Amesh.setIndexList(["', '');
      target = target.replace('"]);', '');
      var list = target.split('","');
      var prefix = (that.highResolution) ? '100' : '000';
      var url = sprintf('http://tokyo-ame.jwa.or.jp/mesh/%s/%s.gif', prefix, list[0]);
      callback(url);
    });
  },
  rainMeshURLs: function(callback) {
    var that = this;
    request(this.reinMeshSource, function(error, response, body){
      var target = body.replace(/\n|\r/g, "");
      target = target.replace('Amesh.setIndexList(["', '');
      target = target.replace('"]);', '');
      var list = target.split('","');
      var prefix = (that.highResolution) ? '100' : '000';
      var urls = list.map(function(url){
        return sprintf('http://tokyo-ame.jwa.or.jp/mesh/%s/%s.gif', prefix, url);
      });
      callback(urls);
    });
  }
};

module.exports = function(opts, cb) {
  var s = new Amesh(opts, cb);

  if (s.cb) { s.on('error', s.cb); }
  return s;
};

module.exports.Amesh = Amesh;
