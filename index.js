var format = require('util').format

module.exports = function(_Hath) {

  var Hath = _Hath || require('hath')

  Hath.helper('assertEquals', function(a, b, message) {
    return this.assert(a === b, message || format('%s does not equal %s', a, b))
  });

  Hath.helper('assertNotEquals', function(a, b, message) {
    return this.assert(a !== b, message || format('%s equals %s', a, b))
  });

  Hath.helper('assertMatches', function(a, b, message) {
    return this.assert(a.test(b), message || format('%s does not match %s', b, a))
  });

  Hath.helper('assertNotMatches', function(a, b, message) {
    return this.assert(!a.test(b), message || format('%s matches %s', b, a))
  });

  Hath.helper('assertTruthy', function(a, message) {
    return this.assert(a, message || format('%s is not truthy', a))
  });

  Hath.helper('assertFalsey', function(a, message) {
    return this.assert(!a, message || format('%s is not falsey', a))
  });

  Hath.helper('assertNotError', function(err, message) {
    return this.assert(!err, message || err && err.message)
  });

  return Hath
}