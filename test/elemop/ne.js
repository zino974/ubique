var assert = require('assert');
var ubique = require('../../index.js');

suite('elemop',function () {
console.log('Testing elemop/ne ...');
test('ne', function (done) {



assert.deepEqual(ubique.ne(5,5),false);
assert.deepEqual(ubique.ne(5,[5,6,3]),[false,true,true]);
assert.deepEqual(ubique.ne(5,[[5,6],[3,5]]),[[false,true],[true,false]]);
assert.deepEqual(ubique.ne([5,6,3],5),[false,true,true]);
assert.deepEqual(ubique.ne([[5,6],[3,5]],5),[[false,true],[true,false]]);
assert.deepEqual(ubique.ne([5,6,3],[2,6,0]),[true,false,true]);
assert.deepEqual(ubique.ne([[5,6],[-1,2]],[[5,6],[3,5]]),[[false,false],[true,true]]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->