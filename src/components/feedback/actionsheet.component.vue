<template>
  <div :style="displayAndroidStyle" :class="[
            type==='android' ? 'weui-skin_android' : ''
        ]">
    <div class="weui-mask" :style="displayIosStyle" @click.stop="displayMask"></div>
    <div class="weui-actionsheet" :class="[
                type==='ios'&&display ? 'weui-actionsheet_toggle':''
            ]">
      <div class="weui-actionsheet__menu">
        <div class="weui-actionsheet__cell" ref="item" v-for="(value,key) in items" @click="handleSelect({key,value})">{{value}}</div>
      </div>
      <div class="weui-actionsheet__action" v-if="type==='ios'">
        <div class="weui-actionsheet__cell" id="iosActionsheetCancel" @click="displayIos">取消</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      type: {
        type: String,
        required: true,
        validator(value) {
          return value === 'ios' || value === 'android';
        },
      },
      display: {
        type: Boolean,
        default: false,
      },
      items: [Object, Array],
    },
    computed: {
      displayIosStyle() {
        if (this.type !== 'ios' && this.type !== 'android') return '';
        return this.type === 'ios' && !this.display ? 'display: none' : '';
      },
      displayAndroidStyle() {
        if (this.type !== 'ios' && this.type !== 'android') return '';
        return this.type === 'android' && !this.display ? 'display: none' : '';
      },
    },
    methods: {
      displayMask() {
        if (this.type === 'android') {
          this.$emit('displayMask');
        }
        if (this.type === 'ios') {
          this.$emit('displayIos');
        }
      },
      displayIos() {
        this.$emit('displayIos');
      },
      handleSelect(value) {
        if (this.type === 'android') {
          this.$emit('displayMask');
        }
        if (this.type === 'ios') {
          this.$emit('displayIos');
        }
        this.$emit('handleSelect', value);
      },
    },
  };

</script>
