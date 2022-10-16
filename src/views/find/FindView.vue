<template>
    <div id="findContainer">
        <div class="headerBox">
            <div class="findSearch">
                <span class="iconfont icon-sousuo"></span>
                <input type="text" class="findSearchInput" placeholder="搜索动态、话题、用户">
            </div>
            <div class="findIcon">
                <span class="findFoodList iconfont" @click="$router.push({name:'findtoplcl'})">&#xe65a;</span>
                <span class="findMail iconfont">&#xe714;</span>
            </div>
        </div>
        <div class="findNavBox">
            <ul class="findNav">
                <li :class="currentPage=='selected'?'active':''" @click="gotoPage('selected')"><a>精选</a><span></span>
                </li>
                <span class="dot"></span>
                <li :class="currentPage=='followed'?'active':''" @click="gotoPage('followed')"><a>好友圈</a><span></span>
                </li>
                <span class="dot"></span>
                <li :class="currentPage=='component'?'active':''" @click="gotoPage('component')">
                    <a>结伴圈</a><span></span>
                </li>
            </ul>
        </div>
        <div class="findContent">
            <router-view></router-view>
        </div>
        <div class="findFooterBox">
            <figure @click="$router.push('/')">
                <i class="iconfont">&#xe6bd;</i>
                <figcaption>首页</figcaption>
            </figure>
            <figure>
                <i class="iconfont">&#xe7a0;</i>
                <figcaption>发现</figcaption>
            </figure>
            <figure @click="$router.push({name:'record'})">
                <i class="iconfont">&#xe7b1;</i>
                <figcaption>记录</figcaption>
            </figure>
            <figure>
                <i class="iconfont">&#xe66e;</i>
                <figcaption>商店</figcaption>
            </figure>
            <figure>
                <i class="iconfont">&#xe640;</i>
                <figcaption>我的</figcaption>
            </figure>
        </div>
        <div class="findDynamicCreater" @click="this.$router.push({ path: '/createDynamic' })">
            <p class="iconfont">&#xe818;</p>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            findSearchInput: '',
            currentPage: 'selected'
        }
    },
    methods: {
        gotoPage(pageName) {
            this.$router.push({ name: pageName })
            this.currentPage = pageName
        }
    }
})
</script>

<style lang="scss" scoped>
#findContainer {
    .headerBox {
        position: fixed;
        top: 0;
        width: 100%;
        height: 0.54rem;
        z-index: 999;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #fff;

        .findSearch {
            background-color: #eff0f2;
            width: 2.05rem;
            height: 0.27rem;
            padding-left: 0.12rem;
            border-radius: 0.14rem;

            .icon-sousuo {
                font-size: 0.18rem;
                color: #00cb8c;
                font-weight: 600;
                line-height: 0.29rem;
                float: left;
            }

            .findSearchInput {
                background-color: #eff0f2;
                border: none;
                font-size: 0.12rem;
                line-height: 0.27rem;
                margin-left: 0.10rem;
                float: left;
            }
        }

        .findIcon {
            display: flex;
            align-items: center;
            justify-content: center;

            .findFoodList,
            .findMail {
                font-size: 0.20rem;
                font-weight: 600;
                color: #677487;
            }

            .findMail {
                font-size: 0.22rem;
                margin-left: 0.21rem;
                margin-top: 0.02rem;
            }
        }
    }

    .findNavBox {
        position: fixed;
        top: 0.54rem;
        width: 100%;
        background-color: #fff;
        z-index: 999;

        .findNav {
            height: 0.3rem;
            list-style: none;
            display: flex;
            justify-content: space-around;
            align-items: center;

            li {
                width: 1.17rem;
                float: left;
                display: flex;
                flex-direction: column;
                align-items: center;

                a {
                    text-align: center;
                    font-size: 0.12rem;
                    font-weight: 600;
                    color: #a7acbf;
                    height: 0.23rem;
                }

                span {
                    width: 0.12rem;
                    height: 0.05rem;
                }
            }

            li.active {
                a {
                    color: #373d53;
                }

                span {
                    background-color: #b2ecd6;
                    border-radius: 0.03rem;
                }
            }

            .dot {
                width: 0.04rem;
                height: 0.04rem;
                background-color: #b2ecd6;
                border-radius: 50%;
            }
        }
    }

    .findFooterBox {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 0.6rem;
        border-top: 1px solid #f5f6fa;
        display: flex;
        // justify-content: center;
        align-items: center;
        background-color: #fff;
        z-index: 999;

        figure {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0;

            i {
                font-size: 0.21rem;
                font-weight: 600;
                color: #dfe0e5;
                line-height: 0.21rem;
            }

            figcaption {
                width: 0.3rem;
                font-size: 0.1rem;
                color: #a9acbb;
                margin-top: 0.07rem;
                line-height: 0.1rem;
            }
        }

        figure:nth-child(2) {
            i {
                font-size: 0.26rem;
                line-height: 0.26rem;
                color: #5bc891;
            }

            figcaption {
                margin-top: 0.03rem;
                color: #02bb77;
            }
        }
    }

    .findDynamicCreater {
        position: fixed;
        top: 82%;
        right: 5%;
        width: 0.48rem;
        height: 0.48rem;
        border-radius: 50%;
        background-color: #00d082;
        box-shadow: 0 0.03rem 0.08rem rgba(0, 208, 130, 0.5);

        .iconfont {
            font-size: 0.26rem;
            font-weight: 600;
            line-height: 0.48rem;
            margin: 0;
            text-align: center;
            color: #fff;
        }
    }
}
</style>