var assert = require('assert');
var ubique = require('../../index.js');

suite('stats',function () {
console.log('Testing stats/median ...');
test('median', function (done) {



assert.deepEqual(ubique.median([5,6,3]),5);
assert.deepEqual(ubique.median([[5,6,5],[7,8,-1]]),[[5],[7]]);
assert.deepEqual(ubique.median([[5,6,5],[7,8,-1]],1),[[6,7,2]]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->