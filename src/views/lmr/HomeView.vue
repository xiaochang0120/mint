<template>
  <div class="home">
    <header>
      <span>我的</span>
      <el-icon style="margin-left: 0.73rem; font-size: 0.19rem"
        ><Setting
      /></el-icon>
      <el-icon style="margin-left: 0.24rem; font-size: 0.17rem"
        ><Message
      /></el-icon>
    </header>
    <div class="index">
      <div class="msg">
        <div class="leftBox">
          <img src="./img/portrait.jpg" alt="" /><span>{{ name }}</span>
        </div>
        <div class="rightBox">
          <p>个人中心</p>
          <p style="padding: 0.05rem 0.07rem 0 0.2rem">
            <el-icon><ArrowRight /></el-icon>
          </p>
        </div>
      </div>
      <div class="count">
        <p>积分</p>
        <p>优惠券</p>
        <p>勋章</p>
      </div>
      <div class="super">
        <div class="top">
          <img src="./img/supImg_03.gif" alt="" />
          <span style="color: #fff; padding-right: 1.2rem">薄荷·超级会员</span>
          <i style="font-style: normal">立即开通</i>
        </div>
        <div class="btm">
          <div style="border-right: 1px solid #dbddd0; padding-right: 0.16rem">
            <h2>智能方案</h2>
            <p>个性化食谱定制</p>
          </div>
          <div style="border-right: 1px solid #dbddd0; padding-right: 0.16rem">
            <h2>饮食建议</h2>
            <p>多维度营养分析</p>
          </div>
          <div>
            <h2>营养课程</h2>
            <p>个性化食谱定制</p>
          </div>
        </div>
      </div>
      <div class="ind">
        <div>
          <p @click="$router.push({ name: 'myorder' })">
            <i class="iconfont">&#xe61a;</i><span>订单</span>
          </p>
          <p><i class="iconfont">&#x344b;</i><span>购物车</span></p>
          <p><i class="iconfont">&#xe643;</i><span>我的收藏</span></p>
          <p><i class="iconfont">&#xe65a;</i><span>我的食物</span></p>
        </div>
        <div>
          <p>
            <i class="iconfont" style="color: #3cc3fb">&#xe6e0;</i
            ><span>基本信息</span>
          </p>
          <p>
            <i style="color: #fc955a" class="iconfont">&#xe625;</i
            ><span>薄荷花田</span>
          </p>
          <p>
            <i style="color: #4ac6fc" class="iconfont">&#xe627;</i
            ><span>智能设备</span>
          </p>
          <p>
            <i style="color: #03c48b" class="iconfont">&#xe61f;</i
            ><span>兑换</span>
          </p>
        </div>
      </div>
      <div class="center">
        <p>
          <i class="iconfont">&#xe810;</i>
          <span>健康方案</span>
          <b class="iconfont">&#xe775;</b>
        </p>
        <p>
          <i class="iconfont">&#xe622;</i>
          <span>饮食方案</span>
          <b class="iconfont">&#xe775;</b>
        </p>
        <p>
          <i class="iconfont">&#xe65a;</i>
          <span>本周食谱</span>
          <b class="iconfont">&#xe775;</b>
        </p>
        <p>
          <i class="iconfont">&#xe62f;</i>
          <span>数据统计</span>
          <b class="iconfont">&#xe775;</b>
        </p>
        <p>
          <i class="iconfont">&#xe6f3;</i>
          <span>上周小结</span>
          <b class="iconfont">&#xe775;</b>
        </p>
      </div>
      <div class="center">
        <p>
          <i class="iconfont">&#xe677;</i>
          <span>健康测评</span>
          <b class="iconfont">&#xe775;</b>
        </p>
        <p>
          <i class="iconfont">&#xe628;</i>
          <span>体检档案</span>
          <b class="iconfont">&#xe775;</b>
        </p>
        <p>
          <i class="iconfont">&#xe635;</i>
          <span>基因检测</span>
          <b class="iconfont">&#xe775;</b>
        </p>
        <p>
          <i class="iconfont">&#xe552;</i>
          <span>家人健康</span>
          <b class="iconfont">&#xe775;</b>
        </p>
        <p>
          <i class="iconfont">&#xe626;</i>
          <span>营养顾问</span>
          <b class="iconfont">&#xe775;</b>
        </p>
        <p>
          <i class="iconfont">&#xe64a;</i>
          <span>帮助反馈</span>
          <b class="iconfont">&#xe775;</b>
        </p>
      </div>
    </div>
    <footer>
      <div @click="$router.push('/')">
        <i class="iconfont">&#xe750;</i>
        <p>首页</p>
      </div>
      <div>
        <i class="iconfont">&#xe8e7;</i>
        <p>发现</p>
      </div>
      <div>
        <i class="iconfont">&#xe6f3;</i>
        <p>记录</p>
      </div>
      <div>
        <i class="iconfont">&#xeabc;</i>
        <p>商店</p>
      </div>
      <div style="color: #63d099">
        <i class="iconfont">&#xe626;</i>
        <p>我的</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Setting, Message, ArrowRight } from '@element-plus/icons-vue'
export default defineComponent({
  components: {
    Setting,
    Message,
    ArrowRight
  },
  data() {
    return {
      name: 'BH468469151'
    }
  }
})
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.home {
  background-color: #f6f7fb;
  header {
    font-size: 0.15rem;
    height: 0.49rem;
    line-height: 0.49rem;
    text-align: right;
    padding-right: 0.27rem;
    width: 100%;
    position: fixed;
    background-color: #fff;
  }
  .index {
    width: 3.2rem;
    margin: auto;
    padding: 0.49rem 0 0.6rem 0;

    .msg {
      width: 3.21rem;
      height: 0.91rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.12rem;
      background-color: #fff;
      .leftBox {
        display: flex;
        align-items: center;
        img {
          display: inline-block;
          width: 0.56rem;
          height: 0.56rem;
          margin-left: 0.11rem;
          margin-right: 0.14rem;
        }
      }
      .rightBox {
        color: #abaaaf;
        display: flex;
        align-items: center;
      }
    }
    .count {
      height: 0.6rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 0.11rem;
      background-color: #fff;
      border-radius: 0 0 0.2rem 0.2rem;
    }
    .super {
      height: 1.05rem;
      background-color: #373d55;
      border-radius: 0.2rem;
      overflow: hidden;
      .top {
        height: 0.37rem;
        font-size: 0.1rem;
        background-color: #43485e;
        display: flex;
        align-items: center;
        img {
          height: 0.19rem;
          margin: 0 0.12rem 0 0.15rem;
        }
        i {
          display: inline-block;
          width: 0.62rem;
          height: 0.21rem;
          background-color: #fff5cf;
          border-radius: 0.5rem;
          text-align: center;
          line-height: 0.21rem;
          color: #9e8f66;
        }
      }
      .btm {
        display: flex;
        justify-content: space-around;
        padding-top: 0.15rem;
        color: #ffeedb;
        h2 {
          font-size: 0.13rem;
          font-weight: 500;
          margin-bottom: 0.07rem;
        }
        p {
          font-size: 0.03rem;
        }
      }
    }
    .ind {
      height: 1.72rem;
      border-radius: 0.2rem;
      margin-top: 0.2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      background-color: #fff;
      div {
        display: flex;
        justify-content: space-around;
        p {
          display: flex;
          flex-direction: column;
          align-items: center;
          i {
            display: block;
            font-size: 0.3rem;
            color: #04cb90;
          }
          span {
            display: block;
            width: 0.48rem;
            font-size: 0.11rem;
            margin-top: 0.1rem;
            text-align: center;
          }
        }
      }
    }
    .center {
      border-radius: 0.2rem;
      background-color: #fff;
      margin: 0.2rem 0;
      p:last-of-type {
        border-bottom: none;
      }
      p {
        line-height: 0.5rem;
        margin: 0 0.14rem 0 0.19rem;
        border-bottom: 1px solid #f0f0f0;

        i {
          font-size: 0.17rem;
          color: #00f1a2;
        }
        span {
          font-size: 0.13rem;
          margin: 0 1.75rem 0 0.19rem;
        }
        b {
          font-weight: normal;
          color: #e1e1e3;
        }
      }
    }
  }
  footer {
    height: 0.6rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #dfdee4;
      i {
        font-size: 0.2rem;
      }
      p {
        font-size: 0.1rem;
      }
    }
  }
}
</style>
