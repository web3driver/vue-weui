<template>
  <yv-page type="dialog" title="Dialog" name="对话框">
    <yv-button type="default" @click="displayDialog1">iOS Dialog样式一</yv-button>
    <yv-button type="default" @click="displayDialog2">iOS Dialog样式二</yv-button>
    <yv-button type="default" @click="displayDialog3">Android Dialog样式一</yv-button>
    <yv-button type="default" @click="displayDialog4">Android Dialog样式二</yv-button>

    <div slot="mask">
      <yv-dialog type="ios" title="弹窗标题" confirm="主操作" cancel="辅助操作" :display="display1" @doConfirm="confirm1" @doCancel="cancel1">
        弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内
      </yv-dialog>
      <yv-dialog type="ios" confirm="主操作" :display="display2" @doConfirm="confirm2">
        弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内
      </yv-dialog>
      <yv-dialog type="android" alert title="弹窗标题" confirm="主操作" cancel="辅助操作" :display="display3" @doConfirm="confirm3" @doCancel="cancel3">
        弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内
      </yv-dialog>
      <yv-dialog type="android" toast confirm="主操作" :display="display4" @doConfirm="confirm4">
        弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内
      </yv-dialog>
    </div>
  </yv-page>
</template>

<script>
  export default {
    name: 'dialog',
    data() {
      return {
        display1: false,
        display2: false,
        display3: false,
        display4: false
      };
    },
    methods: {
      displayDialog1() {
        this.display1 = true
      },
      confirm1(){
        this.display1 = false
        alert('confirm1')
      },
      cancel1(){
        this.display1 = false
        alert('cancel1')
      },
      displayDialog2() {
        this.display2 = true
      },
      confirm2(){
        this.display2 = false
        alert('confirm2')
      },
      displayDialog3() {
        this.display3 = true
      },
      confirm3(){
        this.display3 = false
        alert('confirm3')
      },
      cancel3(){
        this.display3 = false
        alert('cancel3')
      },
      displayDialog4() {
        this.display4 = true
      },
      confirm4(){
        this.display4 = false
        alert('confirm4')
      },
    }
  };

</script>

<style scoped>


</style>
