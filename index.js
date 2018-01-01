/* global gc */
function * _weak(value) {
  if (value == undefined) return

  const d = new WeakMap()

  function setWeakValue(value) {
    if (value === false) return

    d.set(value, true)
  }

  setWeakValue(value)
  setWeakValue(false)

  value = null

  gc()

  yield %GetWeakMapEntries(d, 0).length
}

function weak(value) {
  const a = _weak(value)

  return () => a.next().value
}

module.exports = {
  weak,
  gc: () => _weak()
}
