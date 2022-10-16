<template>
  <div class="common-layout">
    <el-container>
      <!-- 整体： content + icon导航 + 头部 -->
      <van-pull-refresh v-model="isLoading" loosing-text="松开显示壁纸" @refresh="onRefresh">
        <el-main>
          <!-- 头部 -->
          <div class="el-header">
            <div class="logo-box">
              <div class="search-box" v-show="logoTextShow" @scroll="handleScroll">
                <img src="../images/logo.jpg" />
                <van-search v-model="searchValue" shape="round" placeholder="请输入搜索关键词" />
              </div>
              <div class="icon-box">
                <van-icon name="envelop-o" />
                <van-icon name="envelop-o" dot />
              </div>
            </div>
          </div>
          <!-- 空白 -->
          <div class="kongbai1"></div>

          <!-- icon导航 -->
          <div class="icon-font">
            <van-grid :gutter="10" column-num="5" icon-size="0.4rem" :border="false" style="padding: 0">
              <van-grid-item style="
               flex: 1;
                  flex-wrap: nowrap;
                  margin: 0;
                  padding: 0;
                  white-space: nowrap;
                " v-for="value in 10" :key="value" :icon="photo[value - 1]" :text="group[value - 1]" is-link
                @click="showPopup(value)" :to="value == 8 ? '/vip' : ''" />
              <!-- 弹出层 -->
              <van-popup v-model:show="show" round closeable position="bottom" :style="{ height: '60%' }"
                overlay-class="overlay">
                <div class="tanchuceng">
                  <p style="font-size: 0.18rem">请完善你的基本信息</p>
                  <img src="../images/tanchuceng.jpg" alt="" />
                  <p style="font-size: 0.18rem">
                    完善信息后，你将获得每日推荐预算热量
                  </p>
                  <el-button type="success" color="#54b97f" @click="show = !show" round>同意并完善信息</el-button>
                  <p style="font-size: 0.13rem; opacity: 0.4" @click="show = !show">
                    拒绝并关闭
                  </p>
                  <p style="font-size: 0.11rem; opacity: 0.4">
                    本测评将收集您的个人敏感信息，包括生育信息、儿童个人信息，仅用于为您提供个性化的健康方案
                  </p>
                </div>
              </van-popup>
            </van-grid>
          </div>

          <!-- content -->
          <div class="content-bigbox" v-for="item in arr">
            <div class="content-box1" :style="getSmallStyle(item)" @click="$router.push(item.router)">
              <p>{{ item.title }}</p>
              <h3>{{ item.content }}<br />{{ item.content2 }}</h3>
            </div>
            <div class="content-box2" :style="`background-color: ${item.color} `">
              <div class="content-box2-title" v-for="title in item.titleBox">
                <p class="content-text">
                  <span>{{ title.titleLeft }}</span>
                  <span>{{ title.titleRight }}</span>
                </p>
                <h3>{{ title.content }}</h3>
              </div>
              <div class="content-box2-content" v-for="content in item.contentBox" key="item.id">
                <div class="content-box2-text-box">
                  <img :src="content.imgUrl" alt="" />
                  <div class="content-box2-text">
                    <h4>{{ content.contenText01 }}</h4>
                    <p>{{ content.contenText02 }}</p>
                  </div>
                </div>
                <button :style="`background-color: ${content.color} `">
                  查看
                </button>
              </div>
            </div>
          </div>
        </el-main>
      </van-pull-refresh>
      <!-- 空白 -->
      <div class="kongbai"></div>

      <!-- 底部 -->
      <el-footer>
        <van-tabbar active-color="#05bd7d" v-model="active">
          <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
          <van-tabbar-item icon="wechat-moments" @click="$router.push({name:'find'})">发现</van-tabbar-item>
          <van-tabbar-item icon="todo-list" @click="$router.push({name:'record'})">记录</van-tabbar-item>
          <van-tabbar-item icon="bag" @click="$router.push({name:'storeLs'})">商店</van-tabbar-item>
          <van-tabbar-item icon="manager" @click="$router.push({name:'mylogin'})">我的</van-tabbar-item>
        </van-tabbar>
      </el-footer>
    </el-container>
  </div>

  <!-- 壁纸 -->
  <div class="bizhi" style="transition: 0.5s" @click="setImgStyle">
    <img src="../images/bizhi.jpg" />
  </div>
  <!-- v-show="overlayShow" -->
</template>

<script>
// 引入文件
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  data() {
    return {
      bizhiShow: false,
      overlayShow: false,
      isLoading: false,
      show: false,
      arr: [],
      active: 0,
      count: 0,
      loading: false,
      value: 0,
      searchValue: '',
      group: [
        '食谱库',
        '食物榜单',
        '食物对比',
        '查奶茶',
        '活动中心',
        '配料解读',
        '餐前拍一拍',
        '营养课程',
        '精品食谱',
        '用户故事'
      ],
      photo: [
        './src/images/新建文件夹/01.jpg',
        './src/images/新建文件夹/02.jpg',
        './src/images/新建文件夹/03.jpg',
        './src/images/新建文件夹/04.jpg',
        './src/images/新建文件夹/05.jpg',
        './src/images/新建文件夹/06.jpg',
        './src/images/新建文件夹/07.jpg',
        './src/images/新建文件夹/08.jpg',
        './src/images/新建文件夹/09.jpg',
        './src/images/新建文件夹/10.jpg'
      ],
      logoTextShow: true,
      oldScrollTop: 0
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      axios({
        url: 'http://localhost:5050/one1'
      }).then((res) => {
        this.arr = res.data
      })
    },
    showPopup(value) {
      if (value == 1) {
        this.$router.push({ name: 'foodbank' })
      }
      else if (value == 2) {
        this.$router.push({ name: 'list' })
      }
      if (value !== 8 || 1 || 2) {
        return (this.show = true)
      }
    },
    getSmallStyle(item) {
      return {
        height: item.height,
        background: 'url(' + item.bkUrl + ') no-repeat',
        backgroundSize: 'cover'
      }
    },
    handleScroll() {
      let logoBox = document.querySelector('.el-header')

      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      if (scrollTop > 0) {
        logoBox.style.position = 'fixed'
        logoBox.style.top = 0
        logoBox.style.zIndex = 1000
      } else {
        logoBox.style.position = 'absolute'
        logoBox.style.top = 0
      }
    },
    setImgStyle() {
      this.bizhiShow = !this.bizhiShow
      let biZhi = document.querySelector('.bizhi')
      biZhi.style.top = this.bizhiShow ? '0' : '-100%'
    },
    onRefresh() {
      this.overlayShow = true
      this.setImgStyle()
      this.isLoading = false
    }
  },
  mounted() {
    //监听scroll事件
    // window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    //离开这个界面之后，删除滚动事件，不然容易除bug
    window.removeEventListener('scroll', this.handleScroll)
  }
})
</script>
<style lang="scss" scoped>
.common-layout {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.el-main {
  position: relative;
}

// 头部样式
.el-header {
  margin-left: -0.175rem;
  width: 100%;
  height: 1.3rem;
  padding: 0 !important;
  position: absolute;
  top: 0;
  background-color: #fff;
  overflow: hidden;

  .logo-box {
    width: 100%;
    height: 0.4rem;
    padding: 0 0.15rem;
    margin-top: 0.1rem;

    .search-box {
      img {
        height: 0.3rem;
        margin: 0.1rem 0.15rem 0.3rem;
      }

      .van-search {
        width: 100%;
        height: 0.4rem;
        padding: 0 0.1rem;
        margin-bottom: 0.1rem;
      }
    }

    .icon-box {
      position: absolute;
      top: 0.21rem;
      right: 0.2rem;

      .van-icon {
        font-size: 0.18rem;
        font-weight: 900;
        margin: 0.11rem 0.1rem;
      }
    }
  }
}

// content 样式
.el-main {
  flex: 1;

  // 导航
  .icon-font {
    height: 1.78rem;

    .van-grid {
      padding: 0;
      font-weight: 900;

      .van-grid-item {
        padding: 0;

        .van-grid-item__content {
          padding: 0;
        }
      }
    }
  }

  // 弹出层{
  .tanchuceng {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.44rem 0.18rem;

    img {
      width: 1.32rem;
      margin: 0.1rem;
    }

    .el-button {
      width: 2.7333333rem;
      height: 0.84rem;
      color: #fff;
    }
  }

  // content
  .content-bigbox {
    h3 {
      font-size: 0.17rem;
      line-height: 1.5;
      letter-spacing: 0.01rem;
    }

    p {
      font-size: 0.11rem;
    }

    &>div {
      margin: 0.18rem 0 0.18rem;
      padding: 0.1rem;
      border-radius: 0.15rem;
    }

    .content-box1 {
      height: 1.35rem;
    }

    .content-box2 {
      height: 2.83333rem;

      img {
        height: 0.45rem;
      }

      .content-box2-text {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .content-box2-content {
        height: 0.45rem;
        display: flex;
        justify-content: space-between;
        margin: 0.15rem 0;

        .content-box2-text-box {
          display: flex;
          height: 0.45rem;

          .content-box2-text {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            padding: 0.06rem 0.1rem;

            p {
              padding: 0 !important;
              margin: 0 !important;
            }

            h4 {
              font-size: 0.15rem;
              padding: 0 !important;
              margin: 0 !important;
            }
          }
        }

        button {
          height: 0.26rem;
          width: 0.6rem;
          border-radius: 0.26rem;
          align-self: center;
          color: #fff;
          border: 0;
          font-size: 0.15rem;
        }
      }
    }
  }
}

// footer 样式
.el-footer {
  width: 100%;
  height: 0.78rem;
  position: fixed;
  bottom: 0;
  background: #fff;
  .van-tabbar {
    border-top: 1px solid #faf8fd;
    height: 0.56rem;
    padding-top: 22px;
    align-items: flex-start;
  }
}

// 壁纸
.bizhi {
  width: 100%;
  height: 100%;

  position: fixed;
  top: -100%;
  z-index: 1000000;

  img {
    width: 100%;
    height: 100%;
  }
}

.kongbai {
  height: 0.78rem;
}

.kongbai1 {
  height: 1rem;
}
</style>
