const test = require('tape')
const fragile = require('./')

test('Ref leaks', (t) => {
  let myObject = {be: 'test'};

  const isLeaking = fragile.weak(myObject)

  fragile.gc()

  t.true(isLeaking())
  t.end()
})

test('Deref no leak', (t) => {
  let myObject = {be: 'test'};

  const isLeaking = fragile.weak(myObject)

  myObject = null

  fragile.gc()

  t.false(isLeaking())
  t.end()
})
