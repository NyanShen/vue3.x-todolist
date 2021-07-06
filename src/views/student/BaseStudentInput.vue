<template>
  <div>
    <div class="student-form">
      <div class="form-item">
        <van-cell-group inset class="input-field">
          <van-field
            v-model="value"
            label="姓名"
            required
            placeholder="输入框内容右对齐"
            input-align="right"
          />
        </van-cell-group>
      </div>
      <div class="form-flex" style="margin-top: 26px">
        <label class="form-label">
          <span>*</span>
          性别
        </label>
        <van-radio-group v-model="checked" direction="horizontal">
          <van-radio name="1">男</van-radio>
          <van-radio name="2">女</van-radio>
        </van-radio-group>
      </div>
      <div class="form-flex">
        <label class="form-label">出生日期</label>
        <div
          class="form-select"
          :class="{ actived: state.birthDate }"
          @click="toggleShowDate(true)"
        >
          <span>{{ state.birthDate ? state.birthDate : "请选择" }}</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="form-flex">
        <label class="form-label">
          <span>*</span>
          当前公立年级
        </label>
        <div class="form-select">
          <span>请选择</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="form-contact">
        <label class="form-label">
          <span>*</span>
          联系方式
        </label>
        <p class="tip">
          用下面填写的号码注册学员端账号可查看学员上课信息，请正确填写手机号码
        </p>
      </div>
      <div class="form-item">
        <van-cell-group inset class="input-field">
          <van-field
            v-model="state.phone"
            clearable
            :label="state.labelText"
            left-icon="clear"
            placeholder="请输入手机号"
            input-align="right"
          />
        </van-cell-group>
      </div>
      <div class="form-flex">
        <div class="contact-add">
          <van-icon name="add" />
          <span>新增联系方式</span>
        </div>
      </div>
    </div>
    <div>
      <div class="footer-holder"></div>
      <div class="module-footer">
        <van-button class="btn" round type="primary">登记</van-button>
      </div>
    </div>
    <van-popup :show="showDate" position="bottom" closeable>
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title=""
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="confirmDate"
        @cancel="toggleShowDate(false)"
      />
    </van-popup>
    <van-popup :show="showGrate" position="bottom">
      <van-picker
        title="选择学员当前公立年级"
        :columns="columns"
        @confirm="confirmGrate"
        @cancel="toggleShowGrate(false)"
        @change="changeGrate"
      />
    </van-popup>
  </div>
</template>

<script>
import {
  Button,
  Icon,
  Field,
  CellGroup,
  RadioGroup,
  Radio,
  DatetimePicker,
  Popup,
  Picker,
} from "vant";
import { ref, reactive } from "vue";
import { defineComponent } from "vue";
import moment from "moment";

export default defineComponent({
  name: "Me",
  components: {
    [Button.name]: Button,
    [Icon.name]: Icon,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup,
    [DatetimePicker.name]: DatetimePicker,
    [Popup.name]: Popup,
    [Picker.name]: Picker,
  },
  setup() {
    const showDate = ref(false);
    const showGrate = ref(true);
    const checked = ref("1");
    const state = reactive({
      labelText: "本人 >",
      phone: "",
      birthDate: "",
    });
    const grates = [
      "小班",
      "中班",
      "大班",
      "一年级",
      "二年级",
      "三年级",
      "四年级",
      "五年级",
      "六年级",
      "初一",
      "初二",
      "初三",
      "高一",
      "高二",
      "高三",
      "高中毕业",
      "大学",
      "成人",
      "其他",
    ];
    const currentDate = ref(new Date(2021, 0, 17));
    const toggleShowDate = (value) => {
      showDate.value = value;
    };
    const toggleShowGrate = (value) => {
      showGrate.value = value;
    };
    const confirmDate = (date) => {
      state.birthDate = moment(date).format("YYYY-MM-DD");
      toggleShowDate(false);
    };
    return {
      state,
      grates,
      checked,
      showDate,
      toggleShowDate,
      toggleShowGrate,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate,
      confirmDate,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "../../assets/css/module-footer.scss";
.student-form {
  .form-label {
    font-size: 16px;
    color: #333;
    span {
      color: #ee0a24;
    }
  }
  .form-item {
    background-color: #fff;
    padding: 5px 0;
    .input-field {
      margin: 0;
    }
  }
  .form-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    background-color: #fff;
    padding: 16px 12px;
    border-bottom: 1px solid #f7f7f7;
    color: #333;

    .form-select {
      color: #c8c9cc;
      &.actived {
        color: #333;
      }
      span {
        margin-right: 8px;
      }
    }
    .contact-add {
      color: #1989fa;
      span {
        margin-left: 8px;
      }
    }
  }
  .form-contact {
    padding: 20px 40px 15px 15px;
    .tip {
      font-size: 14px;
      line-height: 20px;
      margin-top: 12px;
      color: #999;
    }
  }
}
</style>