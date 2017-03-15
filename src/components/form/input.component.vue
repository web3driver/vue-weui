<template>
  <list :title="title">
    <div class="weui-cell">
      <div class="weui-cell__bd">
        <input class="weui-input" type="text" :placeholder="placeholder" :name="name"/>
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
      }
    },
    computed: {
      cellsStyle() {
        if (!this.type || typeof this.type !== 'string') {
          return '222'
        }
        if (this.type === 'radio') return 'weui-cells_radio'
      },
    }
  }

</script>
