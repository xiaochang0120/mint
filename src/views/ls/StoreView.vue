<template>
  <div class="store">
    <div class="aheader">
      <div class="ahead">
        <i class="iconfont icon-sousuo ic1"></i>
        <input type="text" placeholder="畅爽周日拒绝贴膘 满200减20" />
      </div>
      <i class="iconfont icon-gouwuche2 ic2"></i>
      <i class="iconfont icon-24gf-headset ic3"></i>
    </div>
    <div class="bnav">
      <img src="./images/1_02.png" alt="" />
    </div>
    <div class="cbigbox">
      <div class="ccbox">
        <div class="cbox">
          <img src="./images/2_03.png" alt="" />
          <p>10斤挑战</p>
        </div>
        <div class="cbox">
          <img src="./images/3_03.png" alt="" />
          <p>控卡主食</p>
        </div>
        <div class="cbox">
          <img src="./images/4_03.png" alt="" />
          <p>燃力嗨吃</p>
        </div>
        <div class="cbox">
          <img src="./images/5_03.png" alt="" />
          <p>轻卡小食</p>
        </div>
        <div class="cbox">
          <img src="./images/6_03.png" alt="" />
          <p>智能硬件</p>
        </div>
      </div>
      <div class="ccbox">
        <div class="cbox">
          <img src="./images/7_03.png" alt="" />
          <p>零食任选</p>
        </div>
        <div class="cbox">
          <img src="./images/8_03.png" alt="" />
          <p>&ensp;买1赠1</p>
        </div>
        <div class="cbox">
          <img src="./images/8_03.png" alt="" />
          <p>新人福利</p>
        </div>
        <div class="cbox">
          <img src="./images/9_03.png" alt="" />
          <p>包邮专区</p>
        </div>
        <div class="cbox">
          <img src="./images/10_03.png" alt="" />
          <p>全部分类</p>
        </div>
      </div>
    </div>
    <div class="center">
      <img src="./images/11_03.png" alt=" " class="img1" />
      <div class="d2">
        <div class="dleft">
          <img src="./images/12_03.png" alt="" class="img2" />
          <img src="./images/15_03.png" alt="" class="img5" />
        </div>
        <div class="dright">
          <img src="./images/13_03.png" alt="" class="img3" />
          <img src="./images/14_03.png" alt="" class="img4" />
          <img src="./images/16_03.png" alt="" class="img6" />
        </div>
      </div>
      <img src="./images/17_03.png" alt="" class="img7" />
    </div>
    <img src="./images/18_02.png" alt="" class="img8" />
    <p class="pp">人气推荐</p>

    <div class="fboxContainer">
      <div
        class="fbox"
        v-for="item in banners"
        :key="item"
        @click="$router.push('/view/wq/xm')"
      >
        <img :src="item.img" alt="" />
        <h4>{{ item.text }}</h4>
        <p>{{ item.mz }}</p>
        <div>{{ item.Price }}</div>
        <h5>{{ item.sell }}</h5>
      </div>
    </div>
    <el-footer>
      <van-tabbar active-color="#05bd7d" v-model="active">
        <van-tabbar-item icon="wap-home" @click="$router.push('/')">首页</van-tabbar-item>
        <van-tabbar-item icon="wechat-moments">发现</van-tabbar-item>
        <van-tabbar-item icon="todo-list">记录</van-tabbar-item>
        <van-tabbar-item icon="bag">商店</van-tabbar-item>
        <van-tabbar-item icon="manager">我的</van-tabbar-item>
      </van-tabbar>
    </el-footer>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import axios from '@/service'
export default defineComponent({
  created() {
    axios({
      url: 'http://localhost:5050/bannersLs',
      method: 'get'
    }).then((res) => {
      this.banners = res.data
      console.log(res.data)
    })
  },
  data() {
    return {
      banners: [],
      active: 3
    }
  }
})
</script>

<style lang="scss" scoped>
.store .aheader {
  float: left;
}
.store .aheader .ahead {
  background-color: #eff0f2;
  width: 2.3rem;
  height: 0.35rem;
  margin: 0.28rem 0 0.18rem 0.2rem;
  float: left;
  border-radius: 0.2rem;
}

.store .aheader .ahead .ic1 {
  font-size: 0.18rem;
  color: #03ca89;
  margin: 0.08rem 0.11rem 0.08rem 0.1rem;
  display: block;
  float: left;
}
.store .aheader .ahead input {
  margin-top: 0.11rem;
  height: 0.13rem;
  width: 1.83rem;
  border: none;
  font-size: 0.11rem;
  background-color: #eff0f2;
}
.store .aheader .ic2 {
  font-size: 0.2rem;
  color: #697281;
  margin: 0.34rem 0.24rem 0.27rem 0.15rem;
  display: block;
  float: left;
}
.store .aheader .ic3 {
  font-size: 0.2rem;
  color: #697281;
  margin: 0.34rem 0.24rem 0.27rem 0;
  display: block;
  float: left;
}
.store .bnav img {
  height: 1.75rem;
  width: 3.6rem;
}
.store .cbigbox {
  width: 3.33rem;
  height: 1.23rem;
  margin: 0.06rem 0.24rem 0.06rem 0.05rem;
}
.store .cbigbox .ccbox {
  width: 3.31rem;
  height: 0.55rem;
  float: left;
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
}
.store .cbigbox .ccbox .cbox {
  float: left;
  width: 0.49rem;
  height: 0.53rem;
  margin-left: 0.16rem;
}
.store .cbigbox .ccbox .cbox img {
  width: 0.31rem;
  height: 0.31rem;
  margin-left: 0.1rem;
  margin-bottom: 0.12rem;
}
.store .cbigbox .ccbox .cbox p {
  font-size: 0.09rem;
}
.store .center {
  width: 3.26rem;
  margin: 0.4rem auto;
}
.store .center .img1 {
  width: 3.26rem;
  height: 0.86rem;
  display: block;
}
.store .center .d2 {
  width: 3.25rem;
  height: 3.49rem;
  margin-top: 0.14rem;
}
.store .center .d2 .dleft {
  width: 1.57rem;
  height: 2.37rem;
  float: left;
}
.store .center .d2 .dleft .img2 {
  width: 1.56rem;
  height: 2.37rem;
}
.store .center .d2 .dright {
  width: 1.56rem;
  height: 2.37rem;
  float: right;
}
.store .center .d2 .dright .img3 {
  width: 1.56rem;
  height: 1.15rem;
}
.store .center .d2 .dright .img4 {
  width: 1.56rem;
  height: 1.15rem;
  display: block;
  margin-top: 0.1rem;
}
.store .center .d2 .dleft .img5 {
  width: 1.57rem;
  height: 0.98rem;
  margin-top: 0.1rem;
}
.store .center .d2 .dright .img6 {
  width: 1.57rem;
  height: 0.98rem;
  margin-top: 0.1rem;
}
.store .center .img7 {
  width: 3.26rem;
  height: 1.08rem;
  margin-top: 0.18rem;
}
.store .img8 {
  width: 3.59rem;
  height: 0.38rem;
}
.store .pp {
  font-size: 0.1rem;
  margin: 0.32rem 0 0.16rem 0.18rem;
}
.store .fboxContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 0.17rem;
}
.store .fboxContainer .fbox {
  width: 1.56rem;
  height: 2.6rem;
}
.store .fboxContainer .fbox img {
  width: 1.52rem;
  height: 1.56rem;
}
.store .fboxContainer .fbox h4 {
  font-size: 0.09rem;
}
.store .fboxContainer .fbox div {
  color: #f16b62;
  font-size: 0.07rem;
  border-radius: 0.1rem 0.1rem 0.1rem 0;
  margin-top: 0.13rem;
  width: 0.43rem;
  height: 0.16rem;
}
.store .fboxContainer .fbox p {
  font-size: 0.07rem;
  color: #ffffff;
  float: left;
  margin-top: 0.1rem;
  display: block;
  width: 0.43rem;
  height: 0.16rem;
  background-color: #fe9b0a;
}
.store .fboxContainer .fbox h5 {
  color: #b2b1b7;
  font-size: 0.07rem;
  float: right;
}
.el-footer {
  width: 100%;
  height: 0.78rem;
  position: fixed;
  bottom: 0;
  .store .van-tabbar {
    border-top: 1px solid #faf8fd;
    height: 0.56rem;
    padding-top: 22px;
    align-items: flex-start;
  }
}
</style>
