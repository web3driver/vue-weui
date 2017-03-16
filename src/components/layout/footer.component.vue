<template>
  <div class="weui-footer" :class="bottom ? 'weui-footer_fixed-bottom' : ''">
    <p class="weui-footer__links">
      <a v-for="link in links" :href="link.href" class="weui-footer__link">{{link.content}}</a>
    </p>
    <p class="weui-footer__text">
      <slot></slot>
    </p>
  </div>
</template>
<script>
  export default {
    props: {
      bottom: Boolean,
      links: Array,
    },
  };

</script>
