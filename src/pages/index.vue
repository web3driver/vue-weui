<template>
  <div class="page home js_show">
    <div class="page__hd">
      <h1 class="page__title">
        <img src="./images/logo.png" alt="WeUI" height="21px" />
      </h1>
      <p class="page__desc">WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。</p>
    </div>
    <div class="page__bd page__bd_spacing">
      <ul>
        <li :class="{js_show:isActive1}">
          <div class="weui-flex js_category" @click="isActive1=!isActive1">
            <p class="weui-flex__item">表单</p>
            <img src="./images/icon_nav_form.png" alt="">
          </div>
          <div class="page__category js_categoryInner">
            <div class="weui-cells page__category-content">
              <a class="weui-cell weui-cell_access js_item" data-id="button" href="javascript:;">
                <div class="weui-cell__bd">
                  <p>Button</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="input" href="javascript:;">
                <div class="weui-cell__bd">
                  <p>Input</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="list" href="javascript:;">
                <div class="weui-cell__bd">
                  <p>List</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="slider" href="javascript:;">
                <div class="weui-cell__bd">
                  <p>Slider</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="uploader" href="javascript:;">
                <div class="weui-cell__bd">
                  <p>Uploader</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
            </div>
          </div>
        </li>
        <li :class="{js_show:isActive2}">
          <div class="weui-flex js_category" @click="isActive2=!isActive2">
            <p class="weui-flex__item">基础组件</p>
            <img src="./images/icon_nav_layout.png" alt="">
          </div>
          <div class="page__category js_categoryInner">
            <div class="weui-cells page__category-content">
              <a class="weui-cell weui-cell_access js_item" data-id="article" href="javascript:;">
                <div class="weui-cell__bd">
                  <p>Article</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="badge" href="javascript:;">
                <div class="weui-cell__bd">
                  <p>Badge</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="flex" href="javascript:;">
                <div class="weui-cell__bd">
                  <p>Flex</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="footer" href="javascript:;">
                <div class="weui-cell__bd">
                  <p>Footer</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="gallery" href="javascript:;">
                <div class="weui-cell__bd">
                  <p>Gallery</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="grid" href="javascript:;">
                <div class="weui-cell__bd">
                  <p>Grid</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="icons" href="javascript:;">
                <div class="weui-cell__bd">
                  <p>Icons</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="loadmore" href="javascript:;">
                <div class="weui-cell__bd">
                  <p>Loadmore</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="panel" href="javascript:;">
                <div class="weui-cell__bd">
                  <p>Panel</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="preview" href="javascript:;">
                <div class="weui-cell__bd">
                  <p>Preview</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="progress" href="javascript:;">
                <div class="weui-cell__bd">
                  <p>Progress</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
            </div>
          </div>
        </li>
        <li :class="{js_show:isActive3}">
          <div class="weui-flex js_category" @click="isActive3=!isActive3">
            <p class="weui-flex__item">操作反馈</p>
            <img src="./images/icon_nav_feedback.png" alt="">
          </div>
          <div class="page__category js_categoryInner">
            <div class="weui-cells page__category-content">
              <a class="weui-cell weui-cell_access js_item" data-id="actionsheet" href="javascript:;">
                <div class="weui-cell__bd">
                  <p>Actionsheet</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="dialog" href="javascript:;">
                <div class="weui-cell__bd">
                  <p>Dialog</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="msg" href="javascript:;">
                <div class="weui-cell__bd">
                  <p>Msg</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="picker" href="javascript:;">
                <div class="weui-cell__bd">
                  <p>Picker</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="toast" href="javascript:;">
                <div class="weui-cell__bd">
                  <p>Toast</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
            </div>
          </div>
        </li>
        <li :class="{js_show:isActive4}">
          <div class="weui-flex js_category" @click="isActive4=!isActive4">
            <p class="weui-flex__item">导航相关</p>
            <img src="./images/icon_nav_nav.png" alt="">
          </div>
          <div class="page__category js_categoryInner">
            <div class="weui-cells page__category-content">
              <a class="weui-cell weui-cell_access js_item" data-id="navbar" href="javascript:;">
                <div class="weui-cell__bd">
                  <p>Navbar</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="tabbar" href="javascript:;">
                <div class="weui-cell__bd">
                  <p>Tabbar</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
            </div>
          </div>
        </li>
        <li :class="{js_show:isActive5}">
          <div class="weui-flex js_category" @click="isActive5=!isActive5">
            <p class="weui-flex__item">搜索相关</p>
            <img src="./images/icon_nav_search.png" alt="">
          </div>
          <div class="page__category js_categoryInner">
            <div class="weui-cells page__category-content">
              <a class="weui-cell weui-cell_access js_item" data-id="searchbar" href="javascript:;">
                <div class="weui-cell__bd">
                  <p>Search Bar</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
            </div>
          </div>
        </li>
        <li>
          <div class="weui-flex js_item" data-id="layers">
            <p class="weui-flex__item">层级规范</p>
            <img src="./images/icon_nav_z-index.png" alt="">
          </div>
        </li>
      </ul>
    </div>
    <div class="page__ft">
      <a href="javascript:home()"><img src="./images/icon_footer.png" /></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        isActive1: false,
        isActive2: false,
        isActive3: false,
        isActive4: false,
        isActive5: false,
      };
    },
    methods: {
    },
  };

</script>

<style scoped>
  body,
  html {
    height: 100%;
    -webkit-tap-highlight-color: transparent
  }




  body {
    font-family: -apple-system-font, Helvetica Neue, Helvetica, sans-serif
  }




  ul {
    list-style: none
  }




  .page,
  body {
    background-color: #f8f8f8
  }




  .link {
    color: #1aad19
  }




  .container {
    overflow: hidden
  }




  .container,
  .page {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0
  }




  .page {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    opacity: 0;
    z-index: 1
  }




  .page.js_show {
    opacity: 1
  }




  .page__hd {
    padding: 40px
  }




  .page__bd_spacing {
    padding: 0 15px
  }




  .page__ft {
    padding-top: 40px;
    padding-bottom: 10px;
    text-align: center
  }




  .page__ft img {
    height: 19px
  }




  .page__ft.j_bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0
  }




  .page__title {
    text-align: left;
    font-size: 20px;
    font-weight: 400
  }




  .page__desc {
    margin-top: 5px;
    color: #888;
    text-align: left;
    font-size: 14px
  }




  .page.home .page__intro-icon {
    margin-top: -.2em;
    margin-left: 5px;
    width: 16px;
    height: 16px;
    vertical-align: middle
  }




  .page.home .page__title {
    font-size: 0;
    margin-bottom: 15px
  }




  .page.home .page__bd img {
    width: 30px;
    height: 30px
  }




  .page.home .page__bd li {
    margin: 10px 0;
    background-color: #fff;
    overflow: hidden;
    border-radius: 2px;
    cursor: pointer
  }




  .page.home .page__bd li.js_show .weui-flex {
    opacity: .4
  }




  .page.home .page__bd li.js_show .page__category {
    height: auto
  }




  .page.home .page__bd li.js_show .page__category-content {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0)
  }




  .page.home .page__bd li:first-child {
    margin-top: 0
  }




  .page.home .page__category {
    height: 0;
    overflow: hidden
  }




  .page.home .page__category-content {
    opacity: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition: .3s;
    transition: .3s
  }




  .page.home .weui-flex {
    padding: 20px;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-transition: .3s;
    transition: .3s
  }




  .page.home .weui-cells {
    margin-top: 0
  }




  .page.home .weui-cells:after,
  .page.home .weui-cells:before {
    display: none
  }




  .page.home .weui-cell {
    padding-left: 20px;
    padding-right: 20px
  }




  .page.home .weui-cell:before {
    left: 20px;
    right: 20px
  }




  .page.button .page__bd {
    padding: 0 15px
  }




  .page.button .button-sp-area {
    margin: 0 auto;
    padding: 15px 0;
    width: 60%
  }




  .page.cell .page__bd,
  .page.form .page__bd {
    padding-bottom: 30px
  }




  .page.actionsheet,
  .page.dialog {
    background-color: #fff
  }




  .page.dialog .page__bd {
    padding: 0 15px
  }




  .page.msg,
  .page.msg_success,
  .page.msg_warn,
  .page.toast {
    background-color: #fff
  }




  .page.panel .page__bd {
    padding-bottom: 20px
  }




  .page.article {
    background-color: #fff
  }




  .page.icons {
    text-align: center
  }




  .page.icons .page__bd {
    padding: 0 40px;
    text-align: left
  }




  .page.icons .icon-box {
    margin-bottom: 25px;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center
  }




  .page.icons .icon-box i {
    margin-right: 18px
  }




  .page.icons .icon-box__ctn {
    -webkit-flex-shrink: 100;
    flex-shrink: 100
  }




  .page.icons .icon-box__title {
    font-weight: 400
  }




  .page.icons .icon-box__desc {
    margin-top: 6px;
    font-size: 12px;
    color: #888
  }




  .page.icons .icon_sp_area {
    margin-top: 10px;
    text-align: left
  }




  .page.icons .icon_sp_area i:before {
    margin-bottom: 5px
  }




  .page.flex .placeholder {
    margin: 5px;
    padding: 0 10px;
    background-color: #ebebeb;
    height: 2.3em;
    line-height: 2.3em;
    text-align: center;
    color: #cfcfcf
  }




  .page.loadmore {
    background-color: #fff
  }




  .page.layers {
    overflow-x: hidden;
    -webkit-perspective: 1000px;
    perspective: 1000px
  }

  @media only screen and (max-width: 320px) {
    .page.layers .page__hd {
      padding-left: 20px;
      padding-right: 20px
    }
  }




  .page.layers .page__bd {
    position: relative
  }




  .page.layers .page__desc {
    min-height: 4.8em
  }




  .page.layers .layers__layer {
    position: absolute;
    left: 50%;
    width: 150px;
    height: 266px;
    margin-left: -75px;
    box-sizing: border-box;
    -webkit-transition: .5s;
    transition: .5s;
    background: url(images/layers/transparent.gif) no-repeat 50%;
    background-size: contain;
    font-size: 14px;
    color: #fff
  }




  .page.layers .layers__layer span {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    text-align: center;
    -webkit-transition: .5s;
    transition: .5s
  }




  .page.layers .layers__layer:last-child span {
    color: #aaa
  }




  .page.layers .layers__layer.j_hide {
    opacity: 0
  }




  .page.layers .layers__layer.j_pic span {
    color: transparent
  }

  @media only screen and (min-width: 375px) and (min-height:603px) {
    .page.layers .layers__layer {
      width: 180px;
      height: 320px;
      margin-left: -90px
    }
  }

  @media only screen and (min-width: 414px) and (min-height:640px) {
    .page.layers .layers__layer {
      width: 200px;
      height: 355px;
      margin-left: -100px
    }
  }




  .page.layers .layers__layer_popout {
    border: 1px solid hsla(0, 0%, 80%, .5);
    z-index: 4
  }




  .page.layers .layers__layer_popout.j_transform {
    -webkit-transform: translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(120px);
    transform: translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(120px)
  }

  @media only screen and (max-width: 320px) {
    .page.layers .layers__layer_popout.j_transform {
      -webkit-transform: translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(140px);
      transform: translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(140px)
    }
  }




  .page.layers .layers__layer_popout.j_pic {
    border-color: transparent;
    background-image: url(images/layers/popout.png)
  }




  .page.layers .layers__layer_mask {
    background-color: rgba(0, 0, 0, .5);
    z-index: 3
  }




  .page.layers .layers__layer_mask.j_transform {
    -webkit-transform: translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(40px);
    transform: translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(40px)
  }

  @media only screen and (max-width: 320px) {
    .page.layers .layers__layer_mask.j_transform {
      -webkit-transform: translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(80px);
      transform: translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(80px)
    }
  }




  .page.layers .layers__layer_navigation {
    background-color: rgba(40, 187, 102, .5);
    z-index: 2
  }




  .page.layers .layers__layer_navigation.j_transform {
    -webkit-transform: translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(-40px);
    transform: translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(-40px)
  }

  @media only screen and (max-width: 320px) {
    .page.layers .layers__layer_navigation.j_transform {
      -webkit-transform: translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(20px);
      transform: translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(20px)
    }
  }




  .page.layers .layers__layer_navigation.j_pic {
    background-color: transparent;
    background-image: url(images/layers/navigation.png)
  }




  .page.layers .layers__layer_content {
    background-color: #fff;
    z-index: 1
  }




  .page.layers .layers__layer_content.j_transform {
    -webkit-transform: translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(-120px);
    transform: translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(-120px)
  }

  @media only screen and (max-width: 320px) {
    .page.layers .layers__layer_content.j_transform {
      -webkit-transform: translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(-40px);
      transform: translateX(15px) rotateX(45deg) rotate(10deg) skew(-15deg) translateZ(-40px)
    }
  }




  .page.layers .layers__layer_content.j_pic {
    background-image: url(images/layers/content.png)
  }




  .page.searchbar .searchbar-result {
    display: none;
    margin-top: 0;
    font-size: 14px
  }




  .page.searchbar .searchbar-result .weui-cell__bd {
    padding: 2px 0 2px 20px;
    color: #666
  }




  .page.actionsheet,
  .page.picker {
    overflow: hidden
  }




  .page.picker {
    background-color: #fff
  }




  .page.gallery {
    overflow: hidden
  }

  @-webkit-keyframes a {
    0% {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      opacity: 0
    }
    to {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1
    }
  }

  @keyframes a {
    0% {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      opacity: 0
    }
    to {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1
    }
  }

  @-webkit-keyframes b {
    0% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1
    }
    to {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      opacity: 0
    }
  }

  @keyframes b {
    0% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1
    }
    to {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      opacity: 0
    }
  }




  .page.slideIn {
    -webkit-animation: a .2s forwards;
    animation: a .2s forwards
  }




  .page.slideOut {
    -webkit-animation: b .2s forwards;
    animation: b .2s forwards
  }
</style>