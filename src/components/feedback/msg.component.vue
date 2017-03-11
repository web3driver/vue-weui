<template>
  <div class="weui-msg">
    <div class="weui-msg__icon-area">
      <i class="weui-icon_msg" :class="[iconType]"></i>
    </div>
    <div class="weui-msg__text-area">
      <h2 class="weui-msg__title">{{msgTitle}}</h2>
      <p class="weui-msg__desc">
        <slot></slot>
        <a href="javascript:void(0);">文字链接</a>
      </p>
    </div>
    <div class="weui-msg__opr-area">
      <p class="weui-btn-area">
        <a href="javascript:history.back();" class="weui-btn weui-btn_primary">推荐操作</a>
        <a href="javascript:history.back();" class="weui-btn weui-btn_default">辅助操作</a>
      </p>
    </div>
    <div class="weui-msg__extra-area">
      <div class="weui-footer">
        <p class="weui-footer__links">
          <a href="javascript:void(0);" class="weui-footer__link">底部链接文本</a>
        </p>
        <p class="weui-footer__text">Copyright &copy; 2008-2016 weui.io</p>
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
          return value === 'success' || value === 'warn'
        }
      }
    },
    computed: {
      iconType() {
        return this.type === 'success' || this.type === 'warn' ? 'weui-icon-' + this.type : ''
      },
      msgTitle() {
        if (this.type === 'success') {
          return '操作成功'
        }
        if (this.type === 'warn') {
          return '操作失败'
        }
      }
    }
  }

</script>
