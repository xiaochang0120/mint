<template>
    <div class="findDynamicCreateContainer">
        <header>
            <div class="fheader_left">
                <span class="iconfont" @click="$router.go(-1)">&#xe76a;</span>
                <p>发动态</p>
            </div>
            <div class="fheader_right" @click="userDynamicSubmit">
                <p>发布</p>
            </div>
        </header>
        <main>
            <div class="mainHead">
                <div class="fmain_left">
                    <span class="iconfont">&#xe6da;</span>
                    <p>参与话题</p>
                </div>
                <div class="fmain_right">
                    <p>选择合适的话题会获取更多赞</p>
                    <span class="iconfont">&#xe610;</span>
                </div>
            </div>

            <el-input v-model="dynamicContent" maxlength="2000" placeholder="记录减重成果、分享减肥经验，激励更多小伙伴~" show-word-limit
                type="textarea" resize="none" />

            <div class="dynamicSelf">
                <el-checkbox v-model="isSelf" label="仅自己可见" size="large" />
            </div>

            <!-- 图片显示！！！！（未完成） -->
            <div>
                <el-upload v-model:file-list="tempImgList" list-type="picture-card">
                    <el-icon>
                        <Plus />
                    </el-icon>
                </el-upload>
            </div>
            <!-- ----------- -->
        </main>
        <footer>
            <span class="iconfont" @click="drawer2 = true">&#xe665;</span>
            <span class="iconfont">&#xe81e;</span>
            <span class="iconfont">&#xe64a;</span>
            <span class="iconfont">&#xe6cd;</span>
        </footer>

        <div class="getDynamicImg">
            <el-drawer v-model="drawer" title="I am the title" :direction="direction">
                <span>Hi, there!</span>
            </el-drawer>
            <el-drawer v-model="drawer2" :direction="direction">
                <template #default>
                    <el-badge :value="item.isOptioned? '√':''" class="item" type="success" v-for="item in optionalImgs"
                        @click="chooseImg(item.isOptioned,item.id)">
                        <el-avatar shape="square" :size="100" fit="fill" :src="item.imgUrl" />
                    </el-badge>
                </template>
                <template #footer>
                    <div style="flex: auto">
                        <el-button @click="cancelClick">cancel</el-button>
                    </div>
                </template>
            </el-drawer>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { getOptionalImgList, changeIsOptioned, resetIsOptioned } from '@/api/optionalImg'
import { getSelectedDynamicList, addUserDynamic } from '@/api/selected'

export default defineComponent({
    components: {
        Plus
    },
    created() {
        for (let i = 1; i <= 4; i++) {
            resetIsOptioned(i).then(() => {
                if (i == 4) {
                    getOptionalImgList().then((res) => {
                        this.optionalImgs = res.data
                    })
                }
            })
        }
    },
    data() {
        return {
            dynamicContent: '', //动态内容
            isSelf: false, // 是否仅自己可见
            imgCounter: '', // 图片选择中是否被选中
            optionalImgs: [], // 可选择图片列表
            tempImgList: [], // 存储临时图片地址，用于页面上的图片展示
            drawer: false, // 抽屉开关
            drawer2: false, // 抽屉开关
            direction: 'btt', // 抽屉展开方向
            userDynamic: {}, // 用户动态信息
            totalDynamicLength: 0, // 数据库中动态信息总数
            finalImgList: [], // 最终需要提交的图片链接数组（符合数据库内图片链接存储规则）
        }
    },
    methods: {
        getOptionalImg() {
            getOptionalImgList().then((res) => {
                this.optionalImgs = res.data
                this.tempImgList = []
                for (let i = 0; i < this.optionalImgs.length; i++) {
                    let item = this.optionalImgs[i]
                    if (item.isOptioned) {
                        this.tempImgList.push({ name: item.id, url: item.imgUrl })
                    }
                }
            })
        },
        chooseImg(isOptioned, id) {
            changeIsOptioned(!isOptioned, id).then(() => {
                this.getOptionalImg()
            })
        },
        cancelClick() {
            this.drawer2 = false
        },
        userDynamicSubmit() {
            this.finalImgList = []
            for (let i = 0; i < this.optionalImgs.length; i++) {
                let item = this.optionalImgs[i]
                if (item.isOptioned) {
                    this.finalImgList.push(item.imgUrl)
                }
                // console.log('finalImgList', this.finalImgList)
            }
            getSelectedDynamicList().then((res) => {
                this.totalDynamicLength = res.data.length
                // console.log("length---->", this.totalDynamicLength)
                // 之后的id需要+2
                this.userDynamic = {
                    id: this.totalDynamicLength + 2,
                    userFace: "https://himg.bdimg.com/sys/portraitn/item/public.1.50a3ce26.tHTRnELBkPK4SAxyOH_cVQ",
                    userName: "砯泠(我)",
                    isFollow: true,
                    text: [this.dynamicContent],
                    imgUrl: this.finalImgList,
                    isCollection: false,
                    collectionNum: 0,
                    commentNum: 0,
                    isSupport: false,
                    supportNum: 0,
                    haveSubtitle: false,
                    subtitle: ""
                }
                // console.log("userDynamic---->", this.userDynamic)
                addUserDynamic(this.userDynamic).then()
                this.$router.push('/find')
            })
        }
    }
})
</script>

<style lang="scss" scoped>
.findDynamicCreateContainer {
    header {
        padding: 0 0.24rem;
        height: 0.46rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

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

            p {
                font-size: 0.16rem;
                margin-right: 0.05rem;
                color: #11b67e;
            }
        }
    }

    main {
        padding: 0 0.24rem;
        padding-bottom: 0.5rem;

        :deep(.el-upload-list--picture-card .el-upload-list__item-actions:hover) {
            display: none;
        }

        .mainHead {
            height: 0.67rem;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .fmain_left {
                display: flex;
                align-items: center;

                .iconfont {
                    font-size: 0.15rem;
                    color: #adaabb;
                    font-weight: 600;
                    margin: 0 0.04rem 0 -0.03rem;
                }

                p {
                    font-size: 0.13rem;
                    color: #3b3849;
                }
            }

            .fmain_right {
                display: flex;
                align-items: center;

                p {
                    font-size: 0.1rem;
                    color: #a6a9ae;
                }

                .iconfont {
                    font-size: 0.1rem;
                    font-weight: 600;
                    color: #dfdfdf;
                }

            }
        }

        .el-textarea {
            height: 2rem;
            width: 3.1rem;

            :deep(.el-textarea__inner) {
                height: 2rem;
                width: 3.1rem;
                background-color: #f6f7fb;
                border-radius: 0.08rem;
                padding: 0.18rem 0.16rem;
                font-size: 0.13rem;
                color: #3a3949;
                line-height: 0.2rem;
            }

            :deep(.el-input__count) {
                font-size: 0.09rem;
                color: #adadad;
                background-color: #f6f7fb;
                margin-bottom: 0.05rem;
            }
        }

        .dynamicSelf {
            margin-top: 0.08rem;

            .el-checkbox:active {
                background-color: rgba(159, 255, 173, .4);
            }

            :deep(.el-checkbox.el-checkbox--large .el-checkbox__label) {
                color: #afadbb;
            }

            :deep(.el-checkbox__input.is-checked+.el-checkbox__label) {
                color: #00c2b7;
            }

            :deep(.el-checkbox__input .el-checkbox__inner) {
                border-color: #aaaaaa;
                border-radius: 50%;
            }

            :deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
                background-color: #02c2b5;
                border-color: #02c2b5;
            }
        }
    }

    footer {
        position: fixed;
        bottom: 0;
        height: 0.5rem;
        width: 100%;
        border-top: 2px solid #f7f7f7;
        padding: 0 0.34rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;

        .iconfont {
            font-size: 0.2rem;
            font-weight: 600;
            color: #acacb6;
        }

    }

    .getDynamicImg {
        :deep(.el-drawer__header) {
            margin-bottom: 0;
            padding-top: 0.02rem;
        }

        :deep(.el-drawer__body) {
            padding-top: 0.04rem;
            padding-bottom: 0.04rem;
        }

        .el-badge {
            margin: 0.05rem 0.1rem;
        }
    }
}
</style>