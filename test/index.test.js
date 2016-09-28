var Hath = require('..')()
var format = require('util').format

function assertEquals(t, done) {
  t.assertEquals(1, 1)
  t.assertEquals('a', 'a')
  fails('1 is not equal to 1', t).assertEquals(1, '1')
  fails('1 is not equal to 2', t).assertEquals(1, 2)
  done()
}

function assertNotEquals(t, done) {
  t.assertNotEquals(1, 2)
  t.assertNotEquals('a', 'b')
  t.assertNotEquals(1, '1')
  fails('1 is equal to 1', t).assertNotEquals(1, 1)
  done()
}

function assertGreater(t, done) {
  t.assertGreater(2, 1)
  t.assertGreater('b', 'a')
  t.assertGreater(new Date(2000), new Date(1000))
  fails('1 is not greater than 1', t).assertGreater(1, 1)
  fails('1 is not greater than 2', t).assertGreater(1, 2)
  done()
}

function assertNotGreater(t, done) {
  t.assertNotGreater(1, 1)
  t.assertNotGreater(1, 2)
  t.assertNotGreater(1, '1')
  t.assertNotGreater('a', 'b')
  t.assertNotGreater(new Date(1000), new Date(1000))
  t.assertNotGreater(new Date(1000), new Date(2000))
  fails('2 is greater than or equal to 1', t).assertNotGreater(2, 1)
  fails('b is greater than or equal to a', t).assertNotGreater('b', 'a')
  done()
}

function assertLess(t, done) {
  t.assertLess(1, 2)
  t.assertLess('a', 'b')
  t.assertLess(new Date(1000), new Date(2000))
  fails('1 is not less than 1', t).assertLess(1, 1)
  fails('2 is not less than 1', t).assertLess(2, 1)
  done()
}

function assertNotLess(t, done) {
  t.assertNotLess(1, 1)
  t.assertNotLess(2, 1)
  t.assertNotLess(1, '1')
  t.assertNotLess('b', 'a')
  t.assertNotLess(new Date(1000), new Date(1000))
  t.assertNotLess(new Date(2000), new Date(1000))
  fails('1 is less than or equal to 2', t).assertNotLess(1, 2)
  fails('a is less than or equal to b', t).assertNotLess('a', 'b')
  done()
}

function assertMatches(t, done) {
  t.assertMatches(/1/, 1)
  fails('2 does not match /1/', t).assertMatches(/1/, 2)
  done()
}

function assertNotMatches(t, done) {
  t.assertNotMatches(/1/, 2)
  fails('1 matches /1/', t).assertNotMatches(/1/, 1)
  done()
}

function assertTruthy(t, done) {
  t.assertTruthy(true)
  t.assertTruthy(1)
  t.assertTruthy([])
  t.assertTruthy('yes')

  fails('false is not truthy', t).assertTruthy(false)
  fails('0 is not truthy', t).assertTruthy(0)
  fails('null is not truthy', t).assertTruthy(null)
  fails('undefined is not truthy', t).assertTruthy(undefined)
  fails(' is not truthy', t).assertTruthy('')
  done()
}

function assertFalsey(t, done) {
  t.assertFalsey(false)
  t.assertFalsey(0)
  t.assertFalsey(null)
  t.assertFalsey(undefined)
  t.assertFalsey('')

  fails('true is not falsey', t).assertFalsey(true)
  fails('1 is not falsey', t).assertFalsey(1)
  fails('yes is not falsey', t).assertFalsey('yes')
  done()
}

function assertNotError(t, done) {
  t.assertNotError(null)
  t.assertNotError(undefined)
  fails('Oh Noes!!!', t).assertNotError(new Error('Oh Noes!!!'))
  done()
}

function assertThrows(t, done) {
  t.assertThrows(function() {
    throw new Error('Oh Noes!')
  })
  fails('Did not throw an error', t).assertThrows(function() {})
  done()
}

function assertThrowsMessage(t, done) {
  t.assertThrows(function() {
    throw new Error('Oh Noes!')
  }, /Oh Noes/)
  fails('Oh Noes!!! does not match /foo/', t).assertThrows(function() { throw new Error('Oh Noes!!!')}, /foo/)
  done()
}

function fails(expected, t) {
  return new Hath({
    fail: function(label, actual) {
      t.assert(actual === expected, format('"%s" != "%s"', actual, expected))
    },
    pass: function(label) {
      t.assert(false, 'Did not fail')
    }
  })
}

module.exports = Hath.suite('Hath Assert', [
  assertEquals,
  assertNotEquals,
  assertGreater,
  assertNotGreater,
  assertLess,
  assertNotLess,
  assertMatches,
  assertNotMatches,
  assertTruthy,
  assertFalsey,
  assertNotError,
  assertThrows,
  assertThrowsMessage
]);

if (module === require.main) {
  module.exports(new Hath());
}