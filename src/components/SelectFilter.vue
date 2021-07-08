<template>
  <div class="popup">
    <van-popup
      :show="showMode"
      position="right"
      @click-overlay="closeMode"
      style="width: 85%; height: 100%"
    >
      <div class="popup-content">
        <div class="flex-item" @click="toggleShowSchool(true)">
          <label class="label">校区</label>
          <div class="value">
            <span></span>
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="flex-item" @click="toggleShowTeacher(true)">
          <label class="label">老师</label>
          <div class="value">
            <span></span>
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="popup-filter">
          <label class="label">班级状态</label>
          <div class="class-status">
            <div
              class="status-item"
              v-for="(item, index) in classStatuses"
              :key="index"
              :class="{ actived: index === statusIndex }"
              @click="changeStatus(index)"
            >
              <span class="name">
                {{ item }}
              </span>
            </div>
          </div>
        </div>
        <div class="popup-footer">
          <van-button
            class="btn btn-first"
            round
            type="default"
            @click="cancel"
          >
            重置
          </van-button>
          <van-button class="btn" round type="primary" @click="confirmFilter">
            确认
          </van-button>
        </div>
      </div>
    </van-popup>
    <school-filter :showMode="showSchool" @close="toggleShowSchool" />
    <teacher-filter :showMode="showTeacher" @close="toggleShowTeacher" />
  </div>
</template>

<script>
import { Popup, Button, Icon } from "vant";
import { defineComponent, reactive, ref } from "vue";
import SchoolFilter from "./SchoolFilter.vue";
import TeacherFilter from "./TeacherFilter.vue";
export default defineComponent({
  name: "ContactRelative",
  components: {
    SchoolFilter,
    TeacherFilter,
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
    const statusIndex = ref(0);
    const showSchool = ref(false);
    const showTeacher = ref(false);
    const classStatuses = reactive(["未结业", "已结业"]);
    const changeStatus = (index) => {
      statusIndex.value = index;
    };
    const closeMode = () => {
      context.emit("close", false);
    };
    const cancel = () => {
      statusIndex.value = null;
    };
    const toggleShowSchool = (value) => {
      showSchool.value = value;
    };
    const toggleShowTeacher = (value) => {
      showTeacher.value = value;
    };
    const confirmFilter = () => {
      context.emit("close", false);
    };
    return {
      statusIndex,
      classStatuses,
      changeStatus,
      showSchool,
      showTeacher,
      toggleShowSchool,
      toggleShowTeacher,
      cancel,
      closeMode,
      confirmFilter,
    };
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.popup-content {
  .flex-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding: 15px 16px;
    line-height: 24px;
    border-bottom: 1px solid #f7f7f7;
    .label {
      color: #333;
      margin-right: 12px;
    }
    .value {
      flex: 1;
      color: #666;
      text-align: right;
    }
  }
  .popup-filter {
    .label {
      font-size: 16px;
      padding: 8px 16px 16px;
      color: #333;
    }
    .class-status {
      display: flex;
      flex-wrap: wrap;
      margin: 8px;
      .status-item {
        width: 33.33%;
        padding: 8px;
        box-sizing: border-box;
        &.actived {
          .name {
            color: #2284fe;
            background-color: rgba($color: #2284fe, $alpha: 0.2);
          }
        }
        .name {
          display: block;
          height: 32px;
          line-height: 32px;
          font-size: 14px;
          border-radius: 16px;
          background-color: #f7f8fa;
          text-align: center;
          color: #333;
        }
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