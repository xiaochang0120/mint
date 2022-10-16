<template>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>
        <div class="header">
            <el-icon @click="$router.go(-1)">
                <Back />
            </el-icon>
            <h4>{{arrList.name}}</h4>
        </div>
        <div class="chick" @click="filters">

            <p class="middle">{{arrList.narration}}</p>

            <div class="contain">
                <h5>推荐搭配</h5>
                <p>{{arrList.eat }}</p>
                <div class="food" v-for="(item) in (arrList.recommend)">
                    <img :src="(item.img)" alt="">
                    <article>
                        <p v-for="(item) in item.id1">{{item}}</p>
                    </article>
                </div>
                <h5>营养分析</h5>
                <div class="table">
                    <div id="main">
                    </div>
                    <div class="text">
                        <p v-for="(text) in arrList.data">{{text.val}}克</p>
                    </div>
                    <div class="line"></div>
                    <div class="power">
                        <h4>1640</h4>
                        <p>千卡</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="spot">
            <p></p>
        </div>
        <div class="bottom">
            <img :src="(arrList.images)" alt="">
            <article>
                <p v-for="(item) in arrList.id">{{item}}</p>
            </article>
        </div>
    </body>

    </html>
</template>

<script>
import { defineComponent } from 'vue'
import { Back } from '@element-plus/icons-vue'
import { mapState } from 'vuex'
import { getFood } from "../../api/food.js"
import * as echarts from 'echarts';
import { getReduce } from '../../api/foodbank';
export default defineComponent({
    data() {
        return {
            arrList: [],
        }
    },
    mounted() {
        this.getReduce()
    },
    methods: {
        getReduce() {
            getFood().then((res) => {
                this.arrList = res.data[this.count]
                console.log(this.arrList)
                // 将获取的数据信息以参数形式传到图表函数中
                this.drawEcharts(this.arrList)
            });
        },
        // eacharts图表的设置
        drawEcharts(arr) {
            console.log('***', arr.data)
            // 如果图表容器不存在宽度和高度，或者，你希望图表宽度和高度不等于容器大小，也可以在初始化的时候指定大小。
            var myChart = echarts.init(document.getElementById('main'), null, {
                width: 200,
                height: 60
            });
            var option = {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    // 图表中图标的位置
                    align: 'left',
                    // 垂直方向
                    orient: 'vertical',
                    left: '70',
                    // 图标颜色块的大小
                    itemHeight: 6,
                    itemWidth: 5,
                    // 图标文字的设置
                    textStyle: {
                        fontSize: 10
                    },
                    // 初始化显示数据后的百分数值
                    formatter: function (name) {
                        var total = 0;
                        var tarValue;
                        for (var i = 0; i < arr.data.length; i++) {
                            total += arr.data[i].val
                            if (arr.data[i].name == name) {
                                tarValue = arr.data[i].val;
                            }
                        }
                        var v = tarValue;
                        var p = Math.round(((tarValue / total) * 100));
                        return `${name} ${p}%`;
                    },
                },
                // data:arrList.data.map((item) =>{item.name}),
                series: [
                    {
                        // name: 'Access From',
                        type: 'pie',
                        radius: ['80%', '70%'],
                        // 图表的位置调整
                        center: ['15%', '50%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '8',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        // 获取数据里面的数值，根据数值显示图表的各项比例
                        data: arr.data.map((item) => {
                            return {
                                value: item.val,
                                name: item.name
                            }
                        })
                        // [
                        //     { value: 1048, name: '碳水化合物' },
                        //     { value: 735, name: '脂肪' },
                        //     { value: 580, name: '蛋白质' },
                        //     // { value: 484, name: 'Union Ads' },
                        //     // { value: 300, name: 'Video Ads' }
                        // ]
                    }
                ]
            }
            option && myChart.setOption(option);
        }
    },
    components: {
        Back
    },
    computed: {
        ...mapState(['count'])
    },
    created() {
        console.log(1)
    },


})

</script>

<style lang="scss" scoped>
img {
    width: 0.48rem;
    height: 0.48rem;
}

.header {
    height: 0.48rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    padding-left: 0.2rem;
    position: relative;
    width: 100%;
}

.header h4 {
    font-size: 0.14rem;
    float: left;
    margin-left: 0.31rem;
}

.chick {
    padding-left: 0.2rem;
}

.middle {
    margin-top: 0.2rem;
    width: 3.2rem;
    font-size: 0.12rem;
    font-weight: 400;
    padding-left: 0.15rem;
    padding-right: 0.15rem;
    // display: flex;
    line-height: 0.28rem;
    // align-items: center;
    border-radius: 20px;
    background-color: #fff;
    height: 0.87rem;
}

.contain {
    background-color: #fff;
    width: 3.2rem;
    margin-top: 0.2rem;
    border-radius: 20px;
    padding-top: 0.31rem;
    padding-left: 0.15rem;

    .food {
        display: flex;
        margin-top: 0.11rem;
        margin-bottom: 0.11rem;

        article {
            margin-left: 0.13rem;

            p:nth-child(2) {
                color: rgb(97, 93, 93);
                font-size: 0.1rem;
                margin-top: 0.11rem;
            }
        }
    }

    .table {
        display: flex;
        margin-top: 0.18rem;

        #main {
            width: 1.3rem;
            height: 0.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .text {
            font-size: 10px;
            margin-left: 0.4rem;
            color: darkgray;

            p {
                margin-top: -0.03rem;
                margin-bottom: 0.06rem;
            }
        }
    }

    .line {
        width: 0.02rem;
        height: 0.32rem;
        background-color: #efefef;
        margin-left: 0.21rem;
        margin-top: 0.1rem;
    }

    .power {
        margin-left: 0.15rem;

        h4 {
            font-size: 0.16rem;
        }

        p {
            font-size: 0.09rem;
            margin-left: 0.11rem;
            margin-top: 0.07rem;
            color: #645d5d;
        }
    }

}

.spot {
    width: 3.2rem;
    margin-top: 0.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.18rem;

    p {
        width: 0.11rem;
        height: 0.05rem;
        margin-left: 0.1rem;
        background-color: #82e3d8;
        border-radius: 20px;
    }
}

.bottom {
    height: 0.92rem;
    display: flex;
    background-color: #ffffff;
    padding-top: 0.12rem;
    justify-content: center;
    width: 3.2rem;
    border-radius: 20px;
    margin-left: 0.15rem;
    // padding-left: 0.1rem;

    img {
        width: 0.61rem;
        height: 0.61rem;
    }

    p {
        margin-left: 0.13rem;
    }

    p:nth-child(1) {
        font-size: 0.13rem;
        margin-bottom: 0.1rem;
        font-weight: 900;
    }

    p:nth-child(2) {
        font-size: 0.1rem;
        color: #6a6c7b;
        width: 2.13rem;
    }
}

.contain>p {
    margin-top: 0.21rem;
    font-size: 0.11rem;
    color: darkgrey;
}
</style>