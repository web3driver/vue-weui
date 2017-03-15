<template>
  <list :title="title" :class="'weui-cells_form'">
    <div v-for="(item,index) in lists" class="weui-cell weui-cell_switch">
      <div class="weui-cell__bd">{{item}}</div>
      <div class="weui-cell__ft">
        <label :for="name+'-'+index" class="weui-switch-cp">
                        <input :id="name+'-'+index" class="weui-switch-cp__input" type="checkbox" :name="name" />
                        <div class="weui-switch-cp__box"></div>
                    </label>
      </div>
    </div>
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
    data() {
      return {
        currentLength: 0,
      };
    },
    methods: {
      getTextLength(event) {
        this.currentLength = event.target.value.length;
      },
    },
  };

</script>
