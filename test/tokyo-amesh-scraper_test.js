'use strict';

var tokyoAmeshScraper = require('../lib/tokyo-amesh-scraper.js');
var assert = require("power-assert");
var nock = require('nock');

describe('normal resolution', function(){
  var amesh;

  before(function(done){
    amesh = tokyoAmeshScraper();
    done();
  });

  it('should return boundaryMap', function(done){
    amesh.boundaryMapURL(function(url){
      assert.equal(url, 'http://tokyo-ame.jwa.or.jp/map/msk000.png');
      done();
    });
  });
  it('should return landform', function(done){
    amesh.landformURL(function(url){
      assert.equal(url, 'http://tokyo-ame.jwa.or.jp/map/map000.jpg');
      done();
    });
  });
  it('should return mesh', function(done){
    nock('http://tokyo-ame.jwa.or.jp')
      .get('/scripts/mesh_index.js')
      .replyWithFile(200, __dirname + '/mesh_result.txt');
    amesh.rainMeshURL(function(url){
      assert.equal(url, 'http://tokyo-ame.jwa.or.jp/mesh/000/201405301955.gif');
      done();
    });
  });
  it('should return mesh urls', function(done){
    nock('http://tokyo-ame.jwa.or.jp')
      .get('/scripts/mesh_index.js')
      .replyWithFile(200, __dirname + '/mesh_result.txt');
    amesh.rainMeshURLs(function(urls){
      assert.equal(urls[0], 'http://tokyo-ame.jwa.or.jp/mesh/000/201405301955.gif');
      assert.equal(urls[24], 'http://tokyo-ame.jwa.or.jp/mesh/000/201405301755.gif');
      assert.equal(urls.length, 25);
      done();
    });
  });
});

describe('high resolution', function(){
  var amesh;

  before(function(done){
    amesh = tokyoAmeshScraper({ highResolution: true });
    done();
  });

  it('should return boundaryMap', function(done){
    amesh.boundaryMapURL(function(url){
      assert.equal(url, 'http://tokyo-ame.jwa.or.jp/map/msk100.png');
      done();
    });
  });
  it('should return landform', function(done){
    amesh.landformURL(function(url){
      assert.equal(url, 'http://tokyo-ame.jwa.or.jp/map/map100.jpg');
      done();
    });
  });
  it('should return mesh', function(done){
    nock('http://tokyo-ame.jwa.or.jp')
      .get('/scripts/mesh_index.js')
      .replyWithFile(200, __dirname + '/mesh_result.txt');
    amesh.rainMeshURL(function(url){
      assert.equal(url, 'http://tokyo-ame.jwa.or.jp/mesh/100/201405301955.gif');
      done();
    });
  });
  it('should return mesh urls', function(done){
    nock('http://tokyo-ame.jwa.or.jp')
      .get('/scripts/mesh_index.js')
      .replyWithFile(200, __dirname + '/mesh_result.txt');
    amesh.rainMeshURLs(function(urls){
      assert.equal(urls[0], 'http://tokyo-ame.jwa.or.jp/mesh/100/201405301955.gif');
      assert.equal(urls[24], 'http://tokyo-ame.jwa.or.jp/mesh/100/201405301755.gif');
      assert.equal(urls.length, 25);
      done();
    });
  });
});
