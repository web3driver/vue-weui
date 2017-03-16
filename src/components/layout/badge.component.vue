<template>
  <div class="weui-cell">
    <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
      <img :src="imgsrc" style="width: 50px;display: block" />
      <span class="weui-badge" style="position: absolute;top: -.4em;right: -.4em;">{{badgeText}}</span>
    </div>
    <div class="weui-cell__bd">
      <p>
        <slot></slot>
      </p>
      <p style="font-size: 13px;color: #888888;">{{msg}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      msg: String,
      imgsrc: String,
      badgeText: [String, Number],
    },
  };

</script>
