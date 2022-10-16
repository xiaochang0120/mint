<template>
    <div class="select">
        <!--element单选框   change	绑定值变化时触发的事件	选中的 Radio label 值 -->
        <el-radio-group @change="change1" v-model="radio1" size="small" >
            <el-radio-button @click="item1=item" :label="item" v-for="(item,index) in (arr.meal)" />
        </el-radio-group>
    </div>
    <div class="contain">
        <div class="middle" v-for="(item) in (arr1)">
            <img :src="item.img" alt="">
            <p>{{item.name}}</p>
            <el-icon>
                <ArrowRight />
            </el-icon>
        </div>
    </div>

</template>

<script>
import { defineComponent } from 'vue'
import { getSort } from '../../api/sort'
import { Back, ArrowRight } from '@element-plus/icons-vue'
export default defineComponent({
    data() {
        return {
            arr: [],
            radio1: "选择",
            item1: 0,
            arr1: []
        }
    },
    components: {
        ArrowRight
    },
    methods: {
        // 筛选触发点击事件，渲染页面
        change1() {
            console.log(this.item1);
            console.log(this.arr);
            if (this.item1 == '全部') {
                this.getChange()
            } else {
                this.arr1 = this.arr.list.filter((item) => item.title === this.item1);
                console.log(this.arr1)
            }
        },
        // 获取数据信息
        getChange() {
            getSort().then((res) => {
                this.arr = res.data.hot
                this.arr1 = this.arr.list
                console.log(this.arr)
            })
        }
    },
    created() {
        this.getChange()
    }
})
</script>

<style lang="scss" scoped>
body {
    background-color: #fff;
}

img {
    width: 0.42rem;
    height: 0.42rem;
}

.mb-4 {
    width: 2.5rem;
    display: flex;
    justify-content: space-between;

    :deep(.el-button) {
        margin-top: 0.1rem;
    }
}

.middle {
    display: flex;
    align-items: center;
    border-bottom: 1px #f8f8f8 solid;
    height: 0.6rem;

    p {
        font-size: 0.13rem;
        margin-left: 0.13rem;
        font-weight: 900;
        white-space: nowrap;
        flex: 1;
        // width: 2rem !important;
    }
}

.el-radio-group[data-v-59c702c6] {
    height: 0.8rem;
}

.el-radio-button {
    margin-right: 0.1rem;

    :deep(.el-radio-button__inner) {
        border-radius: 20px !important;
    }
}
</style>