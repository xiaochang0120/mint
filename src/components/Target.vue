<template>
  <el-card class="xcard">
    <div class="bt" @click="reportHealth($event)">
      <h3>我的目标</h3>
      <span>单位：公斤</span><span>健康报告</span
      ><i class="iconfont">&#xe62e;</i>
    </div>
    <div class="recordtz" >
      <el-progress
        :text-inside="true"
        :stroke-width="12"
        :percentage="48"
        status="exception"
        @click="$router.push({ path: '/weightrecord' })"
      >
        <div class="qing"></div>
        <div class="gdt">
          <span>保持中</span>
        </div>
        <div class="zhong"></div>
      </el-progress>
      <div class="tz">
        <div class="shuzi">
          <h3>{{ flag ? '42.30' : '***' }}</h3>
          <span>保持下限</span>
        </div>
        <div class="shuzi">
          <div class="zz">
            <h3>{{ flag ? '44.5' : '***' }}</h3>
            <el-icon @click="flag = !flag"
              ><component :is="flag ? 'View' : 'Hide'"></component
            ></el-icon>
          </div>
          <span>当前</span>
        </div>
        <div class="shuzi">
          <h3>{{ flag ? '46.70' : '***' }}</h3>
          <span>保持上限</span>
        </div>
      </div>
    </div>
  </el-card>
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
  },
  methods: {
    // recordHealth(e) {
    //   // let jltz = document.querySelector('.recordtz')
    //   if (e.target.parentNode.parentNode.className == 'el-progress el-progress--line is-exception el-progress--text-inside') {
    //     this.$router.push({ path: '/weightrecord' })
    //   }
    //   console.log(e.target)
    //   console.log(e.target.parentNode.parentNode.className)
    // },
    reportHealth(e) {
      if (e.currentTarget.className == 'bt') {
        this.$router.push({ path: '/weightreport' })
      }
     
    }
  }
})
</script>

<style lang="scss" scoped>
.xcard {
  width: 3.21rem;
  height: 1.41rem;
  border-radius: 0.2rem;
  box-shadow: none;
  border: none;
  margin-top: 0.21rem;

  .bt {
    display: flex;
    padding: 0.09rem 0.02rem 0 0.06rem;
    h3 {
      margin: 0;
      font-size: 0.12rem;
      letter-spacing: 0.03rem;
      color: #363948;
      margin-right: 0.12rem;
    }
    span {
      font-size: 0.11rem;
      color: #c2c1c7;
      letter-spacing: 0.03rem;
    }
    span:nth-of-type(2) {
      margin-right: 0.1rem;
      margin-left: 0.6rem;
      letter-spacing: 0.01rem;
    }
    .iconfont {
      font-size: 0.11rem;
      color: #c2c1c7;
    }
  }
  .el-progress {
    margin-top: 0.27rem;
    width: 2.4rem;
    margin-left: 0.24rem;
    position: relative;
    .qing {
      width: 0.05rem;
      height: 0.05rem;
      background-color: #fffefc;
      border-radius: 50%;
      position: absolute;
      right: 0.74rem;
      top: 0.035rem;
    }
    :deep(.el-progress-bar__outer) {
      background-color: #b9f4e0;
      overflow: visible;

      .gdt {
        text-align: center;
        line-height: 0.17rem;
        width: 0.39rem;
        height: 0.17rem;
        background-color: #fefefe;
        position: absolute;
        right: -0.195rem;
        top: -0.04rem;
        color: #2aaf82;
        border-radius: 0.1rem;
        box-shadow: 0 0 0.1rem 0.1rem #d6f6eb;
        z-index: 999;
        span {
          display: inline-block;
        }
      }
    }
    .zhong {
      width: 0.05rem;
      height: 0.05rem;
      background-color: #f9fdfc;
      border-radius: 50%;
      position: absolute;
      right: -0.74rem;
      top: 0.035rem;
    }
  }
  .tz {
    display: flex;
    justify-content: space-around;
    padding: 0 0.35rem 0 0.25rem;
    .shuzi {
      display: flex;
      flex-direction: column;
      text-align: center;

      .zz {
        display: flex;

        h3 {
          font-size: 0.15rem;
          margin-top: 0.2rem;
          line-height: 0;
          margin-right: 0.04rem;
        }
        span {
          padding-right: 0.3rem;
        }
        .el-icon {
          margin-top: 0.125rem;
        }
      }
      h3 {
        line-height: 0;
        margin-top: 0.24rem;
        font-size: 0.11rem;
      }
      span {
        font-size: 0.085rem;
        color: #c2c1c7;
      }
    }
  }
}
:deep(.el-progress.is-exception .el-progress-bar__inner) {
  background-color: #00d688;
}
</style>
