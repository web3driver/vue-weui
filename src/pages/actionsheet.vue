<template>
  <yv-page type="actionsheet" title="ActionSheet" name="弹出式菜单">
    <yv-button type="default" @click="showIos">iOS ActionSheet</yv-button>
    <yv-button type="default" @click="showAndroid">Android ActionSheet</yv-button>
    <yv-actionsheet slot="mask" type="android" :items="items" :display="isShowAndroid" @displayMask="displayAndroid" @handleSelect="handleSelect"></yv-actionsheet>
    <yv-actionsheet slot="mask" type="ios" :items="items" :display="isShowIos" @displayIos="displayIos" @handleSelect="handleSelect"></yv-actionsheet>
  </yv-page>
</template>

<script>
  export default {
    name: 'actionsheet',
    data() {
      return {
        isShowIos: false,
        isShowAndroid: false,
        items: ['示例菜单1', '示例菜单2', '示例菜单3', '示例菜单4'],
      };
    },
    methods: {
      showIos() {
        this.isShowIos = true;
      },
      displayIos() {
        this.isShowIos = false;
      },
      showAndroid() {
        this.isShowAndroid = true;
      },
      displayAndroid() {
        this.isShowAndroid = false;
      },
      handleSelect(value) {
        alert(JSON.stringify(value));
      },
    },
  };

</script>
