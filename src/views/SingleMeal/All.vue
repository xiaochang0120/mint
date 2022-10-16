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
            <el-icon @click="$router.push({name:'foodbank'})">
                <Back />
            </el-icon>
            <h4>单餐食谱</h4>
        </div>


        <!-- 单餐列表 -->
        <div class="list">
            <h5 v-show="isOpen">所有食谱</h5>
            <span>筛选</span>
            <div class="icon" @click="isOpen=!isOpen">
                <el-icon v-if="isOpen">
                    <CaretBottom />
                </el-icon>
                <el-icon v-else>
                    <CaretTop />
                </el-icon>
                <el-drawer v-model="isOpen" direction="ttb" size="10%" :with-header="false">
                    <template #default>
                        <div class="select">
                            <p>餐别</p>
                            <el-radio-group @change="change1" v-model="radio1" size="small">
                                <el-radio-button @click="time='早餐'" label="早餐" />
                                <el-radio-button @click="time='中餐'" label="中餐" />
                                <el-radio-button @click="time='晚餐'" label="晚餐" />
                            </el-radio-group>
                        </div>
                        <div style="margin-top: 20px" class="select">
                            <p>热量</p>
                            <el-radio-group @change="change2" v-model="radio2" size="small">
                                <el-radio-button @click="number=200" label="200" />
                                <el-radio-button @click="number=300" label="300" />
                                <el-radio-button @click="number=400" label="400" />
                                <el-radio-button @click="number=500" label="500" />
                            </el-radio-group>
                        </div>
                    </template>
                </el-drawer>
            </div>

            <div class="middleOne" v-for="(item) in arr1" @click="rout(item.flag)">
                <p>{{item.name}}</p>
                <h4 v-for="(img) in item.img">
                    <img :src="(img)" alt="">
                </h4>

            </div>
        </div>
    </body>

    </html>
</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios';
import { AllList } from '../../api/all.js'
import { mapState, mapMutations } from 'vuex'
import { Back, ArrowRight, CaretBottom, CaretTop } from '@element-plus/icons-vue'
export default defineComponent({
    data() {
        return {
            time: 0,
            arr: [],
            arr1: [],
            isOpen: false,
            hello: false,
            number: 0,
            radio1: '餐别',
            radio2: '能量'
        }
    },
    components: {
        Back,
        CaretBottom,
        CaretTop
    },
    methods: {
        ...mapMutations(['increment']),
        cancelClick() { },
        confirmClick() {
            this.isOpen = false;
        },
        getList() {
            AllList().then((res) => {
                this.arr = res.data
                this.arr1 = this.arr
            })
        },
        change1() {
            if (this.time === 0) {
            } else {
                this.arr1 = this.arr.filter((item) => item.time === this.time);
            }

        },
        change2() {
            // if (this.time === 0) {
            //     } else {
            //         this.arr1 = this.arr.filter((item) => item.time === this.time);
            if (this.number === 0) {
            } else {
                this.arr1 = this.arr1.filter((item) => item.number === this.number);
            }
            // }

        },
        rout(flag) {
            this.increment(flag);
            this.$router.push({ name: 'food' })
        }
    },
    computed: {
        ...mapState(['count']),
        // fileList() {
        //     console.log(this.time)
        //     if (this.time === null) {
        //     } else {
        //         // this.getList()
        //         this.arr = this.arr.filter((item) => item.time === this.time);
        //         // this.getList()
        //         // if (this.number === 0) {
        //         // } else {
        //         //     this.arr = this.arr.filter((item) => item.number === this.number);
        //         // }
        //     }
        // },

        // updated(){
        //     this.getList()
        //     console.log(this.time);
    },


    created() {
        this.getList()

    }
})
</script>

<style lang="scss" scoped>
.header {
    height: 0.48rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    padding-left: 0.2rem;
    // margin-bottom: 0.32rem;
}


.header h4 {
    font-size: 0.14rem;
    float: left;
    margin-left: 0.31rem;
}

.list {
    position: relative;

    h5 {
        position: absolute;
        top: 0.15rem;
        left: 0.1rem
    }

    .mb-4 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.2rem;

        el-button {
            margin-bottom: 0.1rem;
        }

        a {
            text-decoration: none;
        }

    }
}



.list .icon {
    color: rgb(127, 133, 133);
    position: relative;
    top: -0.03rem;
    left: 3.2rem;

    // float: right;
    // padding-right: 0.12rem;
    // margin-bottom: 0.12rem
    .eat {
        // width:3.6rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
}

.list span {
    position: relative;
    left: 2.6rem;
    top: 0.15rem;
    color: rgb(127, 133, 133);
}

.select {
    display: flex;
    align-items: center;

    p {
        font-size: 0.13rem;
        margin-right: 0.1rem;
    }
}

.el-radio-button {
    // border: none;
    // border-radius: 0.2rem !important;
    margin-right: 0.2rem;

    :deep(.el-radio-button__inner) {
        border-radius: 20px !important;
    }
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
    margin-bottom: 0.11rem;
    // margin-top: 0.11rem;
    margin-left: 0.25rem;
}

.middleOne img {
    display: block;
    width: 0.4rem;
    height: 0.4rem;
    float: left;
    margin-top: 0.15rem;
    margin-right: 0.14rem;
}

:deep(.el-overlay) {
    top: 0.9rem;
    width: 3.6rem
}

.el-overlay {
    height: 0.1rem;
}

.el-drawer__header {
    height: 1rem !important;
}
</style>