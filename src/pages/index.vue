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
                <div class="weui-cell__bd" @click="$router.push('button')">
                  <p>Button</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="input" href="javascript:;">
                <div class="weui-cell__bd" @click="$router.push('input')">
                  <p>Input</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="list" href="javascript:;">
                <div class="weui-cell__bd" @click="$router.push('list')">
                  <p>List</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="slider" href="javascript:;">
                <div class="weui-cell__bd" @click="$router.push('slider')">
                  <p>Slider</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="uploader" href="javascript:;">
                <div class="weui-cell__bd" @click="$router.push('uploader')">
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
                <div class="weui-cell__bd" @click="$router.push('article')">
                  <p>Article</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="badge" href="javascript:;">
                <div class="weui-cell__bd" @click="$router.push('badge')">
                  <p>Badge</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="flex" href="javascript:;">
                <div class="weui-cell__bd" @click="$router.push('flex')">
                  <p>Flex</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="footer" href="javascript:;">
                <div class="weui-cell__bd" @click="$router.push('footer')">
                  <p>Footer</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="gallery" href="javascript:;">
                <div class="weui-cell__bd" @click="$router.push('gallery')">
                  <p>Gallery</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="grid" href="javascript:;">
                <div class="weui-cell__bd" @click="$router.push('grid')">
                  <p>Grid</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="icons" href="javascript:;">
                <div class="weui-cell__bd" @click="$router.push('icons')">
                  <p>Icons</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="loadmore" href="javascript:;">
                <div class="weui-cell__bd" @click="$router.push('loadmore')">
                  <p>Loadmore</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="panel" href="javascript:;">
                <div class="weui-cell__bd" @click="$router.push('panel')">
                  <p>Panel</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="preview" href="javascript:;">
                <div class="weui-cell__bd" @click="$router.push('preview')">
                  <p>Preview</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="progress" href="javascript:;">
                <div class="weui-cell__bd" @click="$router.push('progress')">
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
                <div class="weui-cell__bd" @click="$router.push('actionsheet')">
                  <p>Actionsheet</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="dialog" href="javascript:;">
                <div class="weui-cell__bd" @click="$router.push('dialog')">
                  <p>Dialog</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="msg" href="javascript:;">
                <div class="weui-cell__bd" @click="$router.push('msg')">
                  <p>Msg</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="picker" href="javascript:;">
                <div class="weui-cell__bd" @click="$router.push('picker')">
                  <p>Picker</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="toast" href="javascript:;">
                <div class="weui-cell__bd" @click="$router.push('toast')">
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
                <div class="weui-cell__bd" @click="$router.push('navbar')">
                  <p>Navbar</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_access js_item" data-id="tabbar" href="javascript:;">
                <div class="weui-cell__bd" @click="$router.push('tabbar')">
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
                <div class="weui-cell__bd" @click="$router.push('searchbar')">
                  <p>Search Bar</p>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
            </div>
          </div>
        </li>
        <li>
          <div class="weui-flex js_item" data-id="layers" @click="$router.push('layers')">
            <p class="weui-flex__item">层级规范</p>
            <img src="./images/icon_nav_z-index.png" alt="">
          </div>
        </li>
        <li>
          <div class="weui-flex js_item" data-id="layers" @click="$router.push('test')">
            <p class="weui-flex__item">测试</p>
            <img src="./images/icon_nav_z-index.png" alt="">
          </div>
        </li>
      </ul>
    </div>
    <div class="page__ft">
      <a href="javascript:"><img src="./images/icon_footer.png" /></a>
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
  };

</script>

<style scoped>


</style>
