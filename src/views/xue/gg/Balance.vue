<template>

  <div class="box">
    <el-header>
      <el-icon @click="$router.go(-1)">
        <Back />
      </el-icon><span>薄荷健康会员</span>
    </el-header>
    <div class="content">
      <el-carousel :interval="5000" arrow="always" height="100">
        <el-carousel-item v-for="item in swipe" :key="item">
          <h3 text="2xl" justify="center"><img :src="item.url" alt=""></h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios'
import { Back } from '@element-plus/icons-vue'
export default defineComponent({
  components: {
    Back,
  },
  created() {
    axios({
      url: 'http://localhost:5050/swipe'
    }).then((res) => {
      console.log(res.data)
      this.swipe = res.data
    })
  },
  data() {
    return {
      swipe: []
    }
  }
})
</script>

<style lang="scss" scoped>
.box {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  .el-header {
    font-size: 0.12rem;
    padding: 0;
    padding-top: 0.2rem;
    height: 0.53rem;

    .el-icon {
      margin-left: 0.2rem;
      font-size: 0.14rem;
      margin-right: 0.38rem;
    }

    span {
      letter-spacing: 0.04rem;
      display: inline-block;
      height: 0.12rem;
      line-height: 0.12rem;
    }
  }

  .content {
    flex: 1;

    // position: relative;
    .el-carousel--horizontal {
      height: 100%;
      width: 100%;
    }

    :deep(.el-carousel__container) {
      height: 100%;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  .el-carousel {
    :deep(.el-carousel__indicators--horizontal) {
      width: 100%;
      display: flex;
      flex-wrap: nowrap;
      position: fixed;
      top: 11.8%;
      left: 58%;

      :deep(.el-carousel__indicator--horizontal) {
        height: 0.2rem;
      }
    }
  }

  .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

}
</style>