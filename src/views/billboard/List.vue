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
        <div class="big">
            <div class="header">
                <el-icon @click="$router.push('/')">
                    <Back />
                </el-icon>
                <h4>食物榜单</h4>
            </div>

            <div class="common-layout">
                <el-container>
                    <el-tabs :tab-position="tabPosition" style="height: 200px" class="demo-tabs" :stretch="true"
                        @tab-click="handleClick">
                        <el-tab-pane label="热门"></el-tab-pane>
                        <el-tab-pane label="薄荷"></el-tab-pane>
                        <el-tab-pane label="红黑榜"></el-tab-pane>
                        <el-tab-pane label="减肥"></el-tab-pane>
                        <el-tab-pane label="增肌"></el-tab-pane>
                        <el-tab-pane label="便秘"></el-tab-pane>
                    </el-tabs>
                    <el-main>
                        <router-view>
                        </router-view>
                    </el-main>
                </el-container>
            </div>
        </div>
    </body>

    </html>
</template>

<script>
import { defineComponent } from 'vue'
import { Back } from '@element-plus/icons-vue'
// import hot from '../billboard/hot.vue'
export default defineComponent({
    data() {
        return {
            tabPosition: 'left',
        }
    },
    components: {
        Back,
        // hot
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
            switch (tab.index) {
                case '0':
                    this.$router.push({ name: 'hot' })
                    break;
            }
            //这样才能获取每个el-tab-pane的name属性
        },
        // tiao() {
        //     console.log(111111)
        //     this.$router.push('/hot')
        // }
    }
})
</script>

<style lang="scss" scoped>
body {
    background-color: #fff;
    height: 100%;
}

.header {
    height: 0.48rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    padding-left: 0.2rem;
    position: relative;
    width: 100%;
    margin-bottom: 0.17rem;
}

.header h4 {
    font-size: 0.14rem;
    float: left;
    margin-left: 0.31rem;
}

// 
.demo-tabs {
    // width: 0.6rem;
    font-size: 0.13rem;

    :deep(.el-tabs__item) {
        font-size: 0.13rem;
        padding-left: 0.04rem;
        color: #9b999a;
    }
}

:deep(.el-tabs__header) {
    height: 5rem
}

.el-container {
    height: 5.75rem;
}

.el-header {
    padding: 0;
    width: 2.6rem;
}

:deep(.el-tabs) {
    height: 5.75rem !important;
    justify-content: center;
}

.el-main {
    padding-top: 0;
    margin-left: 0.1rem;
    flex-basis: 0;
}

:deep(.el-tabs__nav-scroll) {
    height: 8rem;
    background-color: #f8f8f8;
}

:deep(.el-tabs__item is-left:hover) {
    background-color: aqua;
}

:deep(.el-main) {
    padding-left: 0.1rem;
}

:deep(.el-tabs--left .el-tabs__active-bar.is-left) {
    left: 0;
    right: auto;
    ;
}

:deep(.el-tabs__item:hover) {
    background-color: #fff;
}

// :deep(.el-container[data-v-20754985]){
// }
</style>