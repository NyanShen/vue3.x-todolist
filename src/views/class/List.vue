<template>
  <div>
    <div class="search-box">
      <div class="search-content" v-if="!showSearch">
        <div class="xq-show" @click="toggleShowSchool(true)">
          <span>{{ state.school }}</span>
          <van-icon name="arrow-down" color="#666" />
        </div>
        <div class="search-body">
          <van-icon
            name="search"
            color="#333"
            @click="toggleShowSearch(true)"
          />
        </div>
        <van-icon
          name="filter-o"
          color="#333"
          @click="toggleShowFilter(true)"
        />
      </div>
      <div class="search-class" v-if="showSearch">
        <form action="/">
          <van-search
            v-model="searchKey"
            show-action
            shape="round"
            placeholder="请输入班级名称"
            @search="onSearch"
            @cancel="toggleShowSearch(false)"
          />
        </form>
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
    <select-filter
      :showMode="showFilter"
      @close="toggleShowFilter"
      @confirm="confirmFilter"
    />
    <school-filter
      :showMode="showSchool"
      @close="toggleShowSchool"
      @confirm="confirmSchool"
    />
  </div>
</template>

<script>
import { Button, Icon, Search } from "vant";
import { defineComponent, reactive, ref } from "vue";
import SelectFilter from "../../components/SelectFilter.vue";
import SchoolFilter from "../../components/SchoolFilter.vue";

export default defineComponent({
  name: "Me",
  components: {
    SelectFilter,
    SchoolFilter,
    [Button.name]: Button,
    [Search.name]: Search,
    [Icon.name]: Icon,
  },
  setup() {
    const searchKey = ref("");
    const showFilter = ref(false);
    const showSchool = ref(false);
    const showSearch = ref(false);
    const state = reactive({
      school: "全部校区",
    });

    const toggleShowFilter = (value) => {
      showFilter.value = value;
    };
    const toggleShowSearch = (value) => {
      showSearch.value = value;
    };
    const toggleShowSchool = (value) => {
      showSchool.value = value;
    };
    const confirmSchool = (value) => {
      if (value) {
        state.school = value;
      } else {
        state.school = "全部校区";
      }
    };
    const confirmFilter = (value) => {
      if (value.school) {
        state.school = value.school;
      } else {
        state.school = "全部校区"
      }
    };
    return {
      state,
      searchKey,
      showFilter,
      showSchool,
      showSearch,
      toggleShowFilter,
      toggleShowSearch,
      toggleShowSchool,
      confirmSchool,
      confirmFilter
    };
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