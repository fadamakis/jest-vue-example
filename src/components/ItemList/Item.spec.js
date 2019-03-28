import Item from "./Item.vue"
import { mount } from "@vue/test-utils"

describe("Item.vue", () => {
    test('tests item props', () => {
        const item = {
            name: "Item Name",
            link: "Item Link"
        }
        const wrapper = mount(Item, {
            propsData: {
                item
            }
        });
    
        // contain
        expect(wrapper.text()).toContain("Item Name")
        // find
        expect(wrapper.find('a').text()).toBe("Item Name")
        expect(wrapper.find('a').attributes().href).toBe("Item Link")
    })
})