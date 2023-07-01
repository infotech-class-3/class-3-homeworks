<template>
  <div class="mt-16">
    <h1 class="mb-12">Todo List</h1>
    <TodosList :userTodosProp="userTodos" />
  </div>
</template>


<script>
import TodosList from "@/components/TodosList.vue";
export default {
  name: "TodoView",

  components: {
    TodosList,
  },

  computed: {
    userTodos() {
      const todos = this.$store.getters["todoStore/getTodos"];
      console.log('TodoView = ',todos);
      return todos;
    },
  },

  created() {
    this.$store.dispatch("todoStore/fetchTodos");
    console.log("created");
  },
};
</script>