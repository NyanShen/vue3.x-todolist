<template>
  <div class="me">
    <div class="me-header">
      <div class="avator">
        <img src="../assets/images/avt-00.png" alt="" />
      </div>
      <div class="me-data">
        <p class="p1">
          <span class="s1"> 老师5463 </span>
          <span class="s2"> | 超级管理员</span>
        </p>
        <p class="p2">139928765463</p>
      </div>
    </div>
    <div class="me-container">
      <div class="flex-content">
        <img src="../assets/images/0012.png" alt="" />
        <span>我的云校</span>
        <van-icon name="exchange" color="#ffd686" />
      </div>
      <p>单校区使用中</p>
      <div class="kr-btn">立即扩容</div>
    </div>
    <div class="me-content">
      <ul>
        <li class="flex-item">
          <van-icon class="icon" name="hotel-o" color="#323233" />
          <div class="name">校区管理</div>
          <div class="arrow-box">
            <span class="s1">默认</span>
            <span class="s2">总部校区</span>
            <van-icon name="arrow" color="#c8c9cc" />
          </div>
        </li>
        <li class="flex-item">
          <van-icon class="icon" name="question-o" color="#323233" />
          <div class="name">问题反馈</div>
          <div class="arrow-box">
            <van-icon name="arrow" color="#c8c9cc" />
          </div>
        </li>
        <li class="flex-item">
          <van-icon class="icon" name="audio" color="#323233" />
          <div class="name">我的客服</div>
          <div class="arrow-box">
            <van-icon name="arrow" color="#c8c9cc" />
          </div>
        </li>
        <li class="flex-item">
          <van-icon class="icon" name="setting-o" color="#323233" />
          <div class="name">其他设置</div>
          <div class="arrow-box">
            <van-icon name="arrow" color="#c8c9cc" />
          </div>
        </li>
      </ul>
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
.me-header {
  display: flex;
  align-items: center;
  padding: 40px 20px 40px;
  .avator {
    width: 52px;
    height: 52px;
    margin-right: 10px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .me-data {
    .s1 {
      font-size: 20px;
      font-weight: 600;
      margin-right: 4px;
      color: #333;
    }
    .s2 {
      font-size: 12px;
      color: #333;
    }
    .p2 {
      font-size: 14px;
      margin-top: 10px;
      color: #999;
    }
  }
}
.me-container {
  position: relative;
  width: 343px;
  height: 76px;
  line-height: 20px;
  font-size: 14px;
  margin: 0 16px 24px 16px;
  padding: 16px;
  background: url("../assets/images/mine-header-bg.png") 100% 100%/343px 76px
      no-repeat,
    linear-gradient(133deg, #333947, #535661);
  color: rgba($color: #fff, $alpha: 0.4);
  border-radius: 8px;
  box-sizing: border-box;
  .flex-content {
    display: flex;
    align-items: center;
    margin-bottom: 2px;
    img {
      width: 24px;
      height: 24px;
      margin-right: 6px;
    }
    span {
      font-size: 16px;
      font-weight: 600;
      margin-right: 4px;
      line-height: 22px;
      color: #ffd686;
    }
  }
  .kr-btn {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 12px;
    padding: 4px 12px;
    border-radius: 100px;
    background: linear-gradient(141deg, #ffd889, #ffc467);
    color: #765b2a;
  }
}
.me-content {
  margin: 12px;
  border-radius: 10px;
  background-color: #fff;
  ul {
    .flex-item {
      display: flex;
      align-items: center;
      font-size: 16px;
      border-bottom: 1px solid #f7f7f7;
      padding: 15px;
      .icon {
        margin-right: 8px;
      }
      .name {
        flex: 1;
      }
      .s1 {
        font-size: 12px;
        padding: 2px 6px;
        margin-right: 8px;
        border-radius: 2px;
        color: #1989fa;
        background-color: rgba($color: #1989fa, $alpha: .1);
      }
      .s2 {
        font-size: 14px;
        color: #999
      }
    }
  }
}
</style>

