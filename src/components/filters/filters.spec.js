import { uppercase } from './filters/filters.js'

describe('uppercase', () => {
  test('Converts string to uppercase', () => {
    expect(uppercase('text')).toBe('Text')
  })

})