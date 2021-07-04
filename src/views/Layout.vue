<template>
  <div class="layout">
    <router-view />
    <van-tabbar route>
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/workbench" icon="desktop-o">工作台</van-tabbar-item>
      <van-tabbar-item to="/me" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
import { Tabbar, TabbarItem } from 'vant';
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
});
</script>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  background-color: #f7f8fa;
  padding-bottom: 60px;
  box-sizing: border-box;
}
</style>
