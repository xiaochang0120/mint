<template>
    <div class="findSelectedContainer">
        <div class="block text-center findBanner" m="t-4">
            <el-carousel trigger="click" height="1.32rem">
                <el-carousel-item v-for="item in bannerDatas" :key="item">
                    <h3 class="small justify-center" text="2xl">
                        <img :src="item.imgUrl" alt="" style="width:100%; height:1.32rem">
                    </h3>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="subtitleBox">
            <ul class="subtitle">
                <li v-for="item in subtitleDatas" :key="item">
                    <span :style="item.color">{{item.content}}</span>
                    <a href="#">{{item.text}}</a>
                </li>
            </ul>
        </div>

        <div class="dynamicBox common-layout" v-for="item in dynamicDatas">
            <header>
                <div class="headerLeft">
                    <p :style="`background-image:url(${item.userFace})`">
                    </p>
                    <span>{{item.userName}}</span>
                </div>
                <div class="headerRight">
                    <p class="r_follow1" v-if="!item.isFollow" @click="userFollow(item.isFollow,item.id)">关注</p>
                    <p class="r_follow2" v-else @click="userFollow($event,item.id)">已关注</p>
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
                <div class="mainTop" @click="gotoCommentPage(item.id)">
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
                <figure class="iconfont" @click="gotoCommentPage(item.id)">&#xe8c5;<figcaption>
                        {{item.commentNum}}</figcaption>
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
import { getBannerList, getSubtitleList, getSelectedDynamicList, changeIsFollow, changeIsCollection, changeIsSupport } from '@/api/selected'
import { mapState, mapMutations } from 'vuex'

export default defineComponent({
    created() {
        getBannerList().then((res) => {
            this.bannerDatas = res.data
        })

        getSubtitleList().then((res) => {
            this.subtitleDatas = res.data
        })
        this.getSelectedDynamic()

    },
    computed: {
        ...mapState(['dynamicID'])
    },
    data() {
        return {
            bannerDatas: [], // 存储轮播图数据
            subtitleDatas: [], // 存储小话题数据
            dynamicDatas: [], // 存储动态数据
        }
    },
    methods: {
        ...mapMutations(['getID']),
        // 关注按钮
        userFollow(isFollow, id) {
            changeIsFollow(!isFollow, id).then()
            this.getSelectedDynamic()
        },
        // 收藏按钮
        userCollection(isCollection, id, collectionNum) {
            changeIsCollection(!isCollection, id, !isCollection ? collectionNum + 1 : collectionNum - 1).then()
            this.getSelectedDynamic()
        },
        // 点赞按钮
        userSupport(isSupport, id, supportNum) {
            changeIsSupport(!isSupport, id, !isSupport ? supportNum + 1 : supportNum - 1).then()
            this.getSelectedDynamic()
        },
        // 获取动态信息
        getSelectedDynamic() {
            getSelectedDynamicList().then((res) => {
                this.dynamicDatas = res.data
            })
        },
        // 评论按钮
        gotoCommentPage(id) {
            // this.$eventBus.emit('dynamicId', id)
            this.getID(id)
            this.$router.push('/dynamicComment')
            console.log(this.dynamicID)
        }
    }
})
</script>

<style lang="scss" scoped>
.findSelectedContainer {
    margin-top: 0.9rem;
    // height: 10rem;
    background: #f5f6fa;
    padding-bottom: 0.6rem;

    .findBanner {
        border-radius: 0.1rem;
        overflow: hidden;

        .demonstration {
            color: var(--el-text-color-secondary);
        }

        .el-carousel__item h3 {
            color: #475669;
            opacity: 0.75;
            line-height: 150px;
            margin: 0;
            text-align: center;
        }

        .el-carousel__item:nth-child(2n) {
            background-color: #99a9bf;
        }

        .el-carousel__item:nth-child(2n + 1) {
            background-color: #d3dce6;
        }
    }

    .subtitleBox {
        height: 1.37rem;
        background-color: #fff;
        margin-top: 0.08rem;

        .subtitle {
            list-style: none;
            height: 1.37rem;
            padding: 0.1rem 0 0.1rem;

            li {
                float: left;
                width: 1.78rem;
                height: 0.39rem;
                padding-left: 0.17rem;

                span {
                    float: left;
                    font-size: 0.08rem;
                    font-weight: 600;
                    text-align: center;
                    line-height: 0.16rem;
                    width: 0.16rem;
                    height: 0.16rem;
                    margin: 0.12rem 0;
                    color: #fff;
                    background-color: #ffe111;
                    border-radius: 0.07rem 0.07rem 0.03rem 0.07rem;
                }

                a {
                    float: left;
                    font-size: 0.13rem;
                    text-decoration: none;
                    color: #383e4e;
                    width: 1.36rem;
                    height: 0.39rem;
                    line-height: 0.39rem;
                    white-space: nowrap;
                    overflow: hidden;
                    text-align: ellipsis;
                    margin-left: 0.09rem;
                }
            }
        }
    }

    .dynamicBox {
        margin: 0.08rem 0 0.06rem;
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
                margin-bottom: 0;
            }

            figure.iconfont:nth-child(3) {
                font-size: 0.17rem;
            }


        }
    }
}
</style>