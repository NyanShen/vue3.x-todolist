<template>
  <div class="home">
    <todo-header></todo-header>
    <todo-main></todo-main>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import { defineComponent } from "vue";
import TodoMain from "@/components/todo/TodoMain.vue";
import TodoHeader from "@/components/todo/TodoHeader.vue";
import TodoFooter from "@/components/todo/TodoFooter.vue";

export default defineComponent({
  name: "Home",
  components: {
    TodoMain,
    TodoHeader,
    TodoFooter,
  },
});
</script>
