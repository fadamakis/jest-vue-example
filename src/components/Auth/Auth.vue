<template>
    <div>
        Hello {{ auth ? 'user' : 'anonymous'}}
    </div>
</template>


<script>
export default {
    props: ['auth']
}
</script>

