<template>
  <el-card>
    <div class="header">
      <div class="buttonbox" @click="cut($event)">
        <div class="gram"><span>体重</span></div>
        <div class="kilogram"><span>体脂</span></div>
      </div>
      <span>单位：公斤</span>
      <i class="iconfont">&#xe61b;</i>
    </div>
    <div id="main"></div>
  </el-card>
</template>

<script>
import { defineComponent } from 'vue'
import * as echarts from 'echarts'
export default defineComponent({
  mounted() {
    // this.getReduce()

    this.drawEcharts()
  },
  methods: {
    // getReduce() {
    //     getFood().then((res) => {
    //         this.arrList = res.data[this.count]
    //         console.log(this.arrList)
    //         this.drawEcharts(this.arrList)
    //     });
    // },
    drawEcharts() {
        // var myChart = echarts.init(document.getElementById('main')); 
      var myChart = echarts.init(document.getElementById('main'), null, {
        width: 320,
        height: 130
      })
      var option = {
        xAxis: {
          type: 'category',
          data: ['9/20', '10/8'],
          axisTick: {
            show: false
          },
          axisLabel: {
            fontSize: '0.08rem',
            color: '#afaeb6',
            lineHeight: '0',
            padding:5
          }
        },
        yAxis: {
          type: 'value',
          axisTick: {
            show: false
          },
          axisLabel:{
            formatter:function(params){
                return params.value
            }
          }
        },
        grid:{
        show:false,
        top:'18%',
        right:'5%',
        bottom:'20%',
        left:'10%'
    },
        series: [
          {
            center:['25%','45%'],
            data: [44.5, 44.5],
            label: {
              show: false,
              position: 'center',
              textStyle:{
                color:'#3e9779',
                fontSize:12
              },
              formatter:function(params){
                return params.value
              }
            },
            lineStyle:{
              color:'#0bb27a',
            },
            color:'#0bb27a',
            type: 'line',
            itemStyle:{
              normal:{
                label:{
                  show:true,
                  color:'#3e9779',
                  fontSize:'0.08rem'
                }
              }
            }
          }
        ]
      }
      option && myChart.setOption(option)
    },
     cut(e) {
      
      if (e.target.parentNode.className == 'gram') {
        e.target.parentNode.style.background = ' #02ba7a'
        e.target.style.color = ' #a0eed3'
        e.target.parentNode.nextSibling.style.background = '#f7f7f9'
        e.target.parentNode.nextSibling.children[0].style.color = '#bcbdc1'
      }
      if (e.target.className == 'gram') {
        e.target.style.background = ' #02ba7a'
        e.target.children[0].style.color = ' #a0eed3'
        e.target.nextSibling.style.background = '#f7f7f9'
        e.target.nextSibling.children[0].style.color = '#bcbdc1'
      }
      if (e.target.parentNode.className == 'kilogram') {
        e.target.parentNode.style.background = ' #02ba7a'
        e.target.style.color = ' #a0eed3'
        e.target.parentNode.previousSibling.style.background = '#f7f7f9'
        e.target.parentNode.previousSibling.children[0].style.color = '#bcbdc1'
      }
      if (e.target.className == 'kilogram') {
        e.target.style.background = ' #02ba7a'
        e.target.children[0].style.color = ' #a0eed3'
        e.target.previousSibling.style.background = '#f7f7f9'
        e.target.previousSibling.children[0].style.color = '#bcbdc1'
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.el-card {
  box-sizing: border-box;
  margin-top: 0.186rem;
  border: none;
  border-radius: 0.2rem;
  box-shadow: none;
  :deep(.el-card__body) {
    padding: 0;
  }
  .header {
    display: flex;
    margin-top: 0.166rem;
    margin-left: 0.15rem;
    align-items: center;
    .iconfont {
      margin-left: 1.043rem;
      font-size: 0.15rem;
      color: #adabc0;
    }
    span {
      font-size: 0.08rem;
      color: #bcbdc1;
    }
    .buttonbox {
      margin-right: 0.38rem;
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
      }
      div:nth-child(1) {
        background: #02ba7a;
        span {
          color: #aff6dd;
        }
      }
    }
  }
  #main{
    margin: 0;
    padding: 0;
    width:100% ;
    height: 1.166rem;
    margin-bottom: 0.07rem;
  }
}
</style>
