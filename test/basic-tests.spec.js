/// <reference types="jest" />

import { cleanHTML } from '../dist/html-cleanser.umd'

describe('Basic usage', () => {
  it('returns empty string if no input is provided', () => {
    const actual = [cleanHTML(undefined), cleanHTML('')]
    expect(actual).toEqual(['', ''])
  })
  it('returns allowed default tags', () => {
    const actual = cleanHTML('<i>asdf</i><em>asdf</em>')
    expect(actual).toBe('<i>asdf</i><em>asdf</em>')
  })
  it('returns allowed passed tags', () => {
    const actual = cleanHTML('<i>asdf</i><p>asdf</p>', '<i><p>')
    expect(actual).toBe('<i>asdf</i><p>asdf</p>')
  })
  it('throws error on invalid tags', () => {
    expect(() => cleanHTML('<i>asdf</i><p>asdf</p>', '<script>')).toThrow()
  })
  it('no HTML allowed', () => {
    const actual = cleanHTML('<i>asdf</i><p>asdf</p>', '')
    expect(actual).toBe('asdfasdf')
  })
  it('custom element allowed', () => {
    const actual = cleanHTML('<foo>asdf</foo><p>asdf</p>', '<p><foo>')
    expect(actual).toBe('<foo>asdf</foo><p>asdf</p>')
  })
  it('basic XXS', () => {
    const actual = cleanHTML('<script>alert(123)</script>')
    expect(actual).toBe('alert(123)')
  })
})
