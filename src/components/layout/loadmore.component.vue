<template>
  <div class="weui-loadmore" :class="[dot ? 'weui-loadmore_dot' : '',
    line ? 'weui-loadmore_line' : '']">
    <i v-if="loading" class="weui-loading"></i>
    <span class="weui-loadmore__tips">
        <slot></slot>
    </span>
  </div>
</template>
<script>
  export default {
    props: {
      dot: Boolean,
      loading: Boolean,
      line: Boolean,
    },
  };

</script>
