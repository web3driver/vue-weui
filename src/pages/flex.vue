<template>
  <yv-page type="flex" title="Flex" name="Flex布局">
    <yv-flex :flex="[1]">
      <div class="placeholder" slot="1">weui</div>
    </yv-flex>
    <yv-flex :flex="[1,1]">
      <div class="placeholder" slot="1">weui</div>
      <div class="placeholder" slot="2">weui</div>
    </yv-flex>
    <yv-flex :flex="[1,1,1]">
      <div class="placeholder" slot="1">weui</div>
      <div class="placeholder" slot="2">weui</div>
      <div class="placeholder" slot="3">weui</div>
    </yv-flex>
    <yv-flex :flex="[1,1,1,1]">
      <div class="placeholder" slot="1">weui</div>
      <div class="placeholder" slot="2">weui</div>
      <div class="placeholder" slot="3">weui</div>
      <div class="placeholder" slot="4">weui</div>
    </yv-flex>
    <yv-flex :flex="[1,8,1]">
      <div class="placeholder" slot="1">weui</div>
      <div class="placeholder" slot="2">weui</div>
      <div class="placeholder" slot="3">weui</div>
    </yv-flex>
  </yv-page>
</template>

<script>
  export default {
    name: 'flex',
    data() {
      return {};
    },
  };

</script>
