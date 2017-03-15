<template>
  <transition name="fade">
    <div v-show="display">
      <div class="weui-mask_transparent"></div>
      <div class="weui-toast">
        <i class="weui-icon_toast" :class="iconType"></i>
        <p class="weui-toast__content">{{textContent}}</p>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    props: {
      type: {
        type: String,
        required: true,
        validate(value) {
          return value === 'success' || value === 'loading';
        },
      },
      content: String,
      display: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      iconType() {
        if (this.type === 'success') {
          return 'weui-icon-success-no-circle';
        }
        if (this.type === 'loading') {
          return 'weui-loading';
        }
        return '';
      },
      textContent() {
        if (this.content) return this.content;
        if (this.type === 'success') return '已完成';
        if (this.type === 'loading') return '数据加载中';
        return '';
      },
    },
  };

</script>

<style scoped>
  .fade-leave-active {
    transition: opacity .5s
  }
  
  .fade-leave-active {
    opacity: 0
  }

</style>
