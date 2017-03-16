<template>
  <yv-page type="loadmore" title="Loadmore" name="加载更多">
    <yv-loadmore loading>正在加载</yv-loadmore>
    <yv-loadmore line>暂无数据</yv-loadmore>
    <yv-loadmore line dot></yv-loadmore>
  </yv-page>
</template>

<script>
  export default {
    name: 'loadmore',
    data() {
      return {};
    },
  };

</script>
