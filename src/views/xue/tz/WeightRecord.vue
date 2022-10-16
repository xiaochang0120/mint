<template>
  <div class="box">
    <el-header>
      <el-icon @click="$router.go(-1)">
        <Back />
      </el-icon><span>体重记录</span>
    </el-header>

    <el-main>
      <div class="bt">
        <h3>体重进度</h3>
        <span>重设目标</span>
      </div>
      <el-card>
        <div class="buttonbox" @click="cut($event)">
          <div class="gram"><span>斤</span></div>
          <div class="kilogram"><span>公斤</span></div>
        </div>
        <div class="text">
          <h2>比原来重</h2>
          <h1>0.00</h1>
          <h2 class="innertext">公斤</h2>
        </div>
        <el-progress :text-inside="true" :stroke-width="8" :percentage="50" status="exception">
          <div class="qing"></div>
          <div class="gdt">
            <span>保持第12天</span>
          </div>
          <div class="zhong"></div>
        </el-progress>
        <div class="sc">
          <el-card v-for="o in smallcard" :key="o" class="smallcard">
            <div class="top">
              <h4>{{ o.header }}</h4>
              <i class="iconfont">&#xe61c;</i>
            </div>
            <p>{{ o.time }}</p>
            <div class="bottom">{{ o.tz }}</div>
          </el-card>
        </div>
      </el-card>
      <WeightProgress />
      <div class="bt">
        <h3>更多选项</h3>
      </div>
      <el-card>
        <li v-for="i in titles" :key="i">
          <p>{{ i.title }}</p>
          <el-icon>
            <ArrowRightBold />
          </el-icon>
        </li>
      </el-card>
    </el-main>

    <div>
      <el-button type="primary" style="margin-left: 16px" @click="showDrawer()">
        记录体重
      </el-button>

      <el-drawer v-model="drawer" title="I am the title" :with-header="false">
        <span>Hi there!</span>
      </el-drawer>
    </div>

    <el-footer @click="change($event)">
      <aside><i class="iconfont">&#xe616;</i><span>进度</span></aside>
      <aside><i class="iconfont">&#xe8bc;</i><span>照片</span></aside>
      <aside><i class="iconfont">&#xe6a6;</i><span>日历</span></aside>
    </el-footer>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
// import { ref } from 'vue'
import axios from 'axios'
import { Back, ArrowRightBold } from '@element-plus/icons-vue'
import WeightProgress from '@/components/WeightProgress.vue'
export default defineComponent({
  data() {
    return {
      drawer: false
    }
  },
  components: {
    Back,
    WeightProgress,
    ArrowRightBold
  },
  created() {
    axios({
      url: 'http://localhost:5050/scard'
    }).then((res) => {
      console.log(res.data)
      this.smallcard = res.data
    })
    axios({
      url: 'http://localhost:5050/option'
    }).then((res) => {
      console.log(res.data)
      this.titles = res.data
    })
  },
  mounted() {
    let aside = document.querySelectorAll('aside')
    aside[0].children[0].style.color = '#0eb862'
    aside[0].children[1].style.color = '#28ad80'
  },
  data() {
    return {
      smallcard: [],
      titles: []
    }
  },
  methods: {
    showDrawer() {
      this.drawer = !this.drawer
      console.log('点击---->', this.drawer)
    },
    change(e) {
      let aside = document.querySelectorAll('aside')
      for (let i = 0; i < aside.length; i++) {
        aside[i].children[0].style.color = '#353b55'
        aside[i].children[1].style.color = '#6e707c'
      }
      if (e.target.tagName == 'ASIDE') {
        e.target.children[0].style.color = '#0eb862'
        e.target.children[1].style.color = '#28ad80'
      }
      if (e.target.tagName == 'I') {
        e.target.style.color = '#0eb862'
        e.target.nextSibling.style.color = '#28ad80'
      }
      if (e.target.tagName == 'SPAN') {
        e.target.previousSibling.style.color = '#28ad80'
        e.target.style.color = '#0eb862'
      }
    },
    cut(e) {
      let text = document.querySelector('.innertext')
      console.log(text)
      if (e.target.parentNode.className == 'gram') {
        e.target.parentNode.style.background = ' #02ba7a'
        e.target.style.color = ' #a0eed3'
        e.target.parentNode.nextSibling.style.background = '#f7f7f9'
        e.target.parentNode.nextSibling.children[0].style.color = '#bcbdc1'
        text.innerHTML = '斤'
      }
      if (e.target.className == 'gram') {
        e.target.style.background = ' #02ba7a'
        e.target.children[0].style.color = ' #a0eed3'
        e.target.nextSibling.style.background = '#f7f7f9'
        e.target.nextSibling.children[0].style.color = '#bcbdc1'
        text.innerHTML = '斤'
      }
      if (e.target.parentNode.className == 'kilogram') {
        e.target.parentNode.style.background = ' #02ba7a'
        e.target.style.color = ' #a0eed3'
        e.target.parentNode.previousSibling.style.background = '#f7f7f9'
        e.target.parentNode.previousSibling.children[0].style.color = '#bcbdc1'
        text.innerHTML = '公斤'
      }
      if (e.target.className == 'kilogram') {
        e.target.style.background = ' #02ba7a'
        e.target.children[0].style.color = ' #a0eed3'
        e.target.previousSibling.style.background = '#f7f7f9'
        e.target.previousSibling.children[0].style.color = '#bcbdc1'
        text.innerHTML = '公斤'
      }
    }
  },
  updated() {
    console.log(this.drawer)
  }
})
</script>

<style lang="scss" scoped>
.box {
  height: 100%;
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

  .el-main {
    flex: 1;
    padding: 0 0.2rem;
    overflow: auto;
    background-color: #f6f7fb;

    .bt {
      margin-top: 0.22rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        font-size: 0.11rem;
        color: #22ac7b;
      }

      h3 {
        margin: 0;
        font-size: 0.15rem;
      }
    }

    .el-card {
      box-sizing: border-box;
      margin-top: 0.186rem;
      border: none;
      border-radius: 0.2rem;
      box-shadow: none;

      :deep(.el-card__body) {
        padding: 0;
      }
    }

    .el-card:nth-child(2) {
      .buttonbox {
        margin-top: 0.166rem;
        margin-left: 0.15rem;
        width: 0.843rem;
        height: 0.23rem;
        background-color: #f7f7f9;
        border-radius: 0.1rem;
        display: flex;

        div {
          width: 0.426rem;
          height: 0.23rem;
          border-radius: 0.1rem;
          text-align: center;

          span {
            font-size: 0.08rem;
            color: #bcbdc1;
          }
        }

        div:nth-child(2) {
          background: #02ba7a;

          span {
            color: #a0eed3;
          }
        }
      }

      .text {
        margin-top: 0.286rem;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;

        h2 {
          margin: 0;
          font-size: 0.14rem;
          color: #3a3c55;
        }

        h1 {
          margin: 0;
          font-size: 0.203rem;
          color: #02bd79;
          padding: 0 0.11rem;
        }
      }

      .el-progress {
        margin-bottom: 0.173rem;
        margin-top: 0.27rem;
        height: 0.07rem;
        width: 2.7rem;
        margin-left: 0.24rem;
        position: relative;

        .qing {
          width: 0.05rem;
          height: 0.05rem;
          background-color: #fffefc;
          border-radius: 50%;
          position: absolute;
          right: 0.9rem;
          top: 0.01rem;
        }

        :deep(.el-progress-bar__inner) {
          background-color: #00d384;
        }

        :deep(.el-progress-bar__outer) {
          background-color: #b9f4e0;
          overflow: visible;

          .gdt {
            text-align: center;
            line-height: 0.2rem;
            width: 0.65rem;
            height: 0.213rem;
            background-color: #fefefe;
            position: absolute;
            right: -0.325rem;
            top: -0.08rem;
            color: #2aaf82;
            border-radius: 0.1rem;
            box-shadow: 0 0 0.1rem 0.1rem #d6f6eb;
            z-index: 999;

            span {
              display: inline-block;
              font-size: 0.1rem;
            }
          }
        }

        .zhong {
          width: 0.05rem;
          height: 0.05rem;
          background-color: #f9fdfc;
          border-radius: 50%;
          position: absolute;
          right: -0.9rem;
          top: 0.01rem;
        }
      }

      .sc {
        box-sizing: border-box;
        padding: 0 0.21rem;
        display: flex;
        width: 100%;
        justify-content: space-between;

        .smallcard {
          box-sizing: border-box;
          padding: 0.12rem 0.13rem;
          background-color: #f2f9f2;
          width: 1.346rem;
          height: 1.033rem;
          margin-bottom: 0.2rem;

          p {
            color: #a7abac;
            font-size: 0.09rem;
            margin: 0;
            margin-bottom: 0.32rem;
          }

          .top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.07rem;

            h4 {
              margin: 0;
              font-size: 0.09rem;
              color: #37414a;
            }

            .iconfont {
              color: #0bbb7b;
              font-size: 0.156rem;
            }
          }

          .bottom {
            width: 100%;
            display: flex;
            justify-content: center;
            color: #04b877;
            font-size: 0.13rem;
            font-weight: bolder;
          }
        }
      }
    }

    .el-card:nth-child(5) {
      padding: 0 0.17rem;
      margin-bottom: 0.8rem;

      li {
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 0.5rem;
        border-bottom: 0.02rem solid #f8f8f8;

        p {
          margin: 0;
          font-size: 0.12rem;
          color: #35374e;
          letter-spacing: 0.03rem;
        }

        .el-icon {
          color: #a9aabc;
          font-size: 0.12 rem;
        }
      }

      li:nth-of-type(3) {
        border: none;
      }
    }
  }

  .el-button {
    width: 1.65rem;
    height: 0.49rem;
    background-color: #02bd79;
    font-size: 0.1rem;
    letter-spacing: 0.02rem;
    color: #e1fff3;
    border: none;
    border-radius: 0.25rem;
    position: fixed;
    bottom: 0.776rem;
    left: 0.973rem;
    outline: none;
  }

  .el-footer {
    height: 0.52rem;
    border-top: 0.02rem solid #f0f1f5;
    padding: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    aside {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;

      .iconfont {
        font-size: 0.2rem;
        color: #353b55;
        font-weight: bold;
      }

      span {
        display: inline-block;
        margin-top: 0.06rem;
        font-size: 0.1rem;
        color: #6e707c;
      }
    }
  }

  .bt:nth-child(4) {
    margin-top: 0.43rem;
    margin-bottom: 0.18rem;
  }
}
</style>
