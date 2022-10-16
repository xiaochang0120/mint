<template>
  <el-container>
    <el-header>
      <el-icon @click="$router.go(-1)">
        <Back />
      </el-icon><span>薄荷健康会员</span>
    </el-header>
    <el-main>
      <div><img src="./../../../images/xue/ggxq.jpg" alt="" /></div>
      <PayMember @getmassage="getmassage" />
    </el-main>
    <el-footer>
      <div class="agree">
        <el-checkbox size="large" v-model="checked" />
        <span>我已阅读同意</span><span>会员服务协议</span>
      </div>
      <div class="open">
        <p>查看更多 ></p>
        <span class="money">{{ money }}</span>
        <span class="nk">/{{ type }}</span>
      </div>
      <button @click="open">立即开通</button>
    </el-footer>
  </el-container>
</template>

<script>
import { defineComponent } from 'vue'
import { Back } from '@element-plus/icons-vue'
import PayMember from '@/components/PayMember.vue'
import { ElMessage } from 'element-plus'
// import { mapState } from 'vuex'
export default defineComponent({
  components: {
    Back,
    PayMember
  },
  // computed: {
  //   ...mapState(['count']),
  //   number: function () {
  //     return this.count
  //   }
  // },
  data() {
    return {
      money: '￥128.0',
      type: '年卡',
      checked: false
    }
  },
  methods: {
    getmassage(money, type) {
      this.money = money
      this.type = type
    },
    open() {
      // let radio = document.querySelector('.el-checkbox')

      if (this.checked == false) {
        ElMessage('请先阅读并同意会员服务协议')
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
  display: flex;
  flex-direction: column;

  .el-header {
    font-size: 0.12rem;
    padding: 0;
    padding-top: 0.2rem;
    height: 0.53rem;

    .el-icon {
      margin-left: 0.2rem;
      font-size: 0.14rem;
      margin-right: 0.38rem;
    }

    span {
      letter-spacing: 0.04rem;
      display: inline-block;
      height: 0.12rem;
      line-height: 0.12rem;
    }
  }

  .el-main {
    padding: 0;
    flex: 1;
    overflow: auto;

    img {
      width: 3.6rem;
    }
  }

  .el-footer {
    position: relative;
    padding: 0;
    height: 1.33rem;

    .agree {
      display: flex;
      align-items: center;
      margin-top: 0.126rem;
      margin-left: 0.193rem;

      .el-checkbox {
        margin-right: 0.09rem;
      }

      :deep(.el-checkbox__inner) {
        border-radius: 50%;
        border: 0.01rem solid #aba9b4;
        width: 0.12rem;
        height: 0.12rem;
        vertical-align: middle;

        // border: none;
        // border: #aba9b4 0.01rem solid;
        // background-color: #fff;
        //   appearance: none;
        //   -webkit-appearance: none;
        //   border-radius: 50%;
        //  outline:none;
        // }
      }

      :deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
        border: 0.01rem solid rgb(97, 246, 52);

        background-color: rgb(97, 246, 52);
      }

      // input[type='radio']:checked {

      //   background: #3582e9;
      // }

      span {
        letter-spacing: 0.03rem;
        display: inline-block;
        padding-top: 0.01rem;
        color: #aba9b4;
        font-size: 0.1rem;
      }

      span:nth-of-type(2) {
        color: #0ebfad;
        text-decoration: underline;
      }
    }

    .open {
      margin-left: 0.193rem;

      p {
        color: #aba9b4;
        letter-spacing: 0.03rem;
        font-size: 0.11rem;
        margin: 0;
        margin-top: 0.1rem;
      }

      span {
        display: inline-block;
        margin-top: 0.1rem;
      }

      span:nth-of-type(1) {
        font-size: 0.12rem;
        color: #fc6a6d;
        margin-right: 0.05rem;
      }

      span:nth-of-type(2) {
        font-size: 0.13rem;
        color: #444156;
        letter-spacing: 0.03rem;
      }
    }

    button {
      position: absolute;
      top: 0.57rem;
      right: 0.12rem;
      width: 2.043rem;
      height: 0.433rem;
      background-color: #ffdb83;
      border: none;
      color: #6b4600;
      font-size: 0.11rem;
      border-radius: 0.2rem;
      letter-spacing: 0.025rem;
      outline: none;
    }
  }
}
</style>
