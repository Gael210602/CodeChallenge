var replacer = require('../index');
var assert = require('assert').strict;

describe('Unit tests', function() {
    describe('unit test 1', function() {
        it('should return "S3h" when we write "Smooth"', function() {
            assert.equal(replacer("Smooth"), "S3h");
        });
    });
    describe('unit test 2', function() {
        it('should return "S3h c5l" when we write "Smooth criminal"', function() {
            assert.equal(replacer("Smooth criminal"), "S3h c5l");
        });
    });
    describe('unit test 3', function() {
        it('should return "W4d" when we write "Wasted"', function() {
            assert.equal(replacer("Wasted"), "W4d");
        });
    });
    describe('unit test 4', function() {
        it('should return "W0e l2e f4r" when we write "We live forever"', function() {
            assert.equal(replacer("We live forever"), "W0e l2e f4r");
        });
    });
    describe('unit test 5', function() {
        it('should return "H2o w3d" when we write "Hello world"', function() {
            assert.equal(replacer("Hello world"), "H2o w3d");
        });
    });
});