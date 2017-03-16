<template>
  <div class="weui-progress">
    <div class="weui-progress__bar">
      <div class="weui-progress__inner-bar js_progress" :style="`width: ${value}%;`"></div>
    </div>
    <a href="javascript:;" class="weui-progress__opr" @click.prevent="cancel">
      <i class="weui-icon-cancel"></i>
    </a>
  </div>
</template>
<script>
  export default {
    props: {
      value: {
        type: Number,
        default: 0,
      },
    },
    methods: {
      cancel() {
        this.$emit('cancel');
      },
    },
  };

</script>
