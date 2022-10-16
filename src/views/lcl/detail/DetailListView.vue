<template>
  <div class="common-layout">
    <el-container>
      <transition name="isShow">
        <el-header v-show="isShow">
          <p>
            <el-space
              ><el-icon :size="18" @click="toback"><Back /></el-icon
              ><span style="margin-left: 0.18rem">套餐详情</span></el-space
            >
          </p>
          <p>
            <el-icon :size="18"><Upload /></el-icon>
          </p>
        </el-header>
      </transition>
      <el-main>
        <div class="main">
          <img :src="detail.imgUrl" alt="" />
          <h2>{{ detail.kind }}</h2>
          <div class="introduce">
            <p>
              <el-space>
                <img src="../image/foodTwo.jpg" alt="" />
                <span>{{ detail.author }}</span>
              </el-space>
            </p>
            <p>
              <span>{{ detail.personSee }}万 次浏览</span>
              &nbsp;☼&nbsp;
              <span>4555次保存</span>
            </p>
          </div>
          <h2>营养和热量</h2>
          <div class="chartsBox">
            <div class="charts"></div>
            <div class="introducebottom">
              <h3>{{ detail.fat }}</h3>
              <span>千卡</span>
            </div>
          </div>
          <h2>包含食物</h2>
          <ul class="list">
            <li
              v-for="item in detail.foodArr"
              :key="item.id"
              @click="changeRouter(item)"
            >
              <div>
                <img :src="item.headerUrl" alt="" id="imgHead" />
                <p
                  style="
                    display: flex;
                    flex-direction: column;
                    margin-left: 0.1rem;
                  "
                >
                  <span>{{ item.name }}</span
                  ><span>{{ item.weigth }}克</span>
                </p>
              </div>
              <p>
                <el-space>
                  <span>{{ item.fat }}千卡</span>
                  <el-icon><ArrowRightBold /></el-icon
                ></el-space>
              </p>
            </li>
          </ul>
          <div id="footH2">
            <h2>小贴士</h2>
            <p style="margin-left: 0.2rem; padding-bottom: 0.2rem">暂无内容</p>
          </div>
        </div>
      </el-main>
      <el-footer>
        <div>
          <p @click="addMyCombo" id="teleport">
            <el-space>
              <el-icon :size="20"><DocumentAdd /></el-icon>
              <span>保存为我的套餐</span>
            </el-space>
          </p>
          <p @click="showPopup">
            <el-space
              ><el-icon :size="20"><CopyDocument /></el-icon>
              <span>复制到饮食记录</span></el-space
            >
          </p>
        </div>
      </el-footer>
      <van-popup
        v-model:show="show"
        position="bottom"
        :style="{ height: '30%' }"
      >
        <div class="centerSelect">
          <van-picker ref="picker" :columns="columns" @confirm="closeWn" />
        </div>
      </van-popup>
    </el-container>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { mapState, mapMutations } from 'vuex'
import { addCombo, getCombo } from '@/api/detail'

import {
  Back,
  Upload,
  ArrowRightBold,
  DocumentAdd,
  CopyDocument
} from '@element-plus/icons-vue'
import * as echarts from 'echarts'
export default defineComponent({
  components: {
    Back,
    Upload,
    ArrowRightBold,
    DocumentAdd,
    CopyDocument
  },
  data() {
    return {
      show: false,
      isShow: true,
      picker: null,
      clickOne: true,
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
      cities: {
        // 浙江: ['早餐', '午餐', '晚餐', '上午加餐', '下午加餐', '晚上加餐'],
        // 福建: ['早餐', '午餐', '晚餐', '上午加餐', '下午加餐', '晚上加餐']
      },
      columns: []
    }
  },
  created() {
    //给cities赋值
    for (let i = -4; i <= 1; i++) {
      if (i == 0) {
        this.cities[`今天`] = [
          '早餐',
          '午餐',
          '晚餐',
          '上午加餐',
          '下午加餐',
          '晚上加餐'
        ]
        continue
      }
      this.cities[`${this.month}月${this.day + i}日`] = [
        '早餐',
        '午餐',
        '晚餐',
        '上午加餐',
        '下午加餐',
        '晚上加餐'
      ]
    }
    this.columns = [
      { values: Object.keys(this.cities) },
      { values: this.cities['今天'] }
    ]
  },
  computed: {
    ...mapState(['detail'])
  },
  methods: {
    ...mapMutations(['setFoodDetail']),
    changeRouter(item) {
      this.setFoodDetail(item)
      this.$router.push({
        name: 'foodlcl'
      })
    },
    closeWn() {
      // console.log()
      //点击确认按钮
    },
    //保存为我的套餐
    addMyCombo() {
      this.$toast({
        message: `套餐已保存`,
        position: 'bottom',
        teleport: document.querySelector('#teleport')
      })
      getCombo().then(() => {
        if (this.clickOne) {
          addCombo(this.detail).then(() => {})
        }
        this.clickOne = false
      })
    },
    showPopup() {
      this.show = true
    },
    // handleScroll() {
    //   // 页面滚动距顶部距离
    //   var scrollTop =
    //     window.pageYOffset ||
    //     document.documentElement.scrollTop ||
    //     document.body.scrollTop
    //   if (scrollTop > 50) {
    //     this.isShow = true
    //   } else {
    //     this.isShow = false
    //   }
    // },
    toback() {
      this.$router.push({
        name: 'recommendlistlcl'
      })
    }
  },
  //echarts
  mounted() {
    //监听鼠标滚动事件
    // window.addEventListener('scroll', this.handleScroll, true)
    var chartDom = document.querySelector('.charts')
    var myChart = echarts.init(chartDom)
    var option

    option = {
      legend: {
        top: '20%',
        left: '100'
      },
      series: [
        {
          name: '占比图',
          center: ['25%', '50%'],
          type: 'pie',
          radius: ['45%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '10',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: this.detail.protein.pct, name: '蛋白质' },
            { value: this.detail.fatObj.pct, name: '脂肪' },
            { value: this.detail.water.pct, name: '碳水化合物' }
          ]
        }
      ]
    }

    option && myChart.setOption(option)
  }
})
</script>

<style lang="scss" scoped>
//调整弹窗位置
:deep(.van-toast--bottom) {
  bottom: 0.3rem;
}
#footH2 {
  margin-bottom: 0.4rem;
}
//ul
.list {
  display: flex;
  padding: 0 0.2rem;
  flex-direction: column;
  width: 100%;

  li {
    height: 0.53rem;
    display: flex;
    justify-content: space-between;
    div {
      display: flex;

      span:nth-child(2) {
        font-size: 0.1rem;
        color: #adacb2;
      }
    }
    p:nth-of-type(2) {
      color: #b0afb7;
    }
    #imgHead {
      width: 0.3rem;
      height: 0.3rem;
      border-radius: 0.05rem;
    }
  }
}
//charts宽高
.chartsBox {
  overflow: hidden;
}
.charts {
  margin: 0 0 0 0.3rem;
  height: 1.2rem;
  width: 2rem;
}
.introducebottom,
.charts {
  float: left;
}
.introducebottom {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 0.8rem;
  height: 1.2rem;

  h3 {
    font-size: 0.22rem;
  }
}
div {
  font-size: 0.12rem;
}
.el-header {
  height: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: white;
  width: 100%;
  z-index: 999;
  // display: none;
}
.el-main {
  // margin-top: 0.5rem;
  --el-main-padding: 0;
  height: 100%;
  .main {
    img {
      height: 2.5rem;
      width: 100%;
      display: block;
    }
    h2 {
      font-size: 0.14rem;
      line-height: 0.45rem;
      height: 0.45rem;
      margin: 0 20px;
      margin-bottom: 0.05rem;
    }
    .introduce {
      display: flex;
      margin: 0 20px;
      height: 0.4rem;
      line-height: 0.2rem;
      justify-content: space-between;
      border-bottom: 1px solid #f3f3f3;
      img {
        width: 100%;
        height: 0.14rem;
        border-radius: 50%;
        display: inline-block;
      }
      p:nth-child(1) {
        color: #6a707c;
      }
      p:nth-child(2) {
        color: #adabb6;
        font-size: 0.08rem;
      }
    }
  }
}
//底部
.el-footer {
  border-top: #ededed 0.01rem solid;
  position: fixed;
  width: 100%;

  background-color: white;
  bottom: 0;
  font-weight: 900;
  div {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.isShow-enter {
  opacity: 0;
}
.isShow-enter-to {
  opacity: 1;
}
.isShow-leave {
  opacity: 1;
}
.isShow-leave-to {
  opacity: 0;
}
.isShow-enter-active,
.isShow-leave-active {
  transition: all 1s;
}
</style>
