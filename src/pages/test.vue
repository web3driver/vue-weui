<template>
  <div>test methods: {{ getDay() }}

    <br/>computed methods: {{ computedDay }}

    <input v-model="msg" /> {{ msg }}

    <ul>
      <li v-for="l in lists">{{l}}</li>
    </ul>
  <input
    v-model="newTodoText"
    v-on:keyup.enter="addNewTodo"
    placeholder="Add a todo"
  >
  <ul>
    <li
      is="yvTest"
      v-for="(todo, index) in todos"
      v-bind:title="todo"
      v-on:remove="todos.splice(index, 1)"
    ></li>
  </ul>
  </div>
</template>
<script>
  import util from '@/utils';

  export default {
    name: 'test',
    data() {
      return {
        newTodoText: '',
        todos: [
          'Do the dishes',
          'Take out the trash',
          'Mow the lawn',
        ],
        msg: Date.now(),
        lists: [1, 2, 3, 4, 5, 6, 7, 8],
      };
    },
    methods: {
      getDay() {
        return util.formatTime(this.msg);
      },
      addNewTodo() {
        this.todos.push(this.newTodoText)
        this.newTodoText = ''
      },
    },
    computed: {
      computedDay() {
        return util.formatTime(this.msg);
      },
    },
  };

</script>
<style scoped></style>
