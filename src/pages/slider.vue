<template>
  <yv-page type="slider" title="Slider" name="滑块">
    <yv-slider v-model="value1"></yv-slider>
    <yv-slider v-model="value2"></yv-slider>
  </yv-page>
</template>

<script>
  export default {
    name: 'slider',
    data() {
      return {
        value1: 0,
        value2: 50
      };
    },
  };

</script>
