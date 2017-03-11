<template>
  <yv-page type="msg" title="Msg" name="失败提示页">
    <router-link to="msgsuccess" class="weui-btn weui-btn_default">成功提示页</router-link>
    <router-link to="msgwarn" class="weui-btn weui-btn_default">失败提示页</router-link>
  </yv-page>
</template>

<script>
  export default {
    name: 'msg',
    data() {
      return {};
    },
  };

</script>
