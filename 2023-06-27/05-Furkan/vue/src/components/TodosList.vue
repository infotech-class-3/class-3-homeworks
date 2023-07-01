<template>
  <div class="container">

    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Todos</th>
          <th scope="col">Create At</th>
          <th scope="col">Update At</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="userTodo in userTodosProp" :key="userTodo.id">
          <th scope="row">{{ userTodo.TodoID }}</th>
          <td>{{ userTodo.todo }}</td>
          <td>{{ formatDate(userTodo.createdDate) }}</td>
          <td>{{ userTodo.updatedDate }}</td>
          <td>
            <button
              type="button"
              class="btn btn-sm btn-primary"
              :style="{ backgroundColor: userTodo.completed ? 'green' : 'red' }"
            >
              {{ userTodo.completed ? "Yapildi" : "Yapilmadi" }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    userTodosProp: {
      type: Object,
      required: true,
    },
  },

  methods: {
    formatDate(date) {
      const formattedDate = new Date(date);
      const day = String(formattedDate.getDate()).padStart(2, "0");
      const month = String(formattedDate.getMonth() + 1).padStart(2, "0");
      const year = formattedDate.getFullYear();
      return `${day}/${month}/${year}`;
    },
  },
};
</script>
