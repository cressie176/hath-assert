var Hath = require('..')()
var format = require('util').format

function assertEquals(t, done) {
  new Hath({
    fail: function(label, actual) {
      var expected = '1 does not equal 2'
      t.assert(actual === expected, format('"%s" != "%s"', actual, expected))
      done()
    },
    pass: function(label) {
      t.assert(false, format('Did not fail'))
      done()
    }
  }).assertEquals(1, 2)
}

function assertNotEquals(t, done) {
  new Hath({
    fail: function(label, actual) {
      var expected = '1 equals 1'
      t.assert(actual === expected, format('"%s" != "%s"', actual, expected))
      done()
    },
    pass: function(label) {
      t.assert(false, format('Did not fail'))
      done()
    }
  }).assertNotEquals(1, 1)
}

function assertMatches(t, done) {
  new Hath({
    fail: function(label, actual) {
      var expected = '2 does not match /1/'
      t.assert(actual === expected, format('"%s" != "%s"', actual, expected))
      done()
    },
    pass: function(label) {
      t.assert(false, format('Did not fail'))
      done()
    }
  }).assertMatches(/1/, 2)
}

function assertNotMatches(t, done) {
  new Hath({
    fail: function(label, actual) {
      var expected = '1 matches /1/'
      t.assert(actual === expected, format('"%s" != "%s"', actual, expected))
      done()
    },
    pass: function(label) {
      t.assert(false, format('Did not fail'))
      done()
    }
  }).assertNotMatches(/1/, 1)
}

function assertTruthy(t, done) {
  new Hath({
    fail: function(label, actual) {
      var expected = '0 is not truthy'
      t.assert(actual === expected, format('"%s" != "%s"', actual, expected))
      done()
    },
    pass: function(label) {
      t.assert(false, format('Did not fail'))
      done()
    }
  }).assertTruthy(0)
}

function assertFalsey(t, done) {
  new Hath({
    fail: function(label, actual) {
      var expected = '1 is not falsey'
      t.assert(actual === expected, format('"%s" != "%s"', actual, expected))
      done()
    },
    pass: function(label) {
      t.assert(false, format('Did not fail'))
      done()
    }
  }).assertFalsey(1)
}

function assertError(t, done) {
  new Hath({
    fail: function(label, actual) {
      var expected = 'Oh Noes!!!'
      t.assert(actual === expected, format('"%s" != "%s"', actual, expected))
      done()
    },
    pass: function(label) {
      t.assert(false, format('Did not fail'))
      done()
    }
  }).assertNotError(new Error('Oh Noes!!!'))
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