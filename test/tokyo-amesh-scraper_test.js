'use strict';

var tokyoAmeshScraper = require('../lib/tokyo-amesh-scraper.js');
var assert = require("power-assert");
var nock = require('nock');

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
    nock('http://tokyo-ame.jwa.or.jp')
      .get('/scripts/mesh_index.js')
      .replyWithFile(200, __dirname + '/mesh_result.txt');
    tokyoAmeshScraper.rainMeshURL(function(url){
      assert.equal(url, 'http://tokyo-ame.jwa.or.jp/mesh/000/201405301955.gif');
      done();
    });
  });
});
