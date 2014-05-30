'use strict';

var tokyoAmeshScraper = require('../lib/tokyo-amesh-scraper.js');
var assert = require("power-assert");

describe('amesh URL', function(){
  it('should return boundaryMap', function(done){
    tokyoAmeshScraper.boundaryMapUrl(function(url){
      assert.equal(url, 'http://tokyo-ame.jwa.or.jp/map/msk000.png');
      done();
    });
  });
  it('should return landform', function(done){
    tokyoAmeshScraper.landformURL(function(url){
      assert.equal(url, 'http://tokyo-ame.jwa.or.jp/map/map000.jpg');
      done();
    });
  });
  it('should return mesh', function(done){
    tokyoAmeshScraper.rainMeshURL(function(url){
      assert.equal(url, 'http://tokyo-ame.jwa.or.jp/mesh/000/201405272250.gif');
      done();
    });
  });
});
