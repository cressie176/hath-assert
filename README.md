# hath-asserts
A set of assertion helpers for [hath](https://github.com/stringtree/hath)

## API

* require('hath-assert')([&lt;Hath&gt;])
* t.assertEquals(&lt;any&gt;, &lt;any&gt;, [&lt;message&gt;])
* t.assertNotEquals(&lt;any&gt;, &lt;any&gt;, [&lt;message&gt;])
* t.assertMatches(&lt;RegExp&gt;, &lt;any&gt;, [&lt;message&gt;])
* t.assertNotMatches(&lt;RegExp&gt;, &lt;any&gt;, [&lt;message&gt;])
* t.assertTruthy(&lt;any&gt;, [&lt;message&gt;])
* t.assertFalsey(&lt;any&gt;, [&lt;message&gt;])
* t.assertError(&lt;any&gt;, [&lt;message&gt;])
* t.assertThrows(&lt;function&gt;, [&lt;RegExp&gt;])

## Example
```
const Hath = require('hath-assert')()

function testFoo(t, done) {
    t.assertEquals(1, 1)
    t.assertPlan(1)
}

module.exports = Hath.suite('Hath Assert Example', [
    testFoo
]);

if (module === require.main) {
  module.exports(new Hath());
}

```
