<template>
  <i :class="[iconType,msgType]"></i>
</template>
<script>
  export default {
    props: {
      type: {
        type: String,
        validator(value) {
          return ['success', 'info', 'warn', 'waiting'].some(v => v === value);
        },
      },
      isPrimary: Boolean,
    },
    computed: {
      iconType() {
        if (typeof this.type !== 'string') return '';
        const test = ['success', 'info', 'warn', 'waiting'].some(v => v === this.type);
        if (!test) return '';
        return `weui-icon-${this.type}`;
      },
      msgType() {
        if (this.isPrimary) return 'weui-icon_msg-primary';
        return 'weui-icon_msg';
      },
    },
  };

</script>
