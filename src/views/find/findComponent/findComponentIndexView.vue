<template>
    <div class="findComponentContainer">
        <div class="componentImg"></div>
        <div class="whatIsIt">
            <h3>什么是结伴圈？</h3>
            <p>顾名思义，结伴圈就是与好友一起结伴，组成一个最多10人的小圈子，在共同的圈子里，大家可以互相看到对方的体重目标进度和日常饮食详情（可关闭）、运动等记录，互相督促提醒，一起努力健康生活，实现自己的目标~</p>
        </div>
        <div class="getComponent">
            <h3>你现在还没有结伴圈哦！</h3>
            <h3>可以通过以下方式开启结伴圈~</h3>
            <div class="getComponentTop">
                <div class="gc_tLeft">
                    <h5>加入结伴圈</h5>
                    <p>收到邀请码，加入ta的结伴圈</p>
                </div>
                <div class="gc_tRight">
                    <h5>创建结伴圈</h5>
                    <p>我做圈主，邀请好友加入我的结伴圈</p>
                </div>
            </div>
            <div class="getComponentFooter">
                <h5>一键匹配</h5>
                <p>找不到圈友？试试一键匹配吧！</p>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {}
    },
    mounted() {
        let container = document.querySelector('.findComponentContainer');
        let appHeight = document.body.offsetHeight;
        let containerHeight = container.offsetHeight;

        container.style.paddingBottom = (2 * (appHeight - containerHeight) / 300) + 'rem'
    }
})
</script>

<style lang="scss" scoped>
.findComponentContainer {
    padding-top: 1.61rem;
    background: #f6f7fb;
    // padding-bottom: 1.6rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .componentImg {
        width: 1.41rem;
        height: 1.01rem;
        background: url(./src/assets/findimg1.jpg) center center;
        background-size: 100% 100%;
        position: absolute;
        top: 1.08rem;
        right: 0.26rem;
    }

    h3 {
        font-size: 0.14rem;
        line-height: 0.28rem;
        color: #38394e;
    }

    .whatIsIt {
        width: 3.2rem;
        height: 1.66rem;
        background-color: #fff;
        border-radius: 0.1rem;
        padding: 0.21rem 0.17rem;

        p {
            font-size: 0.11rem;
            line-height: 0.2rem;
            color: #393745;
        }
    }

    .getComponent {
        width: 3.2rem;
        background-color: #fff;
        border-radius: 0.1rem;
        padding: 0.17rem 0.17rem;
        margin-top: 0.19rem;
        display: flex;
        flex-direction: column;

        h3 {
            line-height: 0.21rem;
        }

        h5 {
            font-size: 0.13rem;
            line-height: 0.25rem;
            color: #393b52;
        }

        p {
            font-size: 0.1rem;
            line-height: 0.18rem;
            color: #394456;
        }

        .getComponentTop {
            display: flex;
            justify-content: space-between;
            margin-top: 0.16rem;

            .gc_tLeft,
            .gc_tRight {
                width: 1.38rem;
                height: 0.79rem;
                padding: 0.07rem 0.12rem;
                border-radius: 0.08rem;
            }

            .gc_tLeft {
                background-color: #e7f3ff;
            }

            .gc_tRight {
                background-color: #eefbf4;
            }
        }

        .getComponentFooter {
            width: 3rem;
            background-color: #426afd;
            margin-top: 0.12rem;
            padding: 0.07rem 0.12rem;
            border-radius: 0.08rem;

            h5,
            p {
                color: #fff;
            }
        }

    }


}
</style>