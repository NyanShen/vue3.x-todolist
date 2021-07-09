<template>
  <div class="popup">
    <van-popup
      :show="showMode"
      position="right"
      @click-overlay="closeMode"
      style="width: 85%; height: 100%; background-color: #f7f8fa"
    >
      <div class="popup-content">
        <div class="teacher-title">选择老师</div>
        <div class="teacher-content">
          <div class="search-box">
            <van-search
              v-model="searchKey"
              shape="round"
              placeholder="请输入姓名/手机号后4位"
            />
          </div>
          <ul>
            <li
              class="teacher-item"
              v-for="(item, index) in teachers"
              :key="index"
              @click="changeTeacher(index)"
            >
              <img src="../assets/images/avt-00.png" alt="" />
              <div class="left">
                <span>{{ item }}</span>
              </div>
              <div class="right" v-if="teacherIndex === index">
                <van-icon name="checked" color="#2284fe" />
              </div>
            </li>
          </ul>
        </div>
        <div class="popup-footer">
          <van-button
            class="btn btn-first"
            round
            type="default"
            @click="closeMode"
          >
            取消
          </van-button>
          <van-button class="btn" round type="primary" @click="confirmTeacher">
            确定
          </van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Popup, Button, Icon, Search } from "vant";
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  name: "ContactRelative",
  components: {
    [Popup.name]: Popup,
    [Button.name]: Button,
    [Icon.name]: Icon,
    [Search.name]: Search,
  },
  props: {
    showMode: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  setup(props, context) {
    const searchKey = ref("");
    const teacherIndex = ref(null);
    const teachers = reactive(["老师54036"]);

    const changeTeacher = (index) => {
      if (teacherIndex.value === index) {
        teacherIndex.value = null;
        return
      }
      teacherIndex.value = index;
    };
    const closeMode = () => {
      context.emit("close", false);
    };
    const confirmTeacher = () => {
      context.emit("confirm", teachers[teacherIndex.value]);
      context.emit("close", false);
    };
    return {
      teacherIndex,
      teachers,
      searchKey,
      changeTeacher,
      closeMode,
      confirmTeacher,
    };
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.popup-content {
  .teacher-title {
    font-size: 16px;
    line-height: 20px;
    padding: 12px 16px;
    color: #999;
  }
  .teacher-content {
    background-color: #fff;

    .teacher-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      height: 72px;
      font-size: 16px;
      padding: 0 12px 0 64px;
      img {
        position: absolute;
        left: 15px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
  }
  .popup-footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    right: 0;
    padding: 12px 16px;
    box-sizing: border-box;
    .btn {
      width: 138px;
      &.btn-first {
        margin-right: 8px;
      }
    }
  }
}
</style>