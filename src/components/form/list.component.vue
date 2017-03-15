<template>
  <div>
    <div class="weui-cells__title" v-if="title">{{title}}</div>
    <div class="weui-cells">
      <template v-if="lists" v-for="item in lists">
        <a v-if="item.href" class="weui-cell" :class="item.href ? 'weui-cell_access' : ''" :href="item.href">
          <div class="weui-cell__hd" v-if="item.imgsrc"><img :src="item.imgsrc" alt="" style="width:20px;margin-right:5px;display:block"></div>
          <div class="weui-cell__bd">
            <p>{{item.content}}
            </p>
          </div>
          <div class="weui-cell__ft">{{item.description}}</div>
        </a>
        <div v-else class="weui-cell" :class="item.href ? 'weui-cell_access' : ''">
          <div class="weui-cell__hd" v-if="item.imgsrc"><img :src="item.imgsrc" alt="" style="width:20px;margin-right:5px;display:block"></div>
          <div class="weui-cell__bd">
            <p>{{item.content}}
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
      type: {
        type: String,
        default: ''
      },
      title: String,
      lists: {
        type: Array || Object,
        validate: function (value) {
          if (typeof value === 'object') {
            if (Array.isArray(value)) {
              return value.every((v) => {
                return typeof v === 'object' && v.content
              })
            } else {
              return value.content
            }
          }
          else{
              return false
          }
        }
      }
    }

  }

</script>
