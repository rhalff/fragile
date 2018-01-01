/* global gc */
function * _weak(value) {
  const d = new WeakMap()

  function setWeakValue(_value) {
    if (_value === false) return
    d.set(_value, true)
  }

  setWeakValue(value)
  setWeakValue(false)

  value = null

  while (true) {
    gc()
    yield %GetWeakMapEntries(d, 0).length !== 0
  }
}

function weak(value) {
  const a = _weak(value)

  return () => a.next().value
}

module.exports = weak
