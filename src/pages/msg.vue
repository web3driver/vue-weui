<template>
  <div class="page js_show msg">
    <div class="page__hd">
      <h1 class="page__title">Msg</h1>
      <p class="page__desc">提示页</p>
    </div>
    <div class="page__bd page__bd_spacing">
      <router-link to="msgsuccess" class="weui-btn weui-btn_default">成功提示页</router-link>
      <router-link to="msgwarn" class="weui-btn weui-btn_default">失败提示页</router-link>
    </div>
    <div class="page__ft">
      <a href="javascript:home()"><img src="./images/icon_footer_link.png" /></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'msg',
    data() {
      return {
      };
    },
  };

</script>

<style scoped>
</style>