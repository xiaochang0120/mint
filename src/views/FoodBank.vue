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
            <el-icon @click="$router.push('/')">
                <Back />
            </el-icon>
            <h4>精选食谱</h4>
        </div>

        <div class="main">
            <!-- 单餐 -->
            <div class="bannerBig">
                <div class="banner1">
                    <h3>单餐</h3>
                    <!-- 路由跳转 -->
                    <p @click="$router.push({name:'singlemeal'})">查看全部 <el-icon>
                            <ArrowRight />
                        </el-icon>
                    </p>
                </div>
                <div class="middleBig">
                    <div class="middle" v-for="(item) in arr">
                        <!--vuex的传参 -->
                        <div class="middleOne" @click="rout(item.flag.flag1)">
                            <p>{{item.name.id1}}</p>
                            <h4 v-for="(img) in item.img1">
                                <img :src="(img)" alt="">
                            </h4>

                        </div>
                        <div class="middleTwo" @click="rout(item.flag.flag2)">
                            <p>{{item.name.id2}}</p>
                            <h4 v-for="(img) in item.img2">
                                <img :src="(img)" alt="">
                            </h4>
                        </div>
                    </div>

                </div>
            </div>

            <!--薄荷生活优选  -->
            <div class="life">
                <div class="banner1">
                    <h3>薄荷生活优选</h3>
                    <p>查看全部 <el-icon>
                            <ArrowRight />
                        </el-icon>
                    </p>
                </div>
                <div class="middleBig">
                    <div class="middle" v-for="(item) in arr1">
                        <div class="middleOne">
                            <h4 v-for="(img) in item.img1">
                                <img :src="(img)" alt="">
                            </h4>
                            <article>
                                <p v-for="(item) in item.name.id1">{{item}}</p>
                            </article>

                        </div>
                        <div class="middleTwo">
                            <h4 v-for="(img) in item.img2">
                                <img :src="(img)" alt="">
                            </h4>
                            <article>
                                <p v-for="(item) in item.name.id2">{{item}}</p>
                            </article>
                        </div>
                    </div>


                </div>
            </div>


            <!-- 流行减肥 -->
            <div class="life">
                <div class="banner1">
                    <h3>流行减肥</h3>
                    <p>查看全部 <el-icon>
                            <ArrowRight />
                        </el-icon>
                    </p>
                </div>
                <div class="middleBig">
                    <div class="middle" v-for="(item) in arr2">
                        <div class="middleOne">
                            <h4 v-for="(img) in item.img1">
                                <img :src="(img)" alt="">
                            </h4>
                            <article>
                                <p v-for="(item) in item.name.id1">{{item}}</p>
                            </article>

                        </div>
                        <div class="middleTwo">
                            <h4 v-for="(img) in item.img2">
                                <img :src="(img)" alt="">
                            </h4>
                            <article>
                                <p v-for="(item) in item.name.id2">{{item}}</p>
                            </article>
                        </div>
                    </div>


                </div>
            </div>


            <!-- 健康经典 -->
            <div class="life">
                <div class="banner1">
                    <h3>健康经典</h3>
                    <p>查看全部 <el-icon>
                            <ArrowRight />
                        </el-icon>
                    </p>
                </div>
                <div class="middleBig">
                    <div class="middle" v-for="(item) in arr3">
                        <div class="middleOne">
                            <h4 v-for="(img) in item.img1">
                                <img :src="(img)" alt="">
                            </h4>
                            <article>
                                <p v-for="(item) in item.name.id1">{{item}}</p>
                            </article>

                        </div>
                        <div class="middleTwo">
                            <h4 v-for="(img) in item.img2">
                                <img :src="(img)" alt="">
                            </h4>
                            <article>
                                <p v-for="(item) in item.name.id2">{{item}}</p>
                            </article>
                        </div>
                    </div>


                </div>
            </div>

            <!-- 人群营养 -->
            <div class="life">
                <div class="banner1">
                    <h3>人群营养</h3>
                    <p>查看全部 <el-icon>
                            <ArrowRight />
                        </el-icon>
                    </p>
                </div>
                <div class="middleBig">
                    <div class="middle" v-for="(item) in arr4">
                        <div class="middleOne">
                            <h4 v-for="(img) in item.img1">
                                <img :src="(img)" alt="">
                            </h4>
                            <article>
                                <p v-for="(item) in item.name.id1">{{item}}</p>
                            </article>

                        </div>
                        <div class="middleTwo">
                            <h4 v-for="(img) in item.img2">
                                <img :src="(img)" alt="">
                            </h4>
                            <article>
                                <p v-for="(item) in item.name.id2">{{item}}</p>
                            </article>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    </body>

    </html>
</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios';
import { Back, ArrowRight } from '@element-plus/icons-vue'
import { getFood, getLife, getReduce, getHealthy, getNutrition } from '../api/foodbank'
import { mapMutations, mapState } from 'vuex'  //vuex方法的引入
export default defineComponent({
    data() {
        return {
            arr: [],
            arr1: [],
            arr2: [],
            arr3: [],
            arr4: []
        }
    },
    methods: {
        // vuex同步数据的修改
        ...mapMutations(['increment']),
        // flag从上边获取拿到的参数
        rout(flag) {
            // 路由跳转
            this.$router.push({ name: 'food' })
            // 实现vuex数据的同步修改，也就是count值的修改
            this.increment(flag)
            // console.log(this.count)
        }
    },
    computed: {
        ...mapState(['count'])
    },
    components: {
        Back,
        ArrowRight
    },
    created() {
        getFood().then((res) => {
            this.arr = res.data
        })
        getLife().then((res) => {
            this.arr1 = res.data
        })
        getReduce().then((res) => {
            this.arr2 = res.data
        })
        getHealthy().then((res) => {
            this.arr3 = res.data
        })
        getNutrition().then((res) => {
            this.arr4 = res.data
        })
    }
})
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    margin: 0;
    font-size: 16px;
    display: flex;
    flex-direction: column;
}



.header {
    height: 0.48rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    padding-left: 0.2rem;
    position: fixed;
    width: 100%;
}


.header h4 {
    font-size: 0.14rem;
    float: left;
    margin-left: 0.31rem;
}

.main {
    overflow: auto;
    flex: 1;
    margin-top: 0.5rem;
}

.banner1 {
    height: 0.47rem;
    // padding-top: 0.18rem;
    background-color: #f6f7fb;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 0.22rem;
}

.banner1 h3 {
    font-size: 0.14rem;
    font-weight: 400;
}

.banner1 p {
    padding-right: 0.25rem;
    color: #a6a6ae;
    font-size: 0.1rem;
}

.middleBig {
    display: flex;
    align-items: flex-end;
    flex-wrap: nowrap;
    overflow: auto;
}

::-webkit-scrollbar {
    display: none;
}

.middle {
    height: 2.14rem;
    background-color: #f6f7fb;
    padding-left: 0.2rem;
}

.middleOne {
    width: 3.14rem;
    border-radius: 20px;
    padding-left: 0.15rem;
    padding-top: 0.17rem;
    height: 1rem;
    background-color: #fff;

}

.middleOne img {
    display: block;
    width: 0.4rem;
    height: 0.4rem;
    float: left;
    margin-top: 0.15rem;
    margin-right: 0.14rem;
}

.middleTwo {
    width: 3.14rem;
    border-radius: 20px;
    padding-left: 0.15rem;
    padding-top: 0.17rem;
    height: 1rem;
    background-color: #fff;
    margin-top: 0.11rem;
}

.middleTwo img {
    display: block;
    width: 0.4rem;
    height: 0.4rem;
    float: left;
    margin-top: 0.15rem;
    margin-right: 0.14rem;
}

.life img {
    display: block;
    width: 0.5rem;
    height: 0.5rem;
}

.life article {
    padding-top: 0.21rem;
}

.life article p:nth-child(1) {
    font-size: 0.14rem;
    font-weight: 900;
}

.life article p:nth-child(2) {
    font-size: 0.13rem;
    color: #a6a6ae;
    margin-top: 0.1rem;
}
</style>