<template>
  <div class="card">
    <div class="card-header text-center" :class="titleClasses">
      <h4>{{ title }}</h4>
    </div>
    <div class="card-body">
      <TaskVue v-for="task in tasks" :key="task.id" :task="task" :alertColor="alertColor" />
    </div>
    <div class="card-footer" v-if="newTasks">
      <NewTask @new-task="newTask" />
    </div>
  </div>
</template>

<script>
import NewTask from "./NewTask.vue";
import TaskVue from "./TaskVue.vue";

// eslint-disable-next-line vue/multi-word-component-names
export default {
  name: "StatusCard",
  components: {
    TaskVue,
    NewTask,
  },
  props: {
    title: String,
    titleClasses: String,
    status: Number,
    newTasks: Boolean,
    tasks: Array,
  },
  computed: {
    alertColor() {
      switch (this.status) {
        case 0:
          return "secondary";
        case 1:
          return "primary";
        case 2:
          return "success";
      }
      return "danger"
    },
  },
  methods: {
    newTask(task) {
      console.log(task);
      // Nur der Urheber darf Daten verändern
      // In diesem Fall wäre das die App.vue
    }
  }
};
</script>

<style scoped></style>
