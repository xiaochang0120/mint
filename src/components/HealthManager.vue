<template>
  <h3>营养管理</h3>
  <el-card class="box-card">
    <div class="box" @click="$router.push({name:'balance'})">
      <i class="iconfont">&#xe63f;</i>
      <li class="li1">
        <p>经典均衡美食</p>
        <span>已执行： 11天</span>
        <el-icon>
          <ArrowRightBold />
        </el-icon>
      </li>
    </div>
    <div class="box">
      <i class="iconfont">&#xe630;</i>
      <li>
        <p>营养小助手</p>
        <el-icon>
          <ArrowRightBold />
        </el-icon>
      </li>
    </div>
  </el-card>
</template>

<script>
import { defineComponent } from 'vue'
import { ArrowRightBold } from '@element-plus/icons-vue'
export default defineComponent({
  components: {
    ArrowRightBold
  }
})
</script>

<style lang="scss" scoped>
h3 {
  margin: 0.27rem 0 0.143rem 0;
  font-size: 0.16rem;
}
.el-card {
  border: none;
  box-shadow: none;
  border-radius: 0.2rem;
  height: 1.1rem;
  display: flex;
  flex-direction: column;
  :deep(.el-card__body) {
    padding: 0 0.17rem;
    height: 100%;
  }
  .box {
    width: 100%;
    display: flex;
    align-items: center;
    height: 50%;
    .iconfont {
      color: #59c490;
      font-size: 0.19rem;
      margin-right: 0.13rem;
    }
    li {
      height: 100%;
      flex: 1;
      display: flex;
      list-style: none;
      justify-content: space-between;
      align-items: center;
      p {
        margin: 0;
        font-size: 0.15rem;
        color: #404354;
      }
      span {
        color: #b0afb4;
        font-size: 0.1rem;
      }
      .el-icon {
        font-weight: bolder;
        font-size: 0.11rem;
        color: #dfdee6;
        margin-right: 0.06rem;
      }
    }

    .li1 {
      border-bottom: 0.01rem solid #eae4e4;
    }
  }
}
</style>
