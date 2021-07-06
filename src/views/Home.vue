<template>
  <div class="home">
    <div class="home-header">
      <div class="header-title">
        <p class="p1">
          <span>新手任务</span>
          <span class="count">0/2</span>
        </p>
        <p class="p2">快去完成学校的基础参数设置～</p>
      </div>
      <div class="header-content">
        <img class="header-img" src="../assets/images/n-02.png" alt="" />
        <div class="flex-item">
          <span>1</span>
          <div class="middle">
            <p class="p1">创建教室</p>
            <p class="p2">为你的学校创建教室</p>
          </div>
          <van-button class="m-btn" round type="primary" size="sm">
            去完成
          </van-button>
        </div>
        <div class="flex-item">
          <span>2</span>
          <div class="middle">
            <p class="p1">添加员工</p>
            <p class="p2">添加学校员工信息</p>
          </div>
          <van-button class="m-btn" round type="primary" size="sm">
            去完成
          </van-button>
        </div>
      </div>
      <div class="header-icon">
        <!-- <van-icon name="arrow-up" /> -->
      </div>
    </div>
    <div class="home-content">
      <div class="data-header">
        <div class="title">
          <span>数据简报</span>
        </div>
        <div class="more">
          <span>1个校区</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="data-box">
        <ul>
          <li class="data-item">
            <p class="p1">0</p>
            <p class="p2">昨日课消金额（元）</p>
          </li>
          <li class="data-item">
            <p class="p1">0</p>
            <p class="p2">昨日课消人次</p>
          </li>
          <li class="data-item">
            <p class="p1">0</p>
            <p class="p2">昨日学费收入（元）</p>
          </li>
          <li class="data-item">
            <p class="p1">0</p>
            <p class="p2">昨日新增学员</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="home-content">
      <div class="data-header">
        <div class="title">
          <span>常用功能</span>
        </div>
        <div class="more">
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="menu-box">
        <ul>
          <li class="menu-item" @click="navigateTo('/baseStudentInput')">
            <img src="../assets/images/menu08.png" alt="" />
            <p>学员</p>
          </li>
          <li class="menu-item">
            <img src="../assets/images/menu05.png" alt="" />
            <p>报名收费</p>
          </li>
          <li class="menu-item">
            <img src="../assets/images/menu04.png" alt="" />
            <p>退费</p>
          </li>
          <li class="menu-item">
            <img src="../assets/images/menu09.png" alt="" />
            <p>课程</p>
          </li>
          <li class="menu-item" @click="navigateTo('/classList')">
            <img src="../assets/images/menu01.png" alt="" />
            <p>班级</p>
          </li>
          <li class="menu-item">
            <img src="../assets/images/menu03.png" alt="" />
            <p>课表</p>
          </li>
          <li class="menu-item">
            <img src="../assets/images/menu06.png" alt="" />
            <p>商城管理</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="home-content">
      <div class="data-header">
        <div class="title">
          <span>今日课表</span>
        </div>
      </div>
      <div class="kb-box">
        <div class="empty-box">
          <img src="../assets/images/empty.png" alt="" />
          <p>今日没有安排</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Button, Icon } from "vant";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    [Button.name]: Button,
    [Icon.name]: Icon,
  },
  methods: {
    navigateTo(pageName) {
      this.$router.push(pageName);
    },
  },
});
</script>

<style lang="scss" scoped>
.home-header {
  position: relative;
  width: 100%;
  height: 302px;
  background: linear-gradient(45deg, #02acfa 0%, #188bfe 100%);

  .header-title {
    padding: 35px 0 26px 30px;
    .p1 {
      font-size: 24px;
      color: #fff;
      .count {
        margin-left: 5px;
        color: #d0edf1;
      }
    }
    .p2 {
      font-size: 14px;
      margin-top: 10px;
      color: #d0edf1;
    }
  }
  .header-content {
    position: relative;
    background-color: #fff;
    border-radius: 20px;
    margin: 0 15px;
    padding: 18px 16px;
    box-sizing: border-box;
    .header-img {
      position: absolute;
      right: 5px;
      top: -92px;
      width: 91px;
      height: 92px;
    }
    .flex-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 0;
      span {
        width: 32px;
        margin-right: 16px;
        font-size: 32px;
        font-weight: 500;
        text-align: center;
        color: #cccecd;
      }

      .middle {
        flex: 1;
        .p1 {
          line-height: 22px;
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 4px;
          color: #333;
        }
        .p2 {
          font-size: 14px;
          color: #999;
        }
      }
      .m-btn {
        padding: 0;
        width: 72px;
        height: 28px;
        font-size: 14px;
        border-radius: 999px;
      }
    }
  }
  .header-icon {
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    color: rgb(184, 233, 253);
    font-size: 24px;
  }
}
.home-content {
  margin: 12px;
  border-radius: 10px;
  background-color: #fff;
  .data-header {
    position: relative;
    padding: 16px;
    .title {
      font-size: 16px;
      font-weight: 500;
      color: #333;
    }
    .more {
      position: absolute;
      top: 16px;
      right: 16px;
      font-size: 14px;
      color: #999;
      span {
        color: #333;
      }
    }
  }
  .data-box {
    ul {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .data-item {
        width: 50%;
        padding: 16px 24px;
        border-top: 1px solid #f7f7f7;
        box-sizing: border-box;
        &:nth-child(n) {
          border-right: 1px solid #f7f7f7;
        }
        .p1 {
          font-size: 20px;
          font-weight: 500;
          line-height: 28px;
          color: #333;
        }
        .p2 {
          font-size: 12px;
          margin-top: 4px;
          color: #969799;
        }
      }
    }
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
  .kb-box {
    padding: 15px 15px 30px 15px;
    .empty-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: 90px;
        height: 90px;
      }
      p {
        font-size: 14px;
        margin-top: 10px;
        color: #999;
      }
    }
  }
}
</style>
