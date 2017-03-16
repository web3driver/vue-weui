<template>
  <yv-page type="gallery" title="Gallery">
    <yv-gallery :imgsrc="img"></yv-gallery>
  </yv-page>
</template>

<script>
  import image from './images/pic_article.png';

  export default {
    name: 'gallery',
    data() {
      return {
        img: image,
      };
    },
  };

</script>
