<template>
  <yv-page type="badge" title="Badge" name="徽章">
    <yv-list title="新消息提示跟摘要信息后，统一在列表右侧" :lists="lists1"></yv-list>
    <yv-list title="未读数红点跟在主题信息后，统一在列表左侧" :lists="lists2"></yv-list>
    <yv-list>
      <yv-badge msg="摘要信息" :imgsrc="img" :badgeText="num">联系人名称</yv-badge>
    </yv-list>
  </yv-page>
</template>

<script>
  import image from './images/pic_160.png';

  export default {
    name: 'badge',
    data() {
      return {
        img: image,
        lists1: [
          {
            content: '单行列表',
            description: '详细信息',
            href: 'http://www.baidu.com',
            badgeright: true,
          },
        ],
        lists2: [
          {
            content: '单行列表',
            href: 'http://www.baidu.com',
            badgeleft: true,
            badgeText: 8,
          },
          {
            content: '单行列表',
            description: '详细信息',
            href: 'http://www.baidu.com',
            badgeleft: true,
            badgeText: 8,
          },
          {
            content: '单行列表',
            href: 'http://www.baidu.com',
            badgeleft: true,
            badgeText: 'New',
          },
        ],
        num: 8,
      };
    },
  };

</script>
