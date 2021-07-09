<template>
  <div class="popup">
    <van-popup
      :show="showMode"
      position="right"
      @click-overlay="closeMode"
      style="width: 85%; height: 100%; background-color: #f7f8fa"
    >
      <div class="popup-content">
        <div class="school-title">选择校区</div>
        <div class="school-content">
          <ul>
            <li
              class="school-item"
              v-for="(item, index) in schools"
              :key="index"
              @click="changeSchool(index)"
            >
              <img src="../assets/images/s-01.png" alt="" />
              <div class="left">
                <span>{{ item }}</span>
              </div>
              <div class="right" v-if="schoolIndex === index">
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
          <van-button class="btn" round type="primary" @click="confirmSchool">
            确定
          </van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Popup, Button, Icon } from "vant";
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  name: "ContactRelative",
  components: {
    [Popup.name]: Popup,
    [Button.name]: Button,
    [Icon.name]: Icon,
  },
  props: {
    showMode: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  setup(props, context) {
    const schoolIndex = ref(null);
    const schools = reactive(["总部校区"]);

    const changeSchool = (index) => {
      if (schoolIndex.value === index) {
        schoolIndex.value = null;
        return
      }
      schoolIndex.value = index;
    };
    const closeMode = () => {
      context.emit("close", false);
    };
    const confirmSchool = () => {
      context.emit("confirm", schools[schoolIndex.value]);
      context.emit("close", false);
    };
    return {
      schoolIndex,
      schools,
      changeSchool,
      closeMode,
      confirmSchool,
    };
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.popup-content {
  .school-title {
    font-size: 16px;
    line-height: 20px;
    padding: 12px 16px;
    color: #999;
  }
  .school-content {
    background-color: #fff;
    .school-item {
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