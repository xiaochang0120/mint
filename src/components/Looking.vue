<template>
  <h3>大家都在看</h3>
  <el-row>
    <el-card v-for="o in imgdata" :key="o">
      <img :src="o.img" alt="" />
      <span>{{ o.type }}</span>
      <p>{{ o.name }}</p>
    </el-card>
  </el-row>
</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios'
export default defineComponent({
  created() {
    axios({
      url: 'http://localhost:5050/gg'
    }).then((res) => {
      console.log(res.data)
      this.imgdata = res.data
    })
  },
  data() {
    return {
      imgdata: []
    }
  }
})
</script>

<style lang="scss" scoped>
h3 {
  margin: 0.23rem 0 0.14rem 0;
  font-size: 0.12rem;
}

.el-row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .el-card {
    width: 1.52rem;
    height: 1.8rem;
    margin-bottom: 0.14rem;
    border: none;
    box-shadow: none;
    border-radius: 0.2rem;
    box-sizing: border-box;
    padding: 0.08rem;

    :deep(.el-card__body) {
      padding: 0;
    }

    img {
      width: 1.38rem;
      height: 1.12rem;
    }

    span {
      display: inline-block;
      margin-top: 0.13rem;
      font-size: 0.09rem;
      color: #adabb9;
      padding-left: 0.04rem;
    }

    p {
      margin: 0;
      margin-top: 0.09rem;
      font-size: 0.09rem;
      color: #3a3845;
      padding-left: 0.04rem;
    }
  }
}
</style>
