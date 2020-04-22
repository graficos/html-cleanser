/// <reference types="jest" />

import { cleanHTML } from '../dist/html-cleanser.umd'

describe('Big list of naughty strings', () => {
  const list = require('big-list-of-naughty-strings/blns.json')

  it.each(list)('given "%s" it returns expected output', (string) => {
    const actual = cleanHTML(string)
    expect(actual).toMatchSnapshot()
  })
  it('spaced tag', () => {
    const source = '< / script >< script >alert(123)< / script >'
    const actual = cleanHTML(source)
    const expected = 'alert(123)'
    expect(actual).toBe(expected)
  })
})
