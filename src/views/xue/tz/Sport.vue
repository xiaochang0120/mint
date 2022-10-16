<template>
  <div class="box">
    <el-header>
      <el-icon @click="$router.go(-1)">
        <Back />
      </el-icon><span>运动训练</span>
    </el-header>
    <el-main>
      <div><img src="./../../../images/xue/sport.jpg" alt="" /></div>
    </el-main>
  </div>
</template>
 
<script>
import { defineComponent } from 'vue'
import { Back } from '@element-plus/icons-vue'
export default defineComponent({
  components: {
    Back,
  },
})
</script>
 
<style lang="scss" scoped>
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

.el-main {
  padding: 0;
  flex: 1;
  overflow: auto;

  img {
    width: 3.6rem;
  }
}
</style>