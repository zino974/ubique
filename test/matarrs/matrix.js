var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/matrix ...');
test('matrix', function (done) {



assert.deepEqual(ubique.matrix(0),[[]]);
assert.deepEqual(ubique.matrix([0,0]),[[]]);
assert.deepEqual(ubique.matrix(2),[[null,null],[null,null]]);
assert.deepEqual(ubique.matrix([2,3]),[[null,null,null],[null,null,null]]);
assert.deepEqual(ubique.matrix(2,3),[[null,null,null],[null,null,null]]);
assert.deepEqual(ubique.matrix([2,3],-1),[[-1,-1,-1],[-1,-1,-1]]);
assert.deepEqual(ubique.matrix(3,1,'matrix'),[["matrix"],["matrix"],["matrix"]]);
assert.deepEqual(ubique.matrix(0,5,true),[[]]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->