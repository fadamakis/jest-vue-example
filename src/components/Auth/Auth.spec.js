import Auth from "./Auth.vue"
import { mount } from "@vue/test-utils"

describe("Auth.vue", () => {
    test('tests default state', () => {
        const wrapper = mount(Auth, {
            propsData: {
                auth: false
            }
        });
        expect(wrapper.text()).toBe("Hello anonymous")
        // expect(wrapper.element).toMatchSnapshot()
    })
    test('tests auth state', () => {
        const wrapper = mount(Auth, {
            propsData: {
                auth: true
            }
        });
        expect(wrapper.text()).toBe("Hello user")
    })
})