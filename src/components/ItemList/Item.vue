<template>
    <li>
        <a :href="item.link">
            {{ item.name }}
        </a>
    </li>
</template>

<script>
export default {
    props: ["item"]
}
</script>

