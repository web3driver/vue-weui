<template>
  <div class="page js_show gallery">
    <div class="page__hd">
      <h1 class="page__title">Gallery</h1>
      <p class="page__desc">画廊，可实现上传图片的展示或幻灯片播放</p>
    </div>
    <div class="weui-gallery" style="display: block">
      <span class="weui-gallery__img background"></span>
      <div class="weui-gallery__opr">
        <a href="javascript:" class="weui-gallery__del">
          <i class="weui-icon-delete weui-icon_gallery-delete"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'gallery',
    data() {
      return {
      };
    },
  };

</script>

<style scoped>
  .background {
    background-image: url(./images/pic_article.png);
  }
</style>