/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils'

test('renders id param', () => {
  const wrapper = shallowMount(TestComponent, {
    mocks: {
      $route: {
        params: {
          id: 123
        }
      }
    }
  })
  expect(wrapper.text()).toContain('123')
})

test('calls $router.replace when the page parameter is greater than the max page count', async () => {
  expect.assertions(1)

  const mocks = {
    $route: {
      params: {
        page: '1000'
      }
    },
    $router: {
      replace: jest.fn()
    }
  }

  shallowMount(TestComponent, {
    mocks
  })

  expect(mocks.$router.replace).toHaveBeenCalledWith('/top/1')
})
