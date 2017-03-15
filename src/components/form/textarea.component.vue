<template>
  <list :title="title" :class="'weui-cells_form'">
    <div class="weui-cell">
      <div class="weui-cell__bd">
        <textarea class="weui-textarea" :placeholder="placeholder" :rows="rows" :maxlength="limit"
            @keyup="getTextLength"
        ></textarea>
        <div class="weui-textarea-counter"><span>{{currentLength}}</span>/{{limit}}</div>
      </div>
    </div>
  </list>
</template>
<script>
  import List from './list.component'
  export default {
    components: {
      List
    },
    props: {
      title: String,
      type: {
        type: String,
        default: 'default'
      },
      placeholder: String,
      name: {
        type: String,
        required: true
      },
      limit: {
          type: Number,
          default: 200
      },
      rows: {
          type: Number,
          default: 3
      }
    },
    data() {
        return {
            currentLength: 0
        }
    },
    methods: {
        getTextLength(event){
            this.currentLength=event.target.value.length
        }
    }
  }

</script>
