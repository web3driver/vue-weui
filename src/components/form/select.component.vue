<template>
  <list :title="title">
    <div class="weui-cell weui-cell_select">
      <div class="weui-cell__bd">
        <select class="weui-select" :name="name">
            <option v-for="item in lists" :value="itemValue(item)">{{textValue(item)}}</option>
        </select>
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
      name: {
        type: String,
        required: true
      },
      lists: {
        type: Array,
        validator: function (value) {
          return Array.isArray(value) && value.length > 0
        }
      }
    },
    methods: {
        itemValue(val){
            if(val.value||val.value===0) return val.value
            if(val.text) return val.text
            return val
        },
        textValue(val){
            if(val.text) return val.text
            return val
        }
    }
  }

</script>
