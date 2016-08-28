var Hath = require('..')()
var format = require('util').format

function assertEquals(t, done) {
  testHath('1 does not equal 2', t, done).assertEquals(1, 2)
}

function assertNotEquals(t, done) {
  testHath('1 equals 1', t, done).assertNotEquals(1, 1)
}

function assertMatches(t, done) {
  testHath('2 does not match /1/', t, done).assertMatches(/1/, 2)
}

function assertNotMatches(t, done) {
  testHath('1 matches /1/', t, done).assertNotMatches(/1/, 1)
}

function assertTruthy(t, done) {
  testHath('0 is not truthy', t, done).assertTruthy(0)
}

function assertFalsey(t, done) {
  testHath('1 is not falsey', t, done).assertFalsey(1)
}

function assertError(t, done) {
  testHath('Oh Noes!!!', t, done).assertNotError(new Error('Oh Noes!!!'))
}

function testHath(expected, t, done) {
  return new Hath({
    fail: function(label, actual) {
      t.assert(actual === expected, format('"%s" != "%s"', actual, expected))
      done()
    },
    pass: function(label) {
      t.assert(false, 'Did not fail')
      done()
    }
  })
}

module.exports = Hath.suite('Hath Assert', [
  assertEquals,
  assertNotEquals,
  assertMatches,
  assertNotMatches,
  assertTruthy,
  assertFalsey,
  assertError
]);

if (module === require.main) {
  module.exports(new Hath());
}