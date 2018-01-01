const test = require('tape')
const fragile = require('./')

test('Deref after one call', (t) => {
  let myObject = {be: 'test'}

  const isLeaking = fragile(myObject)

  t.true(isLeaking())

  myObject = null

  t.false(isLeaking())
  t.end()
})
test('Deref after multiple calls', (t) => {
  let myObject = {be: 'test'}

  const isLeaking = fragile(myObject)

  t.true(isLeaking())
  t.true(isLeaking())
  t.true(isLeaking())

  myObject = null

  t.false(isLeaking())
  t.false(isLeaking())
  t.false(isLeaking())

  myObject = {}

  t.false(isLeaking())
  t.end()
})

test('Direct deref', (t) => {
  let myObject = {be: 'test'}

  const isLeaking = fragile(myObject)

  myObject = null

  t.false(isLeaking())
  t.false(isLeaking())
  t.false(isLeaking())
  t.false(isLeaking())
  t.end()
})
