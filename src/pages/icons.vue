<template>
  <yv-page type="icons" title="Icons" name="图标">
    <div class="icon-box">
      <yv-icons type="success"></yv-icons>
      <div class="icon-box__ctn">
        <h3 class="icon-box__title">成功</h3>
        <p class="icon-box__desc">用于表示操作顺利达成</p>
      </div>
    </div>
    <div class="icon-box">
      <yv-icons type="info"></yv-icons>
      <div class="icon-box__ctn">
        <h3 class="icon-box__title">提示</h3>
        <p class="icon-box__desc">用于表示信息提示；也常用于缺乏条件的操作拦截，提示用户所需信息</p>
      </div>
    </div>
    <div class="icon-box">
      <yv-icons type="warn" isPrimary></yv-icons>
      <div class="icon-box__ctn">
        <h3 class="icon-box__title">普通警告</h3>
        <p class="icon-box__desc">用于表示操作后将引起一定后果的情况</p>
      </div>
    </div>
    <div class="icon-box">
      <yv-icons type="warn"></yv-icons>
      <div class="icon-box__ctn">
        <h3 class="icon-box__title">强烈警告</h3>
        <p class="icon-box__desc">用于表示操作后将引起严重的不可挽回的后果的情况</p>
      </div>
    </div>
    <div class="icon-box">
      <yv-icons type="waiting"></yv-icons>
      <div class="icon-box__ctn">
        <h3 class="icon-box__title">等待</h3>
        <p class="icon-box__desc">用于表示等待</p>
      </div>
    </div>
    <div class="icon_sp_area">
      <i class="weui-icon-success"></i>
      <i class="weui-icon-success-no-circle"></i>
      <i class="weui-icon-circle"></i>
      <i class="weui-icon-warn"></i>
      <i class="weui-icon-download"></i>
      <i class="weui-icon-info-circle"></i>
      <i class="weui-icon-cancel"></i>
      <i class="weui-icon-search"></i>
    </div>
  </yv-page>
</template>

<script>
  export default {
    name: 'icons',
    data() {
      return {};
    },
  };

</script>

<style scoped>


</style>
