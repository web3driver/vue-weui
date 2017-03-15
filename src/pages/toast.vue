<template>
  <yv-page type="toast" title="Toast" name="弹出式提示">
    <yv-button @click="showSuccess">成功提示</yv-button>
    <yv-button @click="showLoading">加载中提示</yv-button>

    <yv-toast slot="mask" type="success" :display="show1"></yv-toast>
    <yv-toast slot="mask" type="loading" :display="show2"></yv-toast>
  </yv-page>
</template>

<script>
  export default {
    name: 'toast',
    data() {
      return {
        show1: false,
        show2: false,
        showTime: 1500,
      };
    },
    methods: {
      showSuccess() {
        this.show1 = true;
        setTimeout(() => {
          this.show1 = false;
        }, this.showTime);
      },
      showLoading() {
        this.show2 = true;
        setTimeout(() => {
          this.show2 = false;
        }, this.showTime);
      },
    },
  };

</script>
