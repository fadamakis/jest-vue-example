import { mount } from '@vue/test-utils'
import ItemList from './ItemList.vue'
import Item from './Item.vue'

describe('ItemList.vue', () => {
  test('renders an Item for each item in window.items', () => {
    const wrapper = mount(ItemList);

    expect(wrapper.find(Item).props().item.name).toBe('Item-1')

    expect(wrapper.findAll(Item)).toHaveLength(3)

    wrapper.findAll(Item).wrappers.forEach((wrapper, i) => {
        expect(wrapper.props().item.name).toBe(`Item-${i+1}`)
    })
  })
})