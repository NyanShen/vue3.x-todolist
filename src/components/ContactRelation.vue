<template>
  <div class="popup">
    <van-popup
      :show="showMode"
      position="bottom"
      closeable
      @click-close-icon="closeMode"
      @click-overlay="closeMode"
    >
      <div class="popup-header">请选择关系</div>
      <div class="popup-content">
        <ul class="list-content">
          <li
            class="list-item"
            v-for="(item, index) in relations"
            :key="index"
            :class="{ actived: item === current }"
            @click="selectRelation(item)"
          >
            <span>{{ item }}</span>
          </li>
          <li class="list-item item-add" @click="toggleShowInput(true)">
            <span>自定义关系</span>
          </li>
        </ul>
      </div>
    </van-popup>
    <van-dialog
      :show="showInput"
      title="自定义关系"
      show-cancel-button
      confirm-button-color="#1989fa"
      @confirm="confirmInput"
      @cancel="toggleShowInput(false)"
    >
      <van-cell-group inset class="input-group">
        <van-field v-model="relationValue" placeholder="请输入自定义关系" />
      </van-cell-group>
    </van-dialog>
  </div>
</template>
<script>
import { Popup, Dialog, Field, CellGroup } from "vant";
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  name: "ContactRelative",
  components: {
    [Popup.name]: Popup,
    [Dialog.Component.name]: Dialog.Component,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
  },
  props: {
    showMode: {
      type: Boolean,
      required: true,
      default: false,
    },
    current: {
      type: String,
      required: false,
      default: "妈妈",
    },
  },
  setup(props, context) {
    const relations = reactive([
      "本人",
      "爸爸",
      "妈妈",
      "爷爷",
      "奶奶",
      "外公",
      "外婆",
    ]);
    const showInput = ref(false);
    const relationValue = ref("");
    const toggleShowInput = (value) => {
      showInput.value = value;
    };
    const confirmInput = () => {
      relations.push(relationValue.value);
      toggleShowInput(false);
      selectRelation(relationValue.value);
      relationValue.value = "";
    };
    const selectRelation = (item) => {
      context.emit("select", item);
    };
    const closeMode = () => {
      context.emit("close", false);
    };
    return {
      relations,
      showInput,
      relationValue,
      toggleShowInput,
      confirmInput,
      selectRelation,
      closeMode,
    };
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.popup {
  .input-group {
    padding: 15px 16px;
  }
}
.popup-header {
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  height: 48px;
  line-height: 48px;
}
.popup-content {
  margin-bottom: 48px;
  .list-content {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px 6px;
    .list-item {
      width: 33.33%;
      font-size: 14px;
      padding: 8px;
      text-align: center;
      box-sizing: border-box;
      &.item-add {
        width: 66.66%;
      }
      &.actived {
        span {
          color: #fff;
          background-color: #1989fa;
        }
      }
      span {
        display: block;
        padding: 0 6px;
        height: 32px;
        line-height: 32px;
        background-color: #f7f8fa;
        border-radius: 16px;
      }
    }
  }
}
</style>