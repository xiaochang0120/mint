<!-- eslint-disable vue/no-reserved-component-names -->
<template>
  <div class="all">
    <el-card class="box-card" style="width: 1.5rem">
      <div class="head" @click="$router.push({name:'weightrecord'})">
        <p>体重</p>
        <span>2天前更新</span>
      </div>
      <div class="content">
        <h3>{{ flag ? '44.50' : '***' }}</h3>
        <span>公斤</span>
        <el-icon @click="flag = !flag">
          <component :is="flag ? 'View' : 'Hide'"></component>
        </el-icon>
      </div>
      <el-button round>体脂秤</el-button>
    </el-card>
    <el-card class="box-card" style="width: 1.5rem">
      <div class="head">
        <p>喝水记录</p>
      </div>
      <div class="content">
        <span>还要喝</span>
        <h3>1600</h3>
        <span>毫升</span>
      </div>
    </el-card>
    <el-card class="box-card" style="width: 1.5rem">
      <div class="head">
        <p>经期</p>
        <span>5天前更新</span>
      </div>
      <div class="content">
        <span>距离下次经期</span>
        <h3>21</h3>
        <span>天</span>
      </div>
    </el-card>
    <el-card class="box-card" style="width: 1.5rem">
      <div class="head">
        <p>便便</p>
      </div>
      <div class="content">
        <h3>无</h3>
      </div>
    </el-card>
    <el-card class="box-card" style="width: 1.5rem">
      <div class="head">
        <p>睡眠</p>
      </div>
      <div class="content">
        <span>暂无睡眠记录</span>
      </div>
    </el-card>
    <el-card class="box-card" style="width: 1.5rem">
      <div class="head">
        <p>健康习惯</p>
        <span>00：00 更新</span>
      </div>
      <div class="content">
        <h3>1/1</h3>
      </div>
    </el-card>
    <el-card class="box-card" style="width: 1.5rem" @click="$router.push({name:'sport'})">
      <div class="head">
        <p>运动训练</p>
      </div>
      <div class="content">
        <h3>--</h3>
      </div>
    </el-card>
    <el-card class="box-card" style="width: 1.5rem"> </el-card>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { View, Hide } from '@element-plus/icons-vue'
export default defineComponent({
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    View,
    Hide
  },
  data: function () {
    return {
      flag: true
    }
  }
})
</script>

<style lang="scss" scoped>
.all {
  margin-top: 0.13rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  :deep(.el-card__body) {
    padding: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .el-card {
    padding-left: 0.266rem;
    box-sizing: border-box;
    border-radius: 0.2rem;
    height: 1.28rem;
    border: none;
    box-shadow: none;
    padding-bottom: 0.186rem;

    p {
      font-size: 0.13rem;
      font-weight: bolder;
      color: #3a3d4e;
      margin: 0;
      margin-top: 0.2rem;
      margin-bottom: 0.04rem;
    }

    h3 {
      font-size: 0.14rem;
      color: #394050;
      line-height: 0.12rem;
      margin: 0;
    }

    span {
      font-size: 0.1rem;
      color: #6f7072;
    }

    .content {
      display: flex;
    }
  }

  .el-card:nth-child(2n + 1) {
    margin-right: 0.1rem;
    margin-bottom: 0.1rem;
  }

  .el-card:nth-of-type(1) {
    position: relative;
    background-image: url(../images/xue/01.jpg);
    background-size: 100% 100%;

    .el-icon {
      color: #01bc77;
      margin-left: 0.16rem;
    }

    span {
      margin-top: 0.02rem;
    }

    h3 {
      margin-top: 0.01rem;
    }

    .el-button {
      width: 0.523rem;
      height: 0.243rem;
      border: none;
      border: 0.02rem solid #c1e7da;
      line-height: 0.06rem;
      font-size: 0.11rem;
      color: #07b57a;
      position: absolute;
      top: 0.12rem;
      right: 0.16rem;
    }
  }

  .el-card:nth-of-type(2) {
    background-image: url(../images/xue/02.jpg);
    background-size: 100% 100%;
  }

  .el-card:nth-of-type(3) {
    background-image: url(../images/xue/03.jpg);
    background-size: 100% 100%;
  }

  .el-card:nth-of-type(4) {
    background-image: url(../images/xue/04.jpg);
    background-size: 100% 100%;
  }

  .el-card:nth-of-type(5) {
    background-image: url(../images/xue/05.jpg);
    background-size: 100% 100%;
  }

  .el-card:nth-of-type(6) {
    background-image: url(../images/xue/06.jpg);
    background-size: 100% 100%;
  }

  .el-card:nth-of-type(7) {
    background-image: url(../images/xue/07.jpg);
    background-size: 100% 100%;
  }

  .el-card:nth-of-type(8) {
    background-image: url(../images/xue/08.jpg);
    background-size: 100% 100%;
  }
}
</style>
