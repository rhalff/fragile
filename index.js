/* global gc */
function * _weak(value) {
  const d = new WeakSet()

  function setWeakValue(_value) {
    if (_value === false) return
    d.add(_value)
  }

  setWeakValue(value)
  setWeakValue(false)

  value = null

  while (true) {
    gc()
    yield %GetWeakSetValues(d, 0).length !== 0
  }
}

function weak(value) {
  const a = _weak(value)

  return () => a.next().value
}

module.exports = weak
