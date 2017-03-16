<template>
  <yv-page type="progress" title="Progress" name="进度条">
    <yv-progress :value="value1" :cancel="cancel"></yv-progress>
    <br>
    <yv-progress :value="value2" :cancel="cancel"></yv-progress>
    <br>
    <yv-progress :value="value3" :cancel="cancel"></yv-progress>
    <div class="weui-btn-area">
      <yv-button type="primary" @click="upload">上传</yv-button>
    </div>
  </yv-page>
</template>

<script>
  import tween from 'tween.js';

  export default {
    name: 'progress',
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: 80,
      };
    },
    watch: {
      value1(newVal, oldVal) {
        tween.Tween({ tweeningNumber: oldVal })
          .easing(tween.TWEEN.Easing.Quadratic.Out)
          .to({ tweeningNumber: newVal }, 500)
          .start();
      },
    },
    methods: {
      upload() {
        this.value1 = 100;
      },
    },
  };

</script>
