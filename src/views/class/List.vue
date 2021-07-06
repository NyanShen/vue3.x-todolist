<template>
  <div>
    <div class="search-box">
      <div class="search-content">
        <div class="xq-show">
          <span>全部校区</span>
          <van-icon name="arrow-down" color="#666" />
        </div>
        <div class="search-body">
          <van-icon name="search" color="#333" />
        </div>
        <van-icon name="filter-o" color="#333" />
      </div>
    </div>
    <div class="empty-container">
      <img src="../../assets/images/empty.png" alt="" />
      <p>没有找到班级哦～</p>
    </div>
    <div>
      <div class="footer-holder"></div>
      <div class="module-footer">
        <van-button class="btn" round type="primary">新增班级</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Button, Icon } from "vant";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Me",
  components: {
    [Button.name]: Button,
    [Icon.name]: Icon,
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/css/module-footer.scss";
.search-box {
  height: 52px;
  line-height: 52px;
  .search-content {
    display: flex;
    align-items: center;
    padding: 0 12px;
    background-color: #fff;
    .xq-show {
      font-size: 14px;
    }
    .search-body {
      flex: 1;
      text-align: right;
      margin-right: 12px;
    }
  }
}
.empty-container {
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 128px;
    height: 128px;
  }
  p {
    font-size: 14px;
    margin-top: 30px;
    color: #999;
  }
}
</style>