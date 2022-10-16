<template>
  <div class="table">
    <div id="main" ></div>
   
    <ul class="text">
    <li><span>60%</span><span>238克</span></li>
    <li><span>15%</span><span>59克</span></li>
    <li><span>25%</span><span>44克</span></li>
    </ul>
  <div class="power">
    <h4>1584</h4>
    <p>千卡</p>
  </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import * as echarts from 'echarts'
// import axios from 'axios'
export default defineComponent({
  // created() {
  //   axios({
  //     url: 'http://localhost:3000/gg'
  //   }).then((res) => {
  //     console.log(res.data)
  //     this.imgdata = res.data
  //   })
  // },
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
      var myChart = echarts.init(document.getElementById('main'), null, {
                width: 200,
                height: 60
            });
      var option

      option = {
        tooltip: {
          trigger: 'item'
        },
        // color:['#fa9090','#aaabfd','#fed1a8'],
        legend: {
            align: 'left',
                    orient: 'vertical',
                    // top: '5%',
                    left: '60',
                    itemHeight: 8,
                    itemWidth: 8,
                    itemGap:6,
                    padding:[5,10],
                    textStyle: {
                        fontSize: 10
                    },
                    
            
        },
        series: [
            
          {
            name: 'Access From',
            type: 'pie',
            radius: ['60%', '80%'],
            center:['15%','45%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 238, name: '碳水化合物' },
              { value: 59, name: '蛋白质' },
              { value: 44, name: '脂肪' }
            ],
            itemStyle :{
                normal:{ 
                    color:function(colors){
                        var colorList=['#aaabfd','#fed1a8','#fa9090'];
                        return colorList[colors.dataIndex]
                    }
                }
            },
          }
        ]
      }

      option && myChart.setOption(option)
    }
  }
})
</script>

<style lang="scss" scoped>
.table {
  display: flex;
  margin-top: 0.18rem;

  #main {
    width: 1.35rem;
    height: 0.5rem;
    display: flex;
    justify-content: start;
    align-items: center;
    div{
      width: 1rem;
      height: 0.5rem;
    }
  }

  .text {
    padding: 0;
    margin: 0;
    margin-right: 0.1rem;
    font-size: 10px;
    margin-left: 0.02rem;
    color: darkgray;

    li{
      list-style: none;
    }
    span {
      display: inline-block;
      margin-left: 0.15rem;
      margin-bottom: 0.06rem;
    }
  }
}

// .line {
//   width: 0.02rem;
//   height: 0.32rem;
//   background-color: #efefef;
//   margin-left: 0.21rem;
//   margin-top: 0.1rem;
// }

.power {
  padding-left: 0.1rem;

  border-left: 0.01rem solid #f1f1f1;
  h4 {
    margin: 0;
    margin-top: 0.05rem;
    font-size: 0.16rem;
  }

  p {
    margin: 0;
    font-size: 0.09rem;
    margin-left: 0.11rem;
    margin-top: 0.07rem;
    color: #645d5d;
  }
}
</style>
