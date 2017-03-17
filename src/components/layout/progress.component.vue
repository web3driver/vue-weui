<template>
  <div class="weui-progress">
    <div class="weui-progress__bar">
      <div class="weui-progress__inner-bar js_progress" :style="`width: ${val}%;`"></div>
    </div>
    <a href="javascript:;" class="weui-progress__opr" @click.prevent="cancel">
      <i class="weui-icon-cancel"></i>
    </a>
  </div>
</template>
<script>
  export default {
    props: {
      val: {
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
