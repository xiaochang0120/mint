<template>
  <div class="login">
    <header>
      <p style="color: #afadbb">关闭</p>
      <p style="color: #1da97a">语音验证码</p>
    </header>
    <div class="textBox">
      <p>手机验证码登录</p>
      <h3 style="color: #afadbb">未注册的手机将自动创建薄荷账号</h3>
    </div>
    <div class="form">
      <el-form :rules="rules" :model="ruleForm">
        <el-form-item prop="adminname">
          <el-input
            v-model="ruleForm.adminname"
            placeholder="输入手机号"
            style="margin-bottom: 0.2rem"
          >
          </el-input>
        </el-form-item>
        <el-input v-model="captchaRegister" placeholder="输入验证码">
          <template #append>
            <el-button
              style="
                background-color: #eeeff3;
                color: black;
                border: none;
                width: auto;
                height: auto;
              "
              :disabled="canSend"
              @click="getRandom"
              >{{ content }}</el-button
            >
          </template>
        </el-input>
      </el-form>
      <div class="radioBox">
        <el-icon @click="onClick" :color="showCode ? 'green' : ''"
          ><SuccessFilled
        /></el-icon>
        <span style="color: #b2b1b6">我已阅读并同意</span>
        <router-link to="">《用户协议》、《隐私协议》</router-link>
      </div>
      <div class="btn">
        <button @click="login">登录</button>
      </div>
      <div class="abox">
        <router-link to="">一键登录</router-link>
        <span></span>
        <router-link to="">密码登录</router-link>
      </div>
    </div>
    <div class="linkBox">
      <div class="iconfont" style="color: #f96f6f">&#xf01af;</div>
      <div class="iconfont" style="color: #02c173">&#xe623;</div>
      <div class="iconfont" style="color: #449eff">&#xe65b;</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { SuccessFilled } from '@element-plus/icons-vue'

export default defineComponent({
  components: {
    SuccessFilled
  },
  data() {
    return {
      showCode: false, //标识符
      phoneRegister: '',
      passwordRegister: '',
      captchaRegister: '', //手机号验证码
      content: '获取验证码',
      sendTime: 60, //验证码60s发送一次
      canSend: false, //添加canSend,false为可用
      // rules: { phoneRegister: [{ required: true, trigger: 'blur' }] },
      ruleForm: {
        adminname: '',
        password: ''
      },
      rules: {
        adminname: [
          {
            required: true,
            trigger: `/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])/d{8}$/`
          }
        ],
        password: [{ required: true, trigger: 'blur' }]
      }
    }
  },
  methods: {
    getRandom() {
      let count = ''
      for (let i = 0; i < 6; i++) {
        let count1 = parseInt(Math.random() * 10)
        count1 = count1.toString()
        count += count1
      }

      // 存值
      localStorage.setItem('cook', count)
      console.log(count)
    },
    // 点击事件
    onClick() {
      // 赋值取反
      this.showCode = !this.showCode
      // console.log(this.showCode)
    },
    login() {
      if (this.captchaRegister == localStorage.getItem('cook')) {
        if (this.showCode === true) {
          localStorage.setItem('token', 1234567890)
          this.$router.push({ name: 'myhome' })
          // console.log(11)
        } else {
          alert('请勾选用户协议')
        }
      } else {
        alert('验证码格式不正确')
      }
    }
  }
})
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.login {
  header {
    display: flex;
    justify-content: space-between;
    padding: 0.4rem 0.2rem;
    font-size: 0.15rem;
  }
  .textBox {
    text-align: center;
    margin-bottom: 0.54rem;
    h2 {
      font-size: 0.2rem;
      line-height: 0.2rem;
      font-weight: 500;
    }
    h3 {
      margin-top: 0.14rem;
      font-size: 0.11rem;
      line-height: 0.11rem;
      font-weight: 500;
    }
  }
  .form {
    width: 2.63rem;
    margin: auto;
    .radioBox {
      margin-top: 0.73rem;
      height: 0.14rem;
      display: flex;
      justify-items: center;
      padding: 0 0.06rem;
      span {
        font-size: 0.1rem;
        line-height: 0.14rem;
      }
      a {
        color: #1da97a;
        font-size: 0.1rem;
        line-height: 0.14rem;
        text-decoration: none;
      }
    }
    .btn {
      button {
        font-size: 0.14rem;
        width: 100%;
        height: 0.43rem;
        margin-top: 0.25rem;
        color: #fff;
        background: #00c273;
        border: none;
        border-radius: 0.03rem 0.03rem 0.03rem 0.03rem;
      }
    }
    .abox {
      text-align: center;
      margin-top: 0.26rem;
      a {
        text-decoration: none;
        font-size: 0.1rem;
        color: #70727f;
      }
      span {
        display: inline-block;
        width: 0.01rem;
        height: 0.1rem;
        border-left: 0.01rem solid #e2e2e4;
        margin: 0 0.08rem;
      }
    }
  }
  .linkBox {
    width: 2.52rem;
    height: 0.5rem;
    position: fixed;
    left: 15%;
    bottom: 0.4rem;
    display: flex;
    justify-content: space-between;
    div {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background-color: #f5f6fa;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.23rem;
    }
  }
}
</style>
