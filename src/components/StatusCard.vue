<template>
  <div class="card">
    <div class="card-header text-center" :class="titleClasses">
      <h4>{{ title }}</h4>
    </div>
    <div class="card-body">
      <TaskVue v-for="task in tasks" :key="task.id"/>
    </div>
    <div class="card-footer" v-if="newTasks">
      <NewTask />
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
};
</script>

<style scoped></style>
