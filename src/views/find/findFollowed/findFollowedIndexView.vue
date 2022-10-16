<template>
    <div class="findFollowedContainer">
        <div class="followedTitle">好友动态</div>
        <div class="dynamicBox common-layout" v-for="item in dynamicDatas">
            <header>
                <div class="headerLeft">
                    <p :style="`background-image:url(${item.userFace})`">
                    </p>
                    <span>{{item.userName}}</span>
                </div>
                <div class="headerRight">
                    <el-dropdown>
                        <span class="el-dropdown-link iconfont">&#xe748;</span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item style="font-size:0.08rem;"><span class="iconfont"
                                        style="font-weight: 600; font-size: 0.07rem; color: #afafaf; margin-right:0.07rem">&#xe619;</span>分享
                                </el-dropdown-item>
                                <el-dropdown-item style="font-size:0.08rem;"><span class="iconfont"
                                        style="font-weight: 600; font-size: 0.07rem; color: #afafaf; margin-right:0.07rem">&#xe64a;</span>不感兴趣
                                </el-dropdown-item>
                                <el-dropdown-item style="font-size:0.08rem;"><span class="iconfont"
                                        style="font-weight: 600; font-size: 0.07rem; color: #afafaf; margin-right:0.07rem">&#xe799;</span>举报
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
            </header>
            <main>
                <div class="mainTop">
                    <p v-for="t in item.text">{{t}}</p>
                </div>
                <div class="mainImg">
                    <img v-for="i in item.imgUrl" :src="i" alt="">
                </div>
                <div v-show="item.haveSubtitle" class="mainFooter"><span>{{item.subtitle}}</span></div>
            </main>
            <footer>
                <figure class="iconfont" v-if="!item.isCollection"
                    @click="userCollection(item.isCollection,item.id,item.collectionNum)">
                    &#xe616;<figcaption>{{item.collectionNum}}
                    </figcaption>
                </figure>
                <figure class="iconfont figActive" v-else
                    @click="userCollection(item.isCollection,item.id,item.collectionNum)">&#xe616;
                    <figcaption>{{item.collectionNum}}
                    </figcaption>
                </figure>
                <figure class="iconfont">&#xe8c5;<figcaption>{{item.commentNum}}</figcaption>
                </figure>
                <figure class="iconfont" v-if="!item.isSupport"
                    @click="userSupport(item.isSupport,item.id,item.supportNum)">&#xe617;
                    <figcaption>{{item.supportNum}}</figcaption>
                </figure>
                <figure class="iconfont figActive" v-else @click="userSupport(item.isSupport,item.id,item.supportNum)">
                    &#xe617;
                    <figcaption>{{item.supportNum}}
                    </figcaption>
                </figure>
            </footer>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { getSelectedDynamicList, changeIsFollow, changeIsCollection, changeIsSupport } from '@/api/selected'

export default defineComponent({
    created() {
        this.getFollowedDynamic()
    },
    data() {
        return {
            dynamicDatas: [], // 存储动态数据
        }
    },
    methods: {
        // 收藏按钮
        userCollection(isCollection, id, collectionNum) {
            changeIsCollection(!isCollection, id, !isCollection ? collectionNum + 1 : collectionNum - 1).then()
            this.getFollowedDynamic()
        },
        // 点赞按钮
        userSupport(isSupport, id, supportNum) {
            changeIsSupport(!isSupport, id, !isSupport ? supportNum + 1 : supportNum - 1).then()
            this.getFollowedDynamic()
        },
        // 获取好友圈动态信息
        getFollowedDynamic() {
            getSelectedDynamicList().then((res) => {
                this.dynamicDatas = res.data.filter((item) => item.isFollow)
            })
        }
    }
})
</script>

<style lang="scss" scoped>
.findFollowedContainer {
    margin-top: 0.9rem;
    // height: 10rem;
    background: #f5f6fa;
    padding-bottom: 0.6rem;

    .followedTitle {
        height: 0.35rem;
        font-size: 0.15rem;
        font-family: '新宋体';
        font-weight: 600;
        color: #777;
        line-height: 0.35rem;
        padding-left: 0.2rem;
        background-color: #fff;
    }

    .dynamicBox {
        margin: 0.04rem 0 0.06rem;
        border-radius: 0.12rem;
        background: #fff;
        padding: 0 0.2rem;

        header {
            height: 0.8rem;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .headerLeft {
                height: 0.8rem;
                display: flex;
                align-items: center;

                p {
                    width: 0.4rem;
                    height: 0.4rem;
                    border: 1px solid #f3f7fa;
                    background-size: 100% 100%;
                    border-radius: 50%;
                    margin: 0 0.12rem 0 0.01rem;
                }

                span {
                    font-size: 0.15rem;
                    color: #687387;
                }
            }

            .headerRight {
                display: flex;
                align-items: center;

                p {
                    width: 0.63rem;
                    height: 0.27rem;
                    border-radius: 0.14rem;
                    font-size: 0.1rem;
                    line-height: 0.27rem;
                    text-align: center;
                    margin-right: 0.25rem;
                    border: 1px solid #01bc77;
                }

                p.r_follow1 {
                    background-color: #01bc77;
                    color: #fff;
                }

                p.r_follow2 {
                    color: #01bc77;
                }

                .el-dropdown {
                    .el-dropdown-link {
                        font-size: 0.09rem;
                        color: #dfdfe7;
                    }
                }
            }

        }

        main {
            .mainTop {
                p {
                    font-size: 0.13rem;
                    line-height: 0.28rem;
                    color: #383e4e;
                }
            }

            .mainImg {
                margin-top: 0.06rem;

                img {
                    display: inline-block;
                    width: 1.2rem;
                    height: 1.2rem;
                    border-radius: 0.15rem;
                    margin: 0 0.09rem 0.09rem 0;
                }
            }

            .mainFooter {
                span {
                    display: block;
                    width: 0.62rem;
                    height: 0.21rem;
                    background-color: #e1f6ef;
                    color: #0cb677;
                    border-radius: 0.1rem;
                    font-size: 0.06rem;
                    line-height: 0.21rem;
                    text-align: center;

                }
            }
        }

        footer {
            height: 0.51rem;
            display: flex;
            justify-content: space-around;
            align-items: center;

            figure.iconfont {
                display: flex;
                align-items: center;
                font-size: 0.18rem;
                color: #dfe0e5;

                figcaption {
                    font-size: 0.07rem;
                    color: #a9acbb;
                    margin-left: 0.07rem;
                    margin-top: 0.01rem;
                }
            }

            figure.iconfont.figActive {
                color: #03ca77;

                figcaption {
                    color: #03ca77;
                }
            }

            figure.iconfont:nth-child(2) {
                font-size: 0.2rem;
                margin-top: 0.01rem;
            }

            figure.iconfont:nth-child(3) {
                font-size: 0.17rem;
            }


        }
    }
}
</style>
