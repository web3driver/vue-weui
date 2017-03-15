<template>
  <li>
    {{ title }}
    <button @click="remove">X</button>
  </li>
</template>
<script>
  export default {
    props: ['title'],
    methods: {
      remove() {
        this.$emit('remove');
      },
    },
  };

</script>
