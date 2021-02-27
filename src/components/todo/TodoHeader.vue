<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入任务名称" v-model="taskname" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "todoHeader",
  setup: () => {
    let taskname = ref("");
    return {
      taskname,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>