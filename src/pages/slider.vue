<template>
  <yv-page type="slider" title="Slider" name="滑块">
    <div class="weui-slider">
      <div class="weui-slider__inner">
        <div style="width: 0;" class="weui-slider__track"></div>
        <div style="left: 0;" class="weui-slider__handler"></div>
      </div>
    </div>
    <br>
    <div class="weui-slider-box">
      <div class="weui-slider">
        <div id="sliderInner" class="weui-slider__inner">
          <div id="sliderTrack" style="width: 50%;" class="weui-slider__track"></div>
          <div id="sliderHandler" style="left: 50%;" class="weui-slider__handler"></div>
        </div>
      </div>
      <div id="sliderValue" class="weui-slider-box__value">50</div>
    </div>
    <yv-slider></yv-slider>
  </yv-page>
</template>

<script>
  export default {
    name: 'slider',
    data() {
      return {};
    },
  };

</script>

<style scoped>


</style>
