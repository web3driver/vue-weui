<template>
  <list :title="title" :class="'weui-cells_radio'">
    <label v-for="(item,index) in lists" class="weui-cell weui-check__label" :for="name+'-'+index">
                <div class="weui-cell__bd">
                    <p>{{item}}</p>
                </div>
                <div class="weui-cell__ft">
                    <input type="radio" class="weui-check" :name="name" :id="name+'-'+index">
                    <span class="weui-icon-checked"></span>
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
