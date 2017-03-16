<template>
  <div>
    <div class="weui-cells__title" v-if="title">{{title}}</div>
    <div class="weui-cells">
      <template v-if="lists" v-for="item in lists">
        <a v-if="item.href" class="weui-cell" :class="item.href ? 'weui-cell_access' : ''" :href="item.href">
          <div class="weui-cell__hd" v-if="item.imgsrc"><img :src="item.imgsrc" alt="" style="width:20px;margin-right:5px;display:block"></div>
          <div class="weui-cell__bd">
            <p>
              {{item.content}}
              <span v-if="item.badgeleft" class="weui-badge" style="margin-left: 5px;">{{item.badgeText}}</span>
            </p>
          </div>
          <div class="weui-cell__ft">
            {{item.description}}
            <span v-if="item.badgeright" class="weui-badge weui-badge_dot" style="margin-left: 5px;margin-right: 5px;"></span>
          </div>
        </a>
        <div v-else class="weui-cell" :class="item.href ? 'weui-cell_access' : ''">
          <div class="weui-cell__hd" v-if="item.imgsrc"><img :src="item.imgsrc" alt="" style="width:20px;margin-right:5px;display:block"></div>
          <div class="weui-cell__bd">
            <p>
              {{item.content}}
              <span v-if="item.badgeleft" class="weui-badge" style="margin-left: 5px;">{{item.badgeText}}</span>
            </p>
          </div>
          <div class="weui-cell__ft">{{item.description}}</div>
        </div>
      </template>
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      title: String,
      lists: {
        type: Array || Object,
        validate(value) {
          if (typeof value !== 'object') return false;
          if (Array.isArray(value)) return value.every(v => typeof v === 'object' && v.content);
          return value.content;
        },
      },
    },
  };

</script>
