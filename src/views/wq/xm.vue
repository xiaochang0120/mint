<template>
  <div>
    <!-- 分享弹出层 -->
    <van-share-sheet
      v-model:show="showShare"
      :options="options"
      @select="onSelect"
    />
    <van-popup
      closeable
      round
      close-icon="cross"
      position="bottom"
      :style="{ width: '100%' }"
      v-model:show="show"
    >
      <div class="popbox">
        <div class="popboxtop">
          <div class="popboxtopimg">
            <img :src="imgUrl1" />
          </div>
          <div class="popboxtopright">
            <div class="popboxtopprice">{{ two.popboxtopprice }}</div>
            <div class="popboxtopfont">{{ two.popboxtopfont }}</div>
          </div>
        </div>
        <div class="gg">
          <div class="ggspan">*规格</div>
          <div class="gglx" v-for="item in vforcar" :key="item.id">
            <el-row>
              <el-button class="gglxbt" type="primary" round>{{
                item.font
              }}</el-button></el-row
            >
          </div>
          <div class="popboxtopbottom">
            <div class="gmsl">
              <div>购买数量</div>
              <div><van-stepper v-model="value" /></div>
            </div>
            <div @click="showPopup" class="qr">确认添加</div>
          </div>
        </div>
      </div>
    </van-popup>

    <div id="top">
      <div class="topleft">
        <el-icon :size="26" @click="$router.push({name:'storeLs'})"><Back color="#fff" /></el-icon>
      </div>
      <div class="topright">
        <el-icon :size="26"><Shop color="#fff" /></el-icon>
        <el-icon :size="26" @click="showShare = true"
          ><UploadFilled color="#fff"
        /></el-icon>
      </div>
    </div>
    <!-- 轮播图 -->
    <div id="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in banner" :key="item.id">
          <img :src="item.imgUrl"
        /></van-swipe-item>
      </van-swipe>
    </div>
    <!-- 价格 -->
    <div id="price">
      <div class="price1">
        <div class="newprice">{{ two.newprice }}</div>
        <div class="oldprice">{{ two.oldprice }}</div>
      </div>
      <div class="priceSpan">{{ two.pricespan }}</div>
      <div class="pricet0">
        <span class="pricebox">{{ two.pricebox }}</span>
      </div>
      <div class="pricebm">
        <div class="pricebmleft">{{ two.pricebmleft }}</div>
        <div class="pricebmright">{{ two.pricebmright }}</div>
      </div>
    </div>
    <!-- 优惠 -->
    <div id="discount">
      <div class="dctitle">优惠</div>
      <div class="mz">
        <div class="mzleft">{{ two.mzleft }}</div>
        <div class="mzright">{{ two.mzright }}</div>
      </div>
      <div class="mj">
        <div class="mjleft">{{ two.mjleft }}</div>
        <div class="mjright">{{ two.mjright }}</div>
      </div>
      <div class="bd">
        <div class="bdleft">{{ two.bdleft }}</div>
        <div class="bdright">
          {{ two.bdright }}
          <span class="bdrightname">
            <span>{{ two.bdrightspan }}</span
            >{{ two.bdrightname }}
          </span>
        </div>
        <span class="bdtz">></span>
      </div>
    </div>
    <!-- 规格参数 -->
    <div id="parameter">
      <div class="prtitle">规格参数</div>
      <div class="select">
        <div class="selectleft">请选择:</div>
        <span class="selecttz" @click="showPopup">></span>

        <div class="selectright">{{ two.selectright }}</div>
      </div>
      <div class="introduce">
        {{ two.introduce }}
      </div>
      <div class="parameterbm">
        <div
          class="parameterbmzt"
          v-for="item in parameterbmfont"
          :key="item.id"
        >
          <i class="parameterbmico">
            <el-icon><CircleCheck /></el-icon>
          </i>
          <span class="parameterbmfont">{{ item.name }}</span>
        </div>
      </div>
    </div>

    <!-- 商品评价 -->
    <div id="evaluate">
      <div class="evaluatetitle">商品评价({{ two.evaluatetitle }})</div>
      <!-- 头像 -->
      <div class="photo">
        <div class="demo-type">
          <div>
            <el-space
              ><el-avatar :src="two.demotype" />
              <span class="photospan">{{ two.photospan }}</span></el-space
            >
          </div>
          <div class="pj">{{ two.pj }}</div>
        </div>
      </div>
      <!-- 评论 -->
      <div class="comment">
        <div class="commentspan">
          {{ two.commentspan }}
        </div>
        <div><img :src="two.commentphoto" alt="" /></div>
      </div>
      <div class="morecomment">
        <router-link to="/view/wq/pl">查看更多评论</router-link>
      </div>
    </div>
    <!-- 相关商品 -->
    <div id="related">
      <div class="parameter">相关商品</div>
      <!-- 轮播图 -->
      <swiper
        :modules="modules"
        :slides-per-view="3"
        :slides-per-group="3"
        :space-between="50"
        :navigation="navigation"
        :pagination="pagination"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="item in banner2" :key="item.id">
          <div class="slideshow">
            <img :src="item.imgUrl" alt="" />

            <div class="slideshowtitle">{{ item.title }}</div>
            <div class="slideshowprice">
              <span class="slideshowpricespan">{{ item.price }}</span>
              <div class="slideshowpricediscount">{{ item.discount }}</div>
            </div>
          </div></swiper-slide
        >
      </swiper>
    </div>
    <!-- 上拉查看图文详情 -->
    <div id="particulars">
      <div class="particularsfont">上拉查看图文详情</div>
      <div class="longimg">
        <img :src="two.longimg" alt="" />
      </div>
    </div>
    <!-- 底部 -->
    <div id="bottom">
      <div class="shoppingcart">
        <el-icon><ShoppingTrolley /></el-icon>
        <span>购物车</span>
      </div>
      <div class="service">
        <el-icon><Phone /></el-icon>
        <span>客服</span>
      </div>
      <div class="menubar">
        <div class="bottombox">
          <div class="bottomboxleft" @click="showPopup">加入购物车</div>
          <div class="bottomboxright">立即购买</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'
import axios from 'axios'
import { Navigation, Pagination } from 'swiper'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import {
  Back,
  Shop,
  UploadFilled,
  CircleCheck,
  ShoppingTrolley,
  Phone
} from '@element-plus/icons-vue'
export default defineComponent({
  created() {
    axios({

      url: 'http://localhost:5050/oneWq'
    }).then((res) => {
      this.two = res.data
      this.banner = res.data.banner
      this.banner2 = res.data.banner2
      this.imgUrl1 = res.data.banner2[0].imgUrl
      this.vforcar = res.data.vforcar
      this.parameterbmfont = res.data.parameterbmfont
    })
  },

  data() {
    return {
      banner: [],
      two: '',
      parameterbmfont: [],
      banner2: [],
      show: false,
      imgUrl1: '',
      value: 1,
      vforcar: []
    }
  },
  methods: {
    showPopup() {
      this.show = !this.show
    }
  },
  components: {
    Back,
    Shop,
    UploadFilled,
    CircleCheck,
    Swiper,
    SwiperSlide,
    ShoppingTrolley,
    Phone
  },
  // swiper轮播图
  setup() {
    const showShare = ref(false)
    const options = [
      { name: '微博', icon: 'weibo' },
      { name: '微信', icon: 'wechat' },
      { name: '朋友圈', icon: 'wechat-moments' },
      { name: 'QQ', icon: 'qq' }
    ]
    const onSelect = (option) => {
      // eslint-disable-next-line no-undef
      Toast(option.name)
      showShare.value = false
    }
    const navigation = {
      nextEl: '.icon-next',
      prevEl: '.icon-pre',
      disabledClass: 'disable'
    }

    const pagination = {
      clickable: true,
      bulletClass: 'dot',
      bulletActiveClass: 'actived',
      el: '.pagination'
    }
    const onSwiper = () => {
      // console.log(swiper)
    }
    const onSlideChange = () => {
      // console.log('slide change')
      // 弹出层
    }
    return {
      navigation,
      pagination,
      modules: [Navigation, Pagination],
      onSwiper,
      onSlideChange,
      options,
      onSelect,
      showShare
    }
  }
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html {
  font-size: 27.78vw;
}
body {
  font-size: 12px;
}
html,
body {
  height: 100%;
}
#top {
  height: 0.44rem;
  width: 3.6rem;

  position: fixed;
  z-index: 999;
}
#top .topleft {
  width: 0.3rem;
  height: 0.44rem;

  text-align: center;
  line-height: 0.8rem;
  margin-left: 0.2rem;
  float: left;
}
#top .topright {
  width: 0.6rem;
  height: 0.44rem;

  text-align: center;
  line-height: 0.8rem;
  margin-right: 0.2rem;
  float: right;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
/* 轮播图 */
#banner {
  width: 100%;
  height: 3.36rem;
  float: left;
}
#banner img {
  width: 100%;
  height: 3.36rem;
}
.my-swipe {
  width: 100%;
  overflow: hidden;
}
.my-swipe .van-swipe-item {
  width: 3.6rem;
  height: 3.36rem;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  float: left;
}
/* 价格 */
#price {
  width: 100%;
  height: 1.98rem;

  float: left;
}
#price .price1 {
  width: 100%;
  height: 0.49rem;
}
#price .price1 .newprice {
  width: 0.36rem;
  height: 0.18rem;
  font-size: 0.18rem;
  color: #fa6d66;
  padding-left: 0.18rem;
  padding-top: 0.18rem;
  float: left;
}
#price .price1 .oldprice {
  width: 0.2rem;
  height: 0.1rem;
  font-size: 0.1rem;
  color: #aaa9b1;
  padding-left: 0.08rem;
  padding-top: 0.24rem;
  float: left;
  text-decoration: line-through;
}
#price .priceSpan {
  width: 3.23rem;
  margin-left: 0.18rem;
  margin-right: 0.18rem;
  line-height: 0.23rem;
  word-wrap: break-word;
  font-size: 0.16rem;
  font-family: '楷体';
  font-weight: 600;
}
#price .pricet0 {
  width: 100%;

  margin-top: 0.1rem;
}
#price .pricet0 .pricebox {
  border: 0.003rem solid #ec736b;
  line-height: 0.2rem;
  text-align: center;
  border-radius: 0.03rem;
  color: #ec736b;
  letter-spacing: 0.01rem;
  padding-left: 0.04rem;
  padding-right: 0.04rem;
  margin-left: 0.17rem;
}
#price .pricebm {
  width: 3.22rem;
  height: 0.28rem;
  margin-left: 0.18rem;
  margin-top: 0.18rem;
  font-size: 0.09rem;
  color: #b0b1b3;
  font-family: '楷体';
  font-weight: 500;
  border-bottom: 0.004rem solid #f2f2f2;
}
#price .pricebm .pricebmleft {
  float: left;
}
#price .pricebm .pricebmright {
  float: right;
}
/* 优惠 */
#discount {
  height: 1.59rem;
  width: 100%;
  float: left;
}
#discount .dctitle {
  height: 0.36rem;
  border-bottom: 0.004rem solid #ededed;
  margin-left: 0.18rem;
  line-height: 0.36rem;
  font-size: 0.15rem;
  font-family: '楷体';
  font-weight: 600;
}
#discount .mz {
  width: 3.22rem;
  height: 0.42rem;
  margin-left: 0.18rem;
  /* margin-top: 0.18rem; */
  font-family: '楷体';
  font-weight: 500;
  border-bottom: 0.004rem solid #f2f2f2;
}
#discount .mz .mzleft {
  float: left;
  width: 0.3rem;
  height: 0.18rem;
  background: #fff0dd;
  margin-top: 0.12rem;
  text-align: center;
  line-height: 0.18rem;
  color: #ffa11d;
  border-radius: 42%;
}
#discount .mz .mzright {
  float: left;
  margin-top: 0.12rem;
  line-height: 0.18rem;
  color: #ffa11d;
  margin-left: 0.13rem;
}
#discount .mj {
  width: 3.22rem;
  height: 0.42rem;
  margin-left: 0.18rem;
  /* margin-top: 0.18rem; */
  font-family: '楷体';
  font-weight: 500;
  border-bottom: 0.004rem solid #f2f2f2;
}
#discount .mj .mjleft {
  float: left;
  width: 0.3rem;
  height: 0.18rem;
  background: #fff0dd;
  margin-top: 0.12rem;
  text-align: center;
  line-height: 0.18rem;
  color: #ffa11d;
  border-radius: 42%;
}
#discount .mj .mjright {
  float: left;
  margin-top: 0.12rem;
  line-height: 0.18rem;
  color: #ffa11d;
  margin-left: 0.13rem;
}
#discount .bd {
  width: 3.22rem;
  height: 0.42rem;
  margin-left: 0.18rem;
  /* margin-top: 0.18rem; */
  font-family: '楷体';
  font-weight: 500;
  border-bottom: 0.004rem solid #f2f2f2;
}
#discount .bd .bdleft {
  float: left;
  width: 0.3rem;
  height: 0.18rem;
  background: #fff0dd;
  margin-top: 0.12rem;
  text-align: center;
  line-height: 0.18rem;
  color: #ffa11d;
  border-radius: 42%;
}
#discount .bd .bdright {
  float: left;
  margin-top: 0.12rem;
  line-height: 0.18rem;
  margin-left: 0.13rem;
}

#discount .bd .bdright .bdrightname {
  color: #000;
  font-size: 0.04rem;
}
#discount .bd .bdright span {
  color: #f2716b;
  font-size: 0.12rem;
}
#discount .bd .bdtz {
  font-size: 0.12rem;
  color: #dcdcde;
  font-weight: 700;
  float: right;
  margin-top: 0.12rem;
  line-height: 0.18rem;
}
/* 规格参数 */
#parameter {
  /* height: 2.62rem; */
  width: 3.43rem;
  margin-left: 0.18rem;
  border-bottom: 0.004rem solid #f2f2f2;
  float: right;
}
#parameter .prtitle {
  height: 0.36rem;

  line-height: 0.36rem;
  font-size: 0.15rem;
  font-family: '楷体';
  font-weight: 600;
}
#parameter .select {
  height: 0.19rem;
  width: 100%;
}
#parameter .select .selectleft {
  font-size: 0.12rem;
  float: left;
  font-family: '楷体';
  font-weight: 500;
  float: left;
  line-height: 0.19rem;
}
#parameter .select .selectright {
  font-size: 0.12rem;
  float: left;
  font-family: '楷体';
  font-weight: 500;
  float: right;
  line-height: 0.19rem;
  color: #afafb1;
}
#parameter .select .selecttz {
  font-size: 0.12rem;
  color: #dcdcde;
  font-weight: 700;
  float: right;
  margin-left: 0.16rem;
  line-height: 0.19rem;
  margin-right: 0.18rem;
}
#parameter .introduce {
  margin-right: 0.18rem;
  margin-top: 0.31rem;
  text-align: justify;
  word-wrap: normal;
  font-size: 0.14rem;
  font-family: '楷体';
  line-height: 0.21rem;
  border-bottom: 0.004rem solid #f2f2f2;
  padding-bottom: 0.19rem;
}
#parameter .parameterbm {
  width: 100%;
  height: 0.34rem;
  border-bottom: 0.004rem solid #f2f2f2;
}
#parameter .parameterbmzt {
  float: left;
  height: 0.34rem;
}
#parameter .parameterbmico {
  font-size: 0.16rem;
  color: #fec311;
  line-height: 0.34rem;
  float: left;
}
#parameter .parameterbmfont {
  font-size: 0.1rem;
  margin-left: 0.05rem;
  letter-spacing: 0.04rem;
  font-family: '楷体';
  line-height: 0.34rem;
  float: left;
}
#parameter .parameterbmbz {
  float: left;
  height: 0.34rem;
  margin-left: 0.27rem;
}
/* 商品评价 */
#evaluate {
  float: left;

  width: 3.43rem;
  margin-left: 0.18rem;
}
#evaluate .evaluatetitle {
  height: 0.49rem;

  line-height: 0.8rem;
  font-size: 0.17rem;
  font-family: '楷体';
  font-weight: 700;
}
/* 头像 */
#evaluate .photo {
  height: 0.56rem;
}
#evaluate .photospan {
  font-size: 0.14rem;
  padding-left: 0.09rem;
}

.demo-type {
  display: flex;
  justify-content: space-between;
  padding: 0.11rem;
}
.pj {
  font-size: 0.14rem;
  color: #ffc410;
  line-height: 0.34rem;
}
/* 评论 */
#evaluate .comment {
  padding-right: 0.18rem;
}
#evaluate .commentspan {
  font-size: 0.14rem;
  word-wrap: normal;
  margin-bottom: 0.14rem;
}
#evaluate .comment img {
  width: 1rem;
  height: 1rem;
}
#evaluate .morecomment {
  width: 0.9rem;
  height: 0.28rem;
  background: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.1rem;
  border: 0.004rem solid #f2f2f2;
  border-radius: 0.2rem;
}
/* 相关商品 */
#related {
  height: 2.3rem;

  float: left;

  width: 3.43rem;
  padding-left: 0.18rem;
}
#related .parameter {
  margin-top: 0.22rem;
  margin-bottom: 0.15rem;
  font-size: 0.17rem;
  font-family: '楷体';
  font-weight: 700;
}
#related .slideshow {
  width: 1.1rem;
  height: 1.5rem;
}
/* 轮播图 */
#related .slideshow img {
  width: 1.1rem;
  height: 1.09rem;
}
.slideshow .slideshowtitle {
  width: 1.1rem;
  height: 0.2rem;
  font-size: 0.12rem;
  float: left;
}
.slideshow .slideshowprice {
  float: left;
  width: 1.1rem;
  height: 0.21rem;

  display: flex;
  align-items: center;
}
.slideshow .slideshowprice .slideshowpricespan {
  font-size: 0.11rem;
  color: #eb7068;
  float: left;
  /* line-height: 0.21rem; */
}
.slideshow .slideshowprice .slideshowpricediscount {
  height: 0.12rem;
  color: #eb7068;
  font-size: 0.07rem;
  float: left;
  margin-left: 0.04rem;
  border: 0.02rem solid #eb7068;
  padding: 0 0.04rem 0 0.04rem;
}
/* 查看图文详情 */
#particulars {
  width: 100%;
  float: left;
}
#particulars .particularsfont {
  width: 100%;
  height: 0.5rem;
  color: #a4a2ad;
  text-align: center;
  font-size: 0.11rem;
  line-height: 0.5rem;
}
#particulars .particularsfont:before,
.particularsfont:after {
  content: '';
  width: 0.97rem;
  border: 0.004rem #a4a2ad solid;
  display: inline-block;
  vertical-align: middle;
}
#particulars .particularsfont:before {
  margin-right: 0.2rem;
}
#particulars .particularsfont:after {
  margin-left: 0.2rem;
}
#particulars .longimg {
  width: 100%;
}
#particulars .longimg img {
  width: 3.6rem;
}
/* 底部 */
#bottom {
  width: 100%;
  height: 0.57rem;
  float: left;
  background: #fff;
  display: flex;
  position: fixed;
  bottom: 0;
  z-index: 999;
}
#bottom .shoppingcart {
  width: 0.57rem;
  height: 100%;

  font-size: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#bottom .shoppingcart span {
  font-size: 0.1rem;
  font-family: '楷体';
}
#bottom .service {
  width: 0.57rem;

  height: 100%;
  font-size: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#bottom .service span {
  font-size: 0.1rem;
  font-family: '楷体';
}
#bottom .menubar {
  width: 2.46rem;

  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#bottom .menubar .bottombox {
  width: 2.08rem;
  height: 0.4rem;
}
#bottom .menubar .bottombox .bottomboxleft {
  width: 1.04rem;
  height: 100%;
  background: #02bd79;
  float: left;
  line-height: 0.4rem;
  text-align: center;
  font-size: 0.14rem;
  color: #fff;
  border-top-left-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
}
#bottom .menubar .bottombox .bottomboxright {
  width: 1.04rem;
  height: 100%;
  background: #ffa11b;
  float: left;
  line-height: 0.4rem;
  text-align: center;
  font-size: 0.14rem;
  color: #fff;
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
}
/* 购物车弹出层  */
.popbox {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.popboxtop {
  width: 100%;
  /* position: absolute;
  top: 0; */
  float: left;
}
.popboxtop .popboxtopimg {
  width: 0.57rem;
  height: 0.57rem;
  margin-left: 0.19rem;
  margin-top: 0.22rem;

  float: left;
}
.popboxtop .popboxtopimg img {
  width: 0.57rem;
  height: 0.57rem;
}
.popboxtop .popboxtopright {
  height: 0.57rem;

  float: left;
  margin-top: 0.22rem;
  margin-left: 0.07rem;
}
.popboxtop .popboxtopright .popboxtopprice {
  width: 100%;
  height: 0.12rem;
  float: left;
  font-size: 0.12rem;
  color: #f8726f;
  margin-top: 0.13rem;
}
.popboxtop .popboxtopright .popboxtopfont {
  width: 100%;
  height: 0.12rem;
  font-size: 0.12rem;
  float: left;
  color: #adacb4;
  margin-top: 0.07rem;
}
.popboxtopbottom {
  height: 1.01rem;
  width: 100%;

  float: left;
}
.popboxtopbottom .gmsl {
  height: 0.505rem;
  width: 100%;
  float: left;
  font-size: 0.11rem;
  color: #000;
  font-family: '楷体';
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.popboxtopbottom .qr {
  height: 0.505rem;
  width: 100%;
  float: left;
  background: #02bd79;
  color: #fff;
  font-size: 0.14rem;
  font-family: '楷体';
  text-align: center;
  line-height: 0.505rem;
}
.gg {
  width: 100%;
  float: left;
}

.gg .ggspan {
  width: 100%;
  font-size: 0.1rem;
  margin-bottom: 0.29rem;
  margin-top: 0.19rem;
  margin-left: 0.19rem;
}

.gglx .gglxbt {
  width: 3.14rem;
  margin-bottom: 0.29rem;
  margin-left: 0.19rem;
}
</style>
