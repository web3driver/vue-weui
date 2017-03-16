<template>
  <div class="weui-flex">
    <div v-for="(item,key) in flex" class="weui-flex__item" :style="`flex:${item}`">
      <slot :name="key+1"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      flex: {
        type: Array,
        required: true,
        validator(value) {
          return value.every(v => typeof v === 'number');
        },
      },
    },
  };

</script>
