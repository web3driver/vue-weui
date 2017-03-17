<template>
  <yv-page type="progress" title="Progress" name="进度条">
    <yv-progress :val="value1|toNumber" :cancel="cancel"></yv-progress>
    <br>
    <yv-progress :val="value2|toNumber" :cancel="cancel"></yv-progress>
    <br>
    <yv-progress :val="value3|toNumber" :cancel="cancel"></yv-progress>
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
    methods: {
      upload() {
        const vm = this;
        function animate(time) {
          requestAnimationFrame(animate);
          tween.update(time);
        }
        new tween.Tween({ tweeningNumber: 0 })
          .easing(tween.Easing.Quadratic.Out)
          .to({ tweeningNumber: 100 }, 1000)
          .onUpdate(function callback() {
            vm.value1 = this.tweeningNumber.toFixed(0);
            vm.value2 = this.tweeningNumber.toFixed(0);
            vm.value3 = this.tweeningNumber.toFixed(0);
          })
          .start();
        animate();
      },
    },
    filters: {
      toNumber(val) {
        return parseInt(val, 10);
      },
    },
  };

</script>
