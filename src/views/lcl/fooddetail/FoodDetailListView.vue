<template>
  <div>
    <div class="common-layout">
      <el-header>
        <p>
          <el-space
            ><el-icon :size="18" @click="$router.go(-1)"><Back /></el-icon
            ><span style="margin-left: 0.18rem">食物详情</span></el-space
          >
        </p>
        <p>
          <el-icon :size="18"><Upload /></el-icon>
        </p>
      </el-header>
      <el-main>
        <div class="showImg">
          <p>
            <el-space>
              <img :src="foodDetail.headerUrl" alt="" />
              <span>{{ foodDetail.name }}</span>
            </el-space>
          </p>
          <p>
            <button @click="isGet = !isGet">
              <el-space
                ><el-icon :color="isGet == true ? '' : 'green'"
                  ><component :is="isGet == true ? 'Star' : 'StarFilled'">
                  </component></el-icon
                >{{ isGet == true ? '收藏' : '已收藏' }}</el-space
              >
            </button>
          </p>
        </div>
        <van-tabs v-model:active="active" swipeable>
          <van-tab title="营养档案" name="a">
            <div class="box">
              <div class="oneTop">
                <div class="one">
                  <p style="padding: 0.05rem 0 0.1rem 0">
                    <span style="color: green">●</span>
                    绿灯食物:
                    <span style="font-size: 0.13rem">{{
                      foodDetail.green
                    }}</span>
                  </p>
                  <p>
                    <el-icon color="#f6f7fb" :size="20" @click="isShow"
                      ><QuestionFilled
                    /></el-icon>
                  </p>
                </div>
                <div class="two">
                  <p>
                    <el-space>
                      <el-icon color="green"><CircleCheckFilled /></el-icon
                      ><span>{{ foodDetail.introduce }}</span>
                    </el-space>
                  </p>
                  <p>--</p>
                </div>
                <div class="three">
                  <p style="padding: 0.15rem 0">这些人要少吃它</p>
                  <p>
                    <el-popover
                      width="157"
                      placement="bottom"
                      title="少吃"
                      trigger="click"
                    >
                      <slot>{{ foodDetail.text }}</slot>
                      <template #reference>
                        <el-button
                          ><el-space
                            ><el-icon color="#fa9195"><Warning /></el-icon
                            >{{ foodDetail.stop }}</el-space
                          ></el-button
                        >
                      </template>
                    </el-popover>
                  </p>
                </div>
              </div>

              <div class="oneTop">
                <div class="one">
                  <h2>热量和营养成分</h2>
                  <p>
                    <el-popover width="150" placement="bottom" trigger="click">
                      <slot>每{{ foodDetail.eat }}克可食部</slot>
                      <template #reference>
                        <el-button style="border: none"
                          ><el-space></el-space>每100克可食部</el-button
                        >
                      </template>
                    </el-popover>
                  </p>
                </div>
                <div class="two">
                  <div>
                    <span>热量:</span>
                    <span>功能比:</span>
                  </div>
                  <div>
                    <p style="display: flex" class="buttonP">
                      <span>{{ hotChange }}</span>
                      <span>
                        <el-switch
                          size="large"
                          v-model="value4"
                          class="ml-2"
                          inline-prompt
                          active-text="千卡"
                          inactive-text="千焦"
                          @change="change"
                        />
                      </span>
                    </p>
                  </div>
                  <div id="echarts" ref="ecs"></div>
                </div>
                <ul class="list">
                  <li>
                    <p>营养元素</p>
                    <p>含量</p>
                    <p>NRV%</p>
                  </li>
                  <li v-for="item in eleArr" :key="item.id">
                    <p>{{ item.nameY }}</p>
                    <p>{{ item.weight }}克</p>
                    <p>{{ item.pct }}%</p>
                  </li>
                </ul>
              </div>
            </div>
          </van-tab>
          <van-tab title="食物排行" name="b" @click="clickChange">
            <img src="../image/myImg.jpg" alt="" style="width: 100%" />
          </van-tab>
          <van-tab title="如何估重" name="c">
            <img src="../image/myImg2.jpg" alt="" style="width: 100%" />
          </van-tab>
        </van-tabs>
      </el-main>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import * as echarts from 'echarts'
import { mapState } from 'vuex'
import { Dialog } from 'vant'

import {
  Back,
  Upload,
  Star,
  StarFilled,
  Warning,
  QuestionFilled,
  CircleCheckFilled
} from '@element-plus/icons-vue'
export default defineComponent({
  mounted() {
    this.eleArr = this.foodDetail.eleArr
    let eleArr1 = this.eleArr
    eleArr1 = eleArr1.map((value) => value.BFB)
    eleArr1.pop()
    setTimeout(() => {
      const chartDom = this.$refs.ecs
      if (chartDom != null) {
        var myChart = echarts.init(chartDom)
        var option
        option = {
          xAxis: {
            type: 'category',
            data: ['蛋白质80%', '脂肪', '碳水'],
            axisLine: {
              //x轴坐标轴，false为隐藏，true为显示
              show: false
            },
            axisTick: {
              show: false //不显示坐标轴刻度线
            },
            axisLabel: {
              show: true,
              interval: 0,
              formatter: function (params) {
                var newParamsName = ''
                var paramsNameNumber = params.length
                var provideNumber = 3 // 一行显示几个字 然后就超过字数就会自动换行
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber)
                if (paramsNameNumber > provideNumber) {
                  for (var p = 0; p < rowNumber; p++) {
                    var tempStr = ''
                    var start = p * provideNumber
                    var end = start + provideNumber
                    if (p == rowNumber - 1) {
                      tempStr = params.substring(start, paramsNameNumber)
                    } else {
                      tempStr = params.substring(start, end) + '\n'
                    }
                    newParamsName += tempStr
                  }
                } else {
                  newParamsName = params
                }
                return newParamsName
              },
              textStyle: {
                color: '#c3c3c3' //文字的颜色
              }
            }
          },
          yAxis: {
            type: 'value',
            show: false
          },
          series: [
            {
              data: eleArr1,
              type: 'bar',
              barWidth: '40%'
            }
          ],

          axisLine: { show: false } //不显示坐标轴
        }
        option && myChart.setOption(option)
      }
    }, 300)
  },
  components: {
    Back,
    Upload,
    Star,
    StarFilled,
    Warning,
    QuestionFilled,
    CircleCheckFilled
  },
  computed: {
    ...mapState(['foodDetail']),
    hotChange() {
      return this.hotOr ? this.foodDetail.hot : this.foodDetail.hotJ
    }
  },

  data() {
    return {
      eleArr: '',
      data: [],
      hotOr: true,
      value4: true,
      active: '',
      visible: true,
      isGet: true
    }
  },
  methods: {
    clickChange() {
      this.eleArr = this.foodDetail.eleArr
      let eleArr1 = this.eleArr
      eleArr1 = eleArr1.map((value) => value.BFB)
      eleArr1.pop()
      setTimeout(() => {
        const chartDom = this.$refs.ecs
        if (chartDom != null) {
          var myChart = echarts.init(chartDom)
          var option
          option = {
            xAxis: {
              type: 'category',
              data: ['蛋白质80%', '脂肪', '碳水'],
              AxisLine: {
                //x轴坐标轴，false为隐藏，true为显示
                show: false
              },
              axisTick: {
                show: false //不显示坐标轴刻度线
              },
              axisLabel: {
                show: true,
                interval: 0,
                formatter: function (params) {
                  var newParamsName = ''
                  var paramsNameNumber = params.length
                  var provideNumber = 3 // 一行显示几个字 然后就超过字数就会自动换行
                  var rowNumber = Math.ceil(paramsNameNumber / provideNumber)
                  if (paramsNameNumber > provideNumber) {
                    for (var p = 0; p < rowNumber; p++) {
                      var tempStr = ''
                      var start = p * provideNumber
                      var end = start + provideNumber
                      if (p == rowNumber - 1) {
                        tempStr = params.substring(start, paramsNameNumber)
                      } else {
                        tempStr = params.substring(start, end) + '\n'
                      }
                      newParamsName += tempStr
                    }
                  } else {
                    newParamsName = params
                  }
                  return newParamsName
                },
                textStyle: {
                  color: '#c3c3c3' //文字的颜色
                }
              }
            },
            yAxis: {
              type: 'value',
              show: false
            },
            series: [
              {
                data: eleArr1,
                type: 'bar',
                barWidth: '40%'
              }
            ],

            axisLine: { show: false } //不显示坐标轴
          }
          option && myChart.setOption(option)
        }
      }, 300)
    },
    change() {
      this.hotOr = !this.hotOr
    },
    isShow() {
      Dialog.alert({
        message: '生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。',
        theme: 'round-button'
      }).then(() => {
        // on close
      })
    }
  }
})
</script>

<style lang="scss" scoped>
.box .oneTop .two div[data-v-613664a7]:nth-child(1) {
  padding: 0;
}
.el-switch {
  --el-switch-on-color: #41d2c5;
  --el-switch-off-color: #cef7f1;
}
.list {
  li:nth-child(1) {
    color: #b2b3b8;
    p {
      padding-left: 0;
    }
  }
  li {
    display: flex;
    justify-content: space-around;
    border-bottom: 0.01rem solid #ccc;
    padding: 0.1rem 0;

    p:nth-child(1) {
      width: 30%;
      text-align: center;
    }
    p:nth-child(2) {
      width: 50%;
      text-align: center;
    }
    p:nth-child(3) {
      width: 20%;
      text-align: center;
    }
  }
}
.el-main {
  padding: 0;
}
.box {
  width: 100%;
  background: #f6f7fb;
  height: 100%;
  padding: 0.2rem 0.2rem;
  .buttonP {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #ccc;
    width: 80%;
  }
  .oneTop {
    background-color: white;
    border-radius: 0.08rem;
    padding: 0.1rem;
    margin-bottom: 0.2rem;
    .one {
      display: flex;
      justify-content: space-between;
    }
    .two {
      background-color: #f6f7fb;
      border-radius: 0.08rem;
      padding: 0.1rem;
      overflow: hidden;
      div:nth-child(1) {
        box-sizing: border-box;
        width: 100%;
        display: flex;
        padding: 0.2rem;
        span {
          flex: 1;
        }
      }
      div:nth-child(2) {
        width: 50%;
        float: left;
        display: flex;
        height: 2rem;
        font-size: 0.4rem;
        font-weight: 900;
        justify-content: center;
        align-items: center;
      }
      div:nth-child(3) {
        width: 50%;
        height: 2rem;
        float: left;
      }
    }
    .three {
      .el-button {
        border: none;
        background-color: #f6f7fb;
        border-radius: 0.2rem;
      }
    }
  }
}

.van-col {
  text-align: center;
  font-size: 0.14rem;
  color: rgb(127, 127, 127);
}
div {
  font-size: 0.12rem;
}
.el-header {
  height: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 100%;
  // display: none;
}
.box .oneTop .two div[data-v-579de251]:nth-child(1){
  padding: 0;
}
.el-main {
  .showImg {
    padding: 0 0.2rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.18rem;
    p:nth-child(1) {
      img {
        width: 0.3rem;
        height: 0.3rem;
      }
    }
    p:nth-child(2) {
      button {
        border: none;
        height: 0.2rem;
        background-color: rgba(237, 237, 237, 0.6);
        border-radius: 0.1rem;
        padding: 0 0.08rem;
      }
    }
  }
}
</style>
