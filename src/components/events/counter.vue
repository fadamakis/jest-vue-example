<template>
    <div>
        <h3>Clicked {{counter}} times. </h3>
        <button @click="increase">+1</button>
    </div>
</template>

<script>

export default {
    data () {
        return {
            counter: 0
        }
    },
    methods: {
        increase() {
            this.counter++;
        }
    }
}
</script>