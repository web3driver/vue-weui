<template>
  <yv-page type="footer" title="Footer" name="页脚">
    <yv-footer>Copyright &copy; 2008-2016 weui.io</yv-footer>
    <br/>
    <br/>
    <yv-footer :links="link1">Copyright &copy; 2008-2016 weui.io</yv-footer>
    <br/>
    <br/>
    <yv-footer :links="link2">Copyright &copy; 2008-2016 weui.io</yv-footer>
    <yv-footer bottom :links="link3">Copyright &copy; 2008-2016 weui.io</yv-footer>
  </yv-page>
</template>

<script>
  export default {
    name: 'footer',
    data() {
      return {
        link1: [{
          href: 'http://www.baidu.com',
          content: '底部链接',
        }],
        link2: [
          {
            href: 'http://www.baidu.com',
            content: '底部链接',
          },
          {
            href: 'http://www.baidu.com',
            content: '底部链接',
          },
        ],
        link3: [{
          href: 'http://www.baidu.com',
          content: 'WeUi首页',
        }],
      };
    },
  };

</script>
