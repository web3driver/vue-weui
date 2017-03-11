<template>
  <div class="js_dialog" :style="displayDialog">
    <div class="weui-mask"></div>
    <div class="weui-dialog"
      :class="[
        type==='android' ? 'weui-skin_android' : ''
      ]"
    >
      <div class="weui-dialog__hd" v-if="title"><strong class="weui-dialog__title">{{title}}</strong></div>
      <div class="weui-dialog__bd">
        <slot></slot>
      </div>
      <div class="weui-dialog__ft">
        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" v-if="title" @click="doCancel">{{cancel}}</a>
        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="doConfirm">{{confirm}}</a>
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
        validator: function (value) {
          return value === 'ios' || value === 'android'
        }
      },
      display: {
        type: Boolean,
        default: false
      },
      title: String,
      content: String,
      confirm: {
        type: String,
        default: '确认'
      },
      cancel: {
        type: String,
        default: '取消'
      }
    },
    computed: {
      displayDialog(){
        if (this.type!=='ios'&&this.type!=='android') return ''
        return !this.display ? 'display:none':''
      }
    },
    methods: {
      doConfirm(){
        this.$emit('doConfirm');
      },
      doCancel(){
        this.$emit('doCancel');
      }
    }
  }

</script>
