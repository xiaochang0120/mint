<template>
  <div class="box">
    <el-header>
      <el-icon @click="$router.go(-1)">
        <Back />
      </el-icon><span>体重报告</span>
    </el-header>
    <el-main>
      <el-card>
        <div class="bt">
          <h3>我的体重</h3>
          <span>重设目标</span>
        </div>
        <ul class="content">
          <li>
            <p>最新体重</p>
            <div class="slider-demo-block">
              <span class="number">44.5kg</span>
              <el-slider v-model="value1" range :marks="marks1" disabled />
              <div class="ms"><span>合适</span></div>
            </div>
          </li>
          <li>
            <p>最新BMI</p>
            <div class="slider-demo-block">
              <span class="number">17.4</span>
              <el-slider v-model="value2" range :marks="marks2" disabled />
              <div class="ms"><span>偏瘦</span><span>正常</span><span>超重</span><span>肥胖</span></div>
            </div>
          </li>
        </ul>
      </el-card>
      <el-card>
        <div class="bt">
          <h3>预算热量</h3>
        </div>
        <div class="content">
          <Hot />
        </div>
        <div class="footer"><span>去计算热量&emsp;></span></div>
      </el-card>
      <div class="imga"><img src="./../../../images/xue/zss.jpg" alt=""></div>
    </el-main>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'
import { Back } from '@element-plus/icons-vue'
import Hot from '@/components/Hot.vue'
export default defineComponent({
  setup() {
    const value1 = ref([22.5, 22.5])
    const value2 = ref([19, 19])

    const marks1 =
      reactive(
        {
          28: '',
          45: '',

          // 50: {
          //   style: {
          //     color: '#1989FA'
          //   },
          //   label: '50%'
          // }
        })
    const marks2 =
      reactive(
        {
          25: '',
          55: '',
          78: '',

        })

    return {
      value1,
      value2,
      marks1,
      marks2
    }
  },
  components: {
    Back,
    Hot
  }
})
</script>

<style lang="scss" scoped>
.box {
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
    flex: 1;
    padding: 0 0.2rem;
    overflow: auto;
    background-color: #f6f7fb;

    .el-card {
      margin-top: 0.186rem;
      border: none;
      border-radius: 0.2rem;
      box-shadow: none;

      .bt {
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
          font-size: 0.11rem;
          color: #22ac7b;
        }
      }

      h3 {
        margin: 0;
        font-size: 0.15rem;
      }

      :deep(.el-card__body) {
        padding: 0.26rem 0.28rem 0 0.15rem;
      }
    }

    .el-card:nth-of-type(1) {
      ul {
        margin: 0;
        padding: 0;
        width: 100%;

        li:nth-of-type(1) {
          margin-bottom: 0.5rem;
          margin-top: 0.35rem;

          .slider-demo-block {
            .ms {
              span {
                margin-left: 0.775rem;
              }
            }
          }
        }

        li:nth-of-type(2) {
          margin-bottom: 0.29rem;

          .slider-demo-block {
            .ms {
              span:nth-of-type(1) {
                margin-left: 0.28rem;
              }

              span:nth-of-type(2) {
                margin-left: 0.42rem;
              }

              span:nth-of-type(3) {
                margin-left: 0.35rem;
              }

              span:nth-of-type(4) {
                margin-left: 0.27rem;
              }
            }
          }
        }

        li {
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-between;

          p {
            margin: 0;
            font-size: 0.11rem;
            margin-right: 0.1rem;
          }

          .slider-demo-block {
            display: flex;
            align-items: center;
            width: 2.2rem;
            margin-right: 0.02rem;
            position: relative;

            .number {
              font-size: 0.12rem;
              color: #7ec0e3;
              position: absolute;
              top: -0.19rem;
              left: 0.38rem
            }

            .ms {
              width: 100%;
              position: absolute;
              bottom: -0.15rem;
              display: flex;

              span {
                font-size: 0.08rem;
                color: #bebebe;
              }
            }
          }

          .slider-demo-block .el-slider {
            margin-top: 0;
            margin-left: 12px;
            height: 0.07rem;

            :deep(.el-slider__button) {
              width: 0.13rem;
              height: 0.13rem;
              background-color: #7cc4fe;
              border: none;
            }

            :deep(.el-slider__stop) {
              width: 0.025rem;
              background-color: #acacb8;
            }
          }
        }
      }
    }
  }

  .footer {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 0.12rem;
    color: #02c1af;
    margin: 0.17rem 0;
  }

  .imga {
    margin-top: 0.2rem;
    width: 3.2rem;
    height: 1.9rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
