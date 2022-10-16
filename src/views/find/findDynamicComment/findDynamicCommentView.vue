<template>
    <div class="findDynamicCommentContainer">
        <header class="findDynamicCommentHeader">
            <div class="fheader_left">
                <span class="iconfont" @click="$router.go(-1)">&#xe76a;</span>
                <p>动态详情</p>
            </div>
            <div class="fheader_right">
                <el-dropdown>
                    <span class="el-dropdown-link iconfont">&#xe748;</span>
                    <template #dropdown>
                        <el-dropdown-menu style="width:1.3rem; height:1.5rem">
                            <el-dropdown-item style="font-size:0.15rem; line-height: 0.4rem; vertical-align: center;">
                                <span class="iconfont"
                                    style="font-weight: 600; font-size: 0.16rem; color: #3e3d4b; margin-right:0.18rem">&#xe619;</span>分享
                            </el-dropdown-item>
                            <el-dropdown-item style="font-size:0.15rem; line-height: 0.4rem; vertical-align: center;">
                                <span class="iconfont"
                                    style="font-weight: 600; font-size: 0.16rem; color: #3e3d4b; margin-right:0.18rem">&#xe64a;</span>不感兴趣
                            </el-dropdown-item>
                            <el-dropdown-item style="font-size:0.15rem; line-height: 0.4rem; vertical-align: center;">
                                <span class="iconfont"
                                    style="font-weight: 600; font-size: 0.16rem; color: #3e3d4b; margin-right:0.18rem">&#xe799;</span>举报
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </header>
        <main class="findDynamicCommentMain">
            <div class="main_top">
                <div class="dynamicBox common-layout">
                    <header>
                        <div class="headerLeft">
                            <p :style="`background-image:url(${dynamicData.userFace})`">
                            </p>
                            <span>{{dynamicData.userName}}</span>
                        </div>
                        <div class="headerRight">
                            <p class="r_follow1" v-if="!dynamicData.isFollow"
                                @click="userFollow(dynamicData.isFollow,dynamicData.id)">关注</p>
                            <p class="r_follow2" v-else @click="userFollow($event,dynamicData.id)">已关注</p>
                        </div>
                    </header>
                    <main>
                        <div class="mainTop">
                            <p v-for="t in dynamicData.text">{{t}}</p>
                        </div>
                        <div class="mainImg">
                            <img v-for="i in dynamicData.imgUrl" :src="i" alt="">
                        </div>
                        <div v-show="dynamicData.haveSubtitle" class="mainFooter"><span>{{dynamicData.subtitle}}</span>
                        </div>
                    </main>
                </div>
            </div>
            <div class="main_bottom">
                <h3>最新评论&nbsp;{{commentContents.length}}</h3>
                <div class="dynamicComments" v-for="item in commentContents">
                    <div class="dc_top">
                        <div class="dc_tleft">
                            <img :src="item.faceUrl" alt="" class="dc_tlImg">
                            <div class="dc_tlUserInfo">
                                <h5>{{item.name}}</h5>
                                <p>{{item.time}}&emsp;{{item.province}}</p>
                            </div>
                        </div>
                        <div class="dc_tright">
                            <figure class="iconfont" v-if="!item.isSupport"
                                @click="commentSupport(item.id,item.isSupport)">
                                <figcaption>{{item.supportNum}}</figcaption>
                                &#xe622;
                            </figure>
                            <figure class="iconfont active" v-else @click="commentSupport(item.id,item.isSupport)">
                                <figcaption>{{item.supportNum}}</figcaption>
                                &#xe622;
                            </figure>
                            <figure class="iconfont">&#xe604;</figure>
                            <figure class="iconfont">&#xe611;</figure>
                        </div>
                    </div>
                    <div class="dc_main">{{item.content}}</div>
                </div>
                <div class="main_final">
                    没有更多内容了...
                </div>
            </div>
        </main>
        <footer>
            <div class="footer_left">
                <el-input v-model="inputCommentContent" placeholder="说点什么吧~" @focus="isNowCommemt=true" />
            </div>
            <div class="footer_right" v-show="inputCommentContent==''">
                <figure class="iconfont" v-if="!dynamicData.isCollection"
                    @click="userCollection(dynamicData.isCollection,dynamicData.id,dynamicData.collectionNum)">
                    &#xe616;
                    <figcaption>{{dynamicData.collectionNum}}</figcaption>
                </figure>
                <figure class="iconfont figActive" v-else
                    @click="userCollection(dynamicData.isCollection,dynamicData.id,dynamicData.collectionNum)">
                    &#xe616;
                    <figcaption>{{dynamicData.collectionNum}}</figcaption>
                </figure>
                <figure class="iconfont" v-if="!dynamicData.isSupport"
                    @click="userSupport(dynamicData.isSupport,dynamicData.id,dynamicData.supportNum)">
                    &#xe617;
                    <figcaption>{{dynamicData.supportNum}}</figcaption>
                </figure>
                <figure class="iconfont figActive" v-else
                    @click="userSupport(dynamicData.isSupport,dynamicData.id,dynamicData.supportNum)">
                    &#xe617;
                    <figcaption>{{dynamicData.supportNum}}</figcaption>
                </figure>
                <figure class="iconfont">
                    &#xe683;
                </figure>
            </div>
            <div class="footer_right" v-show="inputCommentContent!=''">
                <figure class="iconfont">
                    &#xe64a;
                </figure>
                <figure class="iconfont">
                    &#xe81e;
                </figure>
                <figure class="iconfont" @click="addUserComment">
                    <span>发送</span>
                </figure>
            </div>
        </footer>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { getSelectedDynamic, changeCommentNum, changeIsFollow, changeIsCollection, changeIsSupport, changeSelectedDynamic } from '@/api/selected'
import { mapState } from 'vuex'

export default defineComponent({
    created() {
        // this.$eventBus.on('dynamicId', id => {
        //     console.log("before", this.currentDynamicId)
        //     this.currentDynamicId = id
        //     console.log("after", this.currentDynamicId)
        // })
        // console.log("outside", this.currentDynamicId)
        getSelectedDynamic(this.dynamicID).then((res) => {
            this.dynamicData = res.data
            this.commentContents = res.data.commentContent
        })
    },
    computed: {
        ...mapState(['dynamicID'])
    },
    data() {
        return {
            dynamicData: {}, // 在发现页选中的动态内容
            commentContents: [], // 已有的评论内容
            inputCommentContent: '', // 输入的评论内容
            // isNowCommemt: false, // 是否是在评论
            userComment: {}, // 用户评论内容
            // isSend: false, //是否点击了发
        }
    },
    methods: {
        // 关注按钮
        userFollow(isFollow, id) {
            changeIsFollow(!isFollow, id).then()
            this.getThisSelectedDynamic()

        },
        // 收藏按钮
        userCollection(isCollection, id, collectionNum) {
            changeIsCollection(!isCollection, id, !isCollection ? collectionNum + 1 : collectionNum - 1).then()
            this.getThisSelectedDynamic()
        },
        // 点赞按钮
        userSupport(isSupport, id, supportNum) {
            changeIsSupport(!isSupport, id, !isSupport ? supportNum + 1 : supportNum - 1).then()
            this.getThisSelectedDynamic()
        },
        // 获取动态信息
        getThisSelectedDynamic() {
            getSelectedDynamic(this.dynamicID).then((res) => {
                this.dynamicData = res.data
            })
        },
        // 评论点赞按钮
        commentSupport(id, isSupport) {
            for (let i = 0; i < this.commentContents.length; i++) {
                if (this.commentContents[i].id == id) {
                    this.commentContents[i].supportNum = !isSupport ? this.commentContents[i].supportNum + 1 : this.commentContents[i].supportNum - 1
                    this.commentContents[i].isSupport = !isSupport
                }
            }
            changeSelectedDynamic(this.commentContents, this.dynamicID).then()
        },
        //获取当前日期函数
        getNowFormatDate() {
            let date = new Date()
            let seperator1 = '-' //格式分隔符
            let year = date.getFullYear() //获取完整的年份(4位)
            let month = date.getMonth() + 1 //获取当前月份(0-11,0代表1月)
            let strDate = date.getDate() // 获取当前日(1-31)
            if (month >= 1 && month <= 9) month = '0' + month // 如果月份是个位数，在前面补0
            if (strDate >= 0 && strDate <= 9) strDate = '0' + strDate // 如果日是个位数，在前面补0

            let currentdate = year + seperator1 + month + seperator1 + strDate
            return currentdate
        },
        // 添加评论(input框失焦时触发,需要在冒泡阶段触发)
        addUserComment() {
            this.userComment = {
                id: this.commentContents.length + 1,
                faceUrl: "https://himg.bdimg.com/sys/portraitn/item/public.1.50a3ce26.tHTRnELBkPK4SAxyOH_cVQ",
                name: "砯泠(我)",
                time: this.getNowFormatDate(),
                content: this.inputCommentContent,
                isSupport: false,
                supportNum: 0,
                province: "山东"
            }
            this.inputCommentContent = ''
            console.log(this.userComment)
            this.commentContents.push(this.userComment)
            changeSelectedDynamic(this.commentContents, this.dynamicID).then()
            changeCommentNum(this.commentContents.length, this.dynamicID)
        }

    }
})
</script>

<style lang="scss" scoped>
.findDynamicCommentContainer {
    header.findDynamicCommentHeader {
        position: fixed;
        top: 0;
        padding: 0 0.24rem;
        width: 100%;
        height: 0.46rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;

        .fheader_left {
            display: flex;
            align-items: center;

            .iconfont {
                font-size: 0.3rem;
                margin-left: -0.08rem;
                color: #000;
            }

            p {
                font-size: 0.16rem;
                margin-left: 0.23rem;
                color: #363a45;
            }
        }

        .fheader_right {
            display: flex;
            align-items: center;

            .el-dropdown {
                span.iconfont {
                    font-size: 0.15rem;
                    color: #000;
                }
            }
        }
    }

    main.findDynamicCommentMain {
        padding-top: 0.46rem;
        padding-bottom: 0.49rem;

        .main_top {
            .dynamicBox {
                margin: 0 0 0.06rem;
                border-radius: 0.12rem;
                background: #fff;
                padding: 0 0.2rem;

                header {
                    height: 0.7rem;
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
                            border: 1px solid #01bc77;
                        }

                        p.r_follow1 {
                            background-color: #01bc77;
                            color: #fff;
                        }

                        p.r_follow2 {
                            color: #01bc77;
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
            }
        }

        .main_bottom {
            h3 {
                height: 0.46rem;
                background-color: #f6f7fb;
                padding-left: 0.22rem;
                font-size: 0.13rem;
                color: #3a4151;
                line-height: 0.46rem;
            }

            .dynamicComments {
                margin: 0.17rem 0.15rem;
                border-bottom: 2px solid #f7f7f7;
                display: flex;
                flex-direction: column;

                .dc_top {
                    height: 0.32rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .dc_tleft {
                        display: flex;

                        .dc_tlImg {
                            height: 0.29rem;
                            width: 0.29rem;
                            border-radius: 50%;
                            margin-right: 0.14rem;
                        }

                        .dc_tlUserInfo {
                            h5 {
                                font-size: 0.12rem;
                                font-weight: 500;
                                line-height: 0.18rem;
                                color: #403e49;
                            }

                            p {
                                font-size: 0.09rem;
                                line-height: 0.13rem;
                                color: #a9a6b1;
                            }
                        }
                    }

                    .dc_tright {
                        width: 0.8rem;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;

                        .iconfont {
                            display: flex;
                            align-items: center;
                            font-size: 0.15rem;
                            color: #abacbe;

                            figcaption {
                                font-size: 0.13rem;
                                margin-right: 0.02rem;
                            }
                        }

                        .iconfont.active {
                            color: #01bc77;
                        }

                    }


                }

                .dc_main {
                    padding: 0.11rem 0.09rem 0.13rem 0.43rem;
                    font-size: 0.13rem;
                    line-height: 0.22rem;
                    color: #3d3d47;
                }
            }
        }

        .main_final {
            height: 0.34rem;
            line-height: 0.27rem;
            text-align: center;
            font-size: 0.12rem;
            color: #a9abb7;
        }
    }

    footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 0.49rem;
        border-top: 2px solid #f7f7f7;
        background-color: #fff;
        padding: 0 0.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .footer_left {
            flex: 3;
            // float: left;
            // width: 65%;
        }

        .footer_right {
            flex: 2;
            height: 0.51rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-right: 0.1rem;
            margin-left: 0.2rem;
            // float: left;
            // width: 30%;
            figure.iconfont {
                display: flex;
                align-items: center;
                font-size: 0.18rem;
                color: #aaaab4;
                margin: 0;

                span {
                    font-size: 0.14rem;
                    color: #03ca77;
                }

                span:active {
                    background: #03ca7729;
                }

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
                font-size: 0.17rem;
            }

            figure.iconfont:nth-child(3) {
                font-size: 0.20rem;
            }
        }
    }
}
</style>