<template>
  <div class="page button js_show">
    <div class="page__hd">
      <h1 class="page__title">Button</h1>
      <p class="page__desc">按钮</p>
    </div>
    <div class="page__bd page__bd_spacing">
      <yv-button type="primary">页面主操作 Normal</yv-button>
      <yv-button type="primary" loading>页面主操作 Loading</yv-button>
      <yv-button type="primary" disabled>页面主操作 Disabled</yv-button>
      <yv-button type="default">页面次要操作 Normal</yv-button>
      <yv-button type="default" loading>页面次要操作 Loading</yv-button>
      <yv-button type="default" disabled>页面次要操作 Disabled</yv-button>
      <yv-button type="warn">警告类操作 Normal</yv-button>
      <yv-button type="warn" loading>警告类操作 Loading</yv-button>
      <yv-button type="warn" disabled>警告类操作 Disabled</yv-button>

      <div class="button-sp-area">
        <yv-button type="default" plain>按钮</yv-button>
        <yv-button type="default" plain disabled>按钮</yv-button>
        <yv-button type="primary" plain>按钮</yv-button>
        <yv-button type="primary" plain disabled>按钮</yv-button>
        <yv-button type="primary" mini>按钮</yv-button>
        <yv-button type="default" mini>按钮</yv-button>
        <yv-button type="warn" mini>按钮</yv-button>
      </div>
    </div>
    <div class="page__ft">
      <a href="javascript:"><img src="./images/icon_footer_link.png" /></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'button',
    data() {
      return {
      };
    },
  };

</script>

<style scoped>
</style>