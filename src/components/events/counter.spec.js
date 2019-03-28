import { shallowMount } from '@vue/test-utils'
import Counter from './counter.vue'

describe('Counter', () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallowMount(Counter)
    })
    test('Initial value', () => {
        expect(wrapper.find("h3").text()).toBe("Clicked 0 times.")
    })

    it('Should increase counter when button clicked', () => {
        wrapper.find("button").trigger('click')
        expect(wrapper.find("h3").text()).toBe("Clicked 1 times.")
    })
})