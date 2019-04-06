
import { mount } from '@vue/test-utils'
import { titleMixin } from '../mixins'

describe('titleMixin', () => {
  test('set document.title using component title property', () => {
    const Component = {
      render() {},
      title: 'dummy title',
      mixins: [titleMixin]
    }
    mount(Component)
    expect(document.title).toBe('Vue HN | dummy title')
  })

  test('does not set document.title if title property does not exist', () => {
    document.title = 'some title'
    const Component = {
      render() {},
      mixins: [titleMixin]
    }
    mount(Component)
    expect(document.title).toBe('some title')
  })
})

