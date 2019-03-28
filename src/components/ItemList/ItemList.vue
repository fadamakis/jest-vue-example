<template>
    <ul>
        <Item v-for="(item, index) in items" :item="item" :key="index" />
    </ul>
</template>

<script>
import Item from "./Item.vue";

export default {
    data() {
        return {
            items: [{
                name: 'Item-1',
                link: 'link1'
            },{
                name: 'Item-2',
                link: 'link2'
            },{
                name: 'Item-3',
                link: 'link3'
            }]
        }
    },
    components: {
        Item
    }
}
</script>
