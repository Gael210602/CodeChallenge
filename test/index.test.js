var replacer = require('../src/index');
var assert = require('assert').strict;

describe('Unit tests', function() {
    describe('unit test for example sample', function() {
        it('should return "S3h" when we write "Smooth"', function() {
            assert.equal(replacer("Smooth"), "S3h");
        });
    });
    describe('unit test with two words', function() {
        it('should return "S3h c5l" when we write "Smooth criminal"', function() {
            assert.equal(replacer("Smooth criminal"), "S3h c5l");
        });
    });
    describe('unit test for three words', function() {
        it('should return "W0e l2e f4r" when we write "We live forever"', function() {
            assert.equal(replacer("We live forever"), "W0e l2e f4r");
        });
    });
    describe('unit test for blankspace entry', function() {
        it('should return " " when we write " "', function() {
            assert.equal(replacer(" "), " ");
        });
    });
    describe('unit test for empty entry', function() {
        it('should return "" when we write ""', function() {
            assert.equal(replacer(""), "");
        });
    });
    describe('unit test for numbers instead of spaces', function() {
        it('should return "H2o0w3d1h1w2a1e3y1u" when we write "Hello0world1how2are3you"', function() {
            assert.equal(replacer("Hello0world1how2are3you"), "H2o0w3d1h1w2a1e3y1u");
        });
    });
    describe('unit test for numbers and non alphabetic with spaces', function() {
        it('should return "H2o-w3d$h1w2a1e3y1u/t3y f4d" when we write "Hello-world$how2are3you/today friend"', function() {
            assert.equal(replacer("Hello-world$how2are3you/today friend"), "H2o-w3d$h1w2a1e3y1u/t3y f4d");
        });
    });
});