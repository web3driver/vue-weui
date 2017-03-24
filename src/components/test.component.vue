<template>
  <li>
    {{ title }}
    <button @click="remove">X</button>
  </li>
</template>
<script>
  export default {
    props: ['title'],
    created() {
      this.$http.get('https://cnodejs.org/api/v1/topics')
      .then((res) => {
        console.log(res);
      }, (res) => {
        console.log(res);
        console.log('error');
      });
    },
    methods: {
      remove() {
        this.$emit('remove');
      },
    },
  };

</script>
