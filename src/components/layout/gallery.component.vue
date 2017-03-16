<template>
  <div class="weui-gallery" style="display: block">
    <span class="weui-gallery__img"
        :style="`background-image: url(${imgsrc})`"
    ></span>
    <div class="weui-gallery__opr">
      <a href="javascript:" class="weui-gallery__del" @click.prevent="$router.go(-1)">
        <i class="weui-icon-delete weui-icon_gallery-delete"></i>
      </a>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      imgsrc: String,
    },
  };

</script>
