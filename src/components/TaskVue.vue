<template>
  <div class="alert alert-secondary" :class="alertClass">{{ task.content }}</div>
</template>

<script>
export default {
  name: "TaskVue",
  props: {
    task: Object,
    alertColor: {
      type: String,
      default: "secondary"
    }
  },
  computed:{
    alertClass(){
      return `alert-${this.alertColor}`
    }
  }
};
</script>

<style scoped></style>
