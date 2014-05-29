'use strict';

var tokyoAmeshParser = require('../lib/tokyo-amesh-parser.js');
var assert = require("power-assert");

describe('amesh URL', function(){
  it('should return boundaryMap', function(done){
    tokyoAmeshParser.boundaryMapUrl(function(url){
      assert.equal(url, 'http://tokyo-ame.jwa.or.jp/map/msk000.png');
      done();
    });
  });
  it('should return landform', function(done){
    tokyoAmeshParser.landformURL(function(url){
      assert.equal(url, 'http://tokyo-ame.jwa.or.jp/map/map000.jpg');
      done();
    });
  });
  it('should return mesh', function(done){
    tokyoAmeshParser.rainMeshURL(function(url){
      assert.equal(url, 'http://tokyo-ame.jwa.or.jp/mesh/000/201405272250.gif');
      done();
    });
  });
});
