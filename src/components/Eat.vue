<template>
  <h3>健康记录</h3>
  <el-card class="box-card">
    <div class="bt">
      <h4>饮食&运动记录</h4>
      
        <div class="hg" @click="$router.push({name:'suggesting'})">
        <i class="iconfont">&#xeb72;</i>
        <span>饮食建议</span>
      </div>
      
    </div>
    <div class="eat-more">
      <div class="qk">
        <span>还可吃</span>
        <h3>1584</h3>
        <span>千卡</span>
      </div>
      <div id="main" style="width: 0.78rem; height: 0.7rem"></div>
    </div>
    <div class="cross">
      <div class="di1"></div>
      <hr />
      <div class="di2"></div>
    </div>
    <ul class="food">
      <li><i class="iconfont">&#xe631;</i><span>+早餐</span></li>
      <li><i class="iconfont">&#xe616;</i><span>+午餐</span></li>
      <li><i class="iconfont">&#xe6bc;</i><span>+晚餐</span></li>
      <li><i class="iconfont">&#xe6ca;</i><span>+加餐</span></li>
      <li><i class="iconfont">&#xe608;</i><span>+运动</span></li>
    </ul>
  </el-card>
</template>

<script>
import { defineComponent } from 'vue'
import * as echarts from 'echarts'
// import { split } from 'lodash'
export default defineComponent({
  mounted() {
    this.drawEcharts()
  },
  methods: {
    drawEcharts() {
      // 基于准备好的dom，初始化echarts实例
      // var myChart = echarts.init(document.getElementById('main'))
      var myChart = echarts.init(document.getElementById('main'), null, {
        width: 90,
        height: 85
      })
      // 绘制图表
      myChart.setOption({
        // title: {
        //   text: 'ECharts 入门示例'
        // },
        tooltip: {},
        xAxis: {
          data: ['早', '午', '晚', '加'],
          axisTick: {
            show: false
          },
          axisLabel: {
            fontSize: '0.08rem',
            color: '#707477',
            lineHeight: '0'
          }
        },
        yAxis: {
          axisTick: {
            show: false
          },
          show:false,
          axisLabel:{
            formatter:function(){
                return ""
            }
          }
        },
        series: [
          {
            name: '',
            type: 'bar',
            data: [10, 30, 20, 10],
            barWidth: '40%',
            center:['10%','25%'],
            label: {
              show: false,
              position: 'center'
            },
            backgroundStyle: {
              color: 'rgba(220, 220, 220, 0.8)'
            },
            color: '#95f4d4',
            barGap: '20%',
            barCategoryGap: '20%',
            barBorderRadius: '20%'
          }
        ]
      })
    }
  }
})
</script>

<style lang="scss" scoped>
h3 {
  font-size: 0.15rem;
  line-height: 0;
  margin-top: 0.24rem;
  margin-bottom: 0.15rem;
}
.box-card {
  width: 3.21rem;
  height: 2.1rem;
  border-radius: 0.2rem;
  box-shadow: none;
  border: none;
  margin-top: 0.21rem;
  position: relative;
  :deep(.el-card__body) {
    padding-left: 0.17rem;
  }
  .bt {
    display: flex;
    justify-content: space-between;
    h4 {
      font-size: 0.12rem;
      line-height: 0.24rem;
      margin: 0;
    }
    .hg {
      
      width: 0.74rem;
      height: 0.24rem;
      background-color: #ffe9ba;
      border-radius: 0.15rem 0 0 0.15rem;
      font-size: 0.08rem;
      text-align: center;
      line-height: 0.24rem;
      .iconfont {
        font-size: 0.13rem;
        color: #fbb833;
        margin-right: 0.05rem;
      }
      span {
        color: #eeb043;
         }
    }
  }
  .eat-more {
    display: flex;
    margin-bottom: 0.06rem;
    .qk {
      padding-top: 0.4rem;
      display: flex;
      span {
        font-size: 0.1rem;
        color: #6b6879;
        letter-spacing: 0.03rem;
      }
      h3 {
        margin: 0;
        margin-right: 0.07rem;
        line-height: 0.1rem;
        font-size: 0.14rem;
        color: #3b3d49;
      }
    }

    #main {
      // width: 0.5rem;
      // height: 0.75rem;
      margin-left: 0.54rem;
      color: aquamarine;
      // :deep(element.style) {
      //   // width: 0.2rem;
      //   // height: 0.05rem;
      // }
      // .canvas {
      //   width: 0.2rem;
      //   height: 0.25rem;
      // }
    }
  }
  .cross {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 0.1rem 0.02rem 0.03rem;
    .di1 {
      width: 0.25rem;
      height: 0.25rem;
      background-color: #f6f7fb;
      position: absolute;
      left: -0.11rem;
      border-radius: 50%;
    }
    hr {
      flex: 1;

      border: none;
      border-top: 0.01rem dotted #acacac;
      margin: 0;
      margin-top: 0.11rem;
    }
    .di2 {
      width: 0.25rem;
      height: 0.25rem;
      background-color: #f6f7fb;
      border-radius: 50%;
      position: absolute;
      right: -0.11rem;
    }
  }
  ul {
    display: flex;
    justify-content: space-between;
    padding: 0;
    li {
      width: 0.456rem;
      height: 0.473rem;
      background-color: #e3fff3;
      list-style: none;
      border-radius: 0.1rem;
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      justify-content: center;
      .iconfont {
        font-size: 0.22rem;
        font-weight: bolder;
        color: #323a4d;
      }

      span {
        font-size: 0.09rem;
        color: #264041;
        margin-top: 0.03rem;
      }
    }
    li:nth-of-type(5) {
      background-color: #e3f5ff;
    }
  }
}
</style>
