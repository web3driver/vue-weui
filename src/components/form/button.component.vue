<template>
  <a href="javascript:;" class="weui-btn"
    @click="handleClick"
    :class="[
        type&&!plain ? 'weui-btn_' + type : '',
        type&&plain ? 'weui-btn_plain-' + type : '',
        disabled&&!plain ? 'weui-btn_disabled' : '',
        disabled&&plain ? 'weui-btn_plain-disabled' : '',
        {
            'weui-btn_loading': loading,
            'weui-btn_mini': mini
        }
    ]"
    >
    <i class="weui-loading" v-if="loading"></i>
    <slot></slot>
  </a>
</template>
<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'default'
      },
      loading: Boolean,
      disabled: Boolean,
      plain: Boolean,
      mini: Boolean
    },

    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  };
</script>