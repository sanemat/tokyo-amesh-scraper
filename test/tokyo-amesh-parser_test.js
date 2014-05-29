'use strict';

var tokyoAmeshParser = require('../lib/tokyo-amesh-parser.js');
var assert = require("power-assert");

describe('amesh URL', function(){
  it('should return boundaryMap', function(){
    assert.equal(tokyoAmeshParser.boundaryMapUrl(), 'http://tokyo-ame.jwa.or.jp/map/msk000.png');
  });
  it('should return landform', function(){
    assert.equal(tokyoAmeshParser.landformURL(), 'http://tokyo-ame.jwa.or.jp/map/map000.jpg');
  });
  it('should return mesh', function(){
    assert.equal(tokyoAmeshParser.rainMeshURL(), 'http://tokyo-ame.jwa.or.jp/mesh/000/201405272250.gif');
  });
});
