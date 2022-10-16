<template>
  <header>
    <el-icon @click="$router.go(-1)"><Back /></el-icon>
    <span>我的订单</span><b>开发票</b>
  </header>
  <el-tabs v-model="activeName" class="demo-tabs">
    <el-tab-pane label="全部" name="first">您还没有订单</el-tab-pane>
    <el-tab-pane label="待付款" name="second">您还没有订单</el-tab-pane>
    <el-tab-pane label="待收货" name="third">您还没有订单</el-tab-pane>
    <el-tab-pane label="待评价" name="fourth">您还没有订单</el-tab-pane>
  </el-tabs>
</template>

<script>
import { defineComponent } from 'vue'
import { Back } from '@element-plus/icons-vue'
export default defineComponent({
  data() {
    return {
      activeName: 'first'
    }
  },
  components: {
    Back
  }
})
</script>

<style lang="scss" scoped>
header {
  font-size: 0.13rem;
  margin: 0.2rem 0;
  padding-left: 0.2rem;
  span {
    margin-left: 0.2rem;
    margin-right: 1.9rem;
  }
  b {
    font-weight: normal;
    color: #01b578;
  }
}
:deep(.el-tabs__nav) {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
:deep(.el-tab-pane) {
  height: 5rem;
  line-height: 5rem;
  text-align: center;
}
</style>
