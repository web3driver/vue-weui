<template>
    <div>
        <h1>子组件</h1>
        <slot>ceshi</slot>
    </div>
</template>
<script>
    export default {
        props: ['title'],
    }

</script>