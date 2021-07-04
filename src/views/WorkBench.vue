<template>
  <div class="bench">
    <div class="bench-body">
      <div class="bench-useful">
        <div class="title">常用功能</div>
        <div class="icons">
            <img src="../assets/images/menu08.png" alt="" />
            <img src="../assets/images/menu08.png" alt="" />
        </div>
        <van-button class="edit-btn" round size="sm"> 编辑 </van-button>
      </div>
      <div class="bench-content">
        <div class="title">学员管理</div>
        <div class="menu-box">
          <ul>
            <li class="menu-item">
              <img src="../assets/images/menu08.png" alt="" />
              <p>学员</p>
            </li>
            <li class="menu-item">
              <img src="../assets/images/menu08.png" alt="" />
              <p>学员</p>
            </li>
            <li class="menu-item">
              <img src="../assets/images/menu08.png" alt="" />
              <p>学员</p>
            </li>
            <li class="menu-item">
              <img src="../assets/images/menu08.png" alt="" />
              <p>学员</p>
            </li>
            <li class="menu-item">
              <img src="../assets/images/menu08.png" alt="" />
              <p>学员</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="bench-content">
        <div class="title">教务管理</div>
        <div class="menu-box">
          <ul>
            <li class="menu-item">
              <img src="../assets/images/menu08.png" alt="" />
              <p>学员</p>
            </li>
            <li class="menu-item">
              <img src="../assets/images/menu08.png" alt="" />
              <p>学员</p>
            </li>
            <li class="menu-item">
              <img src="../assets/images/menu08.png" alt="" />
              <p>学员</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="bench-content">
        <div class="title">学校服务</div>
        <div class="menu-box">
          <ul>
            <li class="menu-item">
              <img src="../assets/images/menu08.png" alt="" />
              <p>学员</p>
            </li>
            <li class="menu-item">
              <img src="../assets/images/menu08.png" alt="" />
              <p>学员</p>
            </li>
            <li class="menu-item">
              <img src="../assets/images/menu08.png" alt="" />
              <p>学员</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="bench-content">
        <div class="title">高级管理</div>
        <div class="menu-box">
          <ul>
            <li class="menu-item">
              <img src="../assets/images/menu08.png" alt="" />
              <p>学员</p>
            </li>
            <li class="menu-item">
              <img src="../assets/images/menu08.png" alt="" />
              <p>学员</p>
            </li>
            <li class="menu-item">
              <img src="../assets/images/menu08.png" alt="" />
              <p>学员</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="bench-content">
        <div class="title">配置中心</div>
        <div class="menu-box">
          <ul>
            <li class="menu-item">
              <img src="../assets/images/menu08.png" alt="" />
              <p>学员</p>
            </li>
            <li class="menu-item">
              <img src="../assets/images/menu08.png" alt="" />
              <p>学员</p>
            </li>
            <li class="menu-item">
              <img src="../assets/images/menu08.png" alt="" />
              <p>学员</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="bench-more">
          <span>更多功能</span>
          <van-icon name="arrow" color="#1989fa" />
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
.bench-body {
  padding: 12px 0;
}
.bench-useful {
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 16px;
  margin: 0 12px 12px 12px;
  .title {
    font-size: 16px;
    font-weight: 500;
    color: #323233;
  }
  .icons {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    img {
      width: 30px;
      height: 30px;
      margin-left: 8px;
    }
  }
  .edit-btn {
    height: 24px;
    padding: 0 16px;
    margin-left: 8px;
    font-size: 12px;
    color: #333;
    background-color: #f2f3f5;
  }
}
.bench-content {
  margin: 12px;
  border-radius: 10px;
  background-color: #fff;
  .title {
    font-size: 16px;
    font-weight: 500;
    padding: 16px;
    color: #323233;
  }
  .menu-box {
    ul {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding: 10px 0;
      .menu-item {
        width: 25%;
        text-align: center;
        margin-bottom: 16px;
        box-sizing: border-box;

        img {
          width: 40px;
          height: 40px;
        }
        p {
          font-size: 12px;
          margin-top: 4px;
          color: #333;
        }
      }
    }
  }
}
.bench-more {
  margin: 12px;
  padding: 16px;
  border-radius: 10px;
  font-size: 16px;
  background-color: #fff;
  color: #1989fa;
  text-align: center;
}
</style>