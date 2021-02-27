<template>
  <div class="todo-main" v-for="(item, index) in list" :key="index">
      <div>
          <input type="checkbox" v-model="item.complete" name="" id="">
          {{item.title}}
          <button>删除</button>
      </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "todoMain",
  setup: () => {
      let list = ref([
          {
              title: 'Vue',
              complete: false
          },
          {
              title: 'React',
              complete: false
          },
          {
              title: 'javascript',
              complete: true
          }
      ])
      return {
          list
      }
  },
});
</script>

<style lang="scss" scoped>
</style>