<template>
  <list :title="title" :class="'weui-cells_checkbox'">
    <label v-for="(item,index) in lists" class="weui-cell weui-check__label" :for="name+'-'+index">
                <div class="weui-cell__hd">
                    <input type="checkbox" class="weui-check" :name="name" :id="name+'-'+index">
                    <i class="weui-icon-checked"></i>
                </div>
                <div class="weui-cell__bd">
                    <p>{{item}}</p>
                </div>
            </label>
  </list>
</template>
<script>
  import List from './list.component';

  export default {
    components: {
      List,
    },
    props: {
      title: String,
      name: {
        type: String,
        required: true,
      },
      lists: {
        type: Array,
        validator(value) {
          return Array.isArray(value) && value.length > 0;
        },
      },
    },
  };

</script>
