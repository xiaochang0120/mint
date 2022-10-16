<template>
  <div class="xuee">
      <el-header>
        <div class="header">
          <aside>
            <img src="./../../images/xue/toux.jpg" alt="" />
            <i class="iconfont">&#xf034e;</i>
          </aside>
          <div class="input">
            <input placeholder="搜索食物营养和热量" />

            <el-icon>
              <Search />
            </el-icon>
            <i class="iconfont">&#xe67e;</i>
          </div>
          <el-icon class="massage">
            <Message />
          </el-icon>
        </div>
      </el-header>
      <el-main>
        <Target />
        <Eat />
        <AllThings />
        <div class="gg">
          <router-link to="/advertising"><img src="./../..//images/xue/gg.jpg" alt="" /></router-link>
        </div>
        <HealthManager />
        <Looking />
      </el-main>
      <el-footer>
        <figure @click="$router.push({name:'home'})">
          <el-icon :size="20">
            <House />
          </el-icon>
          <span>首页</span>
        </figure>
        <figure @click="$router.push({name:'find'})">
          <i class="iconfont" :size="20">&#xe77d;</i>
          <span>发现</span>
        </figure>
        <figure>
          <el-icon :size="20">
            <Edit />
          </el-icon>
          <span>记录</span>
        </figure>
        <figure>
          <i class="iconfont bao">&#xe669;</i>
          <span>商店</span>
        </figure>
        <figure>
          <el-icon :size="20">
            <Avatar />
          </el-icon>
          <span>我的</span>
        </figure>
      </el-footer>
      <div class="jia"><i class="iconfont">&#xf0175;</i></div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Target from '@/components/Target.vue'
import Looking from '@/components/Looking.vue'
import Eat from '@/components/Eat.vue'
import AllThings from '@/components/AllThings.vue'
import HealthManager from '@/components/HealthManager.vue'
import { House, Edit, Avatar, Search, Message } from '@element-plus/icons-vue'
export default defineComponent({
  components: {
    House,
    Search,
    Edit,
    // eslint-disable-next-line vue/no-reserved-component-names
    Message,
    Avatar,
    Target,
    Eat,
    AllThings,
    HealthManager,
    Looking
  },
  data() {
    return {
      input1: ''
    }
  }
})
</script>

<style lang="scss" scoped>
.xuee {
  height: 100%;
  background-color: #f6f7fb;
  display: flex;
  flex-direction: column;
}

input::-webkit-input-placeholder {
  /*WebKit browsers*/

  color: #9396a5;
  font-size: 0.12rem;
  letter-spacing: 0.03rem;
}

input::-moz-input-placeholder {
  /*Mozilla Firefox*/

  color: #9396a5;
  font-size: 0.12rem;
  letter-spacing: 0.03rem;
}

input::-ms-input-placeholder {
  /*Internet Explorer*/

  color: #9396a5;
  font-size: 0.12rem;
  letter-spacing: 0.03rem;
}

.el-header {
  background-color: #fff;
  height: 0.78rem;
  width: 100%;
  padding: 0;
  padding-left: 0.15rem;

  .header {
    display: flex;
    margin-top: 0.37rem;
    height: 0.37rem;
    line-height: 0.37rem;

    aside {
      img {
        width: 0.35rem;
        height: 0.35rem;
        margin-right: 0.04rem;
      }

      width: 0.49rem;
      height: 0.37rem;
      display: flex;
      align-items: center;

      .iconfont {
        font-size: 0.05rem;
        margin-right: 0;
      }
    }

    .input {
      position: relative;

      input {
        margin-left: 0.04rem;
        font-size: 0.12rem;
        width: 2rem;
        padding-left: 0.31rem;
        background-color: #edf1f2;
        border: none;
        box-shadow: none;
        border-radius: 1.13rem;
        // background: none;
        height: 0.36rem;
      }

      .el-icon {
        position: absolute;
        left: 0.12rem;
        top: 0.08rem;
        font-size: 0.2rem;
        font-weight: bolder;
        color: #07c084;
      }

      .iconfont {
        position: absolute;
        right: 0.14rem;
        top: 0.01rem;
        font-size: 0.2rem;
        color: #6e6f84;
      }
    }

    .massage {
      color: #6c7282;
      font-weight: bolder;
      font-size: 0.23rem;
      margin-top: 0.08rem;
      margin-left: 0.16rem;
    }
  }
}

.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}

.el-main {
  flex: 1;
  padding: 0 0.2rem;
  overflow: auto;

  .gg {
    width: 3.2rem;
    height: 0.77rem;
    margin-top: 0.1rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

.el-footer {
  border-top: 1px solid #f8f8f8;
  height: 0.61rem;
  background-color: #fff;
  display: flex;
  padding: 0;
  justify-content: space-around;
  align-items: center;
}

figure {
  margin: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #dee2e3;

  span {
    margin-top: 0.07rem;
    font-size: 0.04rem;
  }
}

figure:nth-of-type(3) {
  color: #62cd99;
}

.bao {
  font-size: 20px;
  font-weight: bold;
}

.jia {

  width: 0.64rem;
  height: 0.64rem;
  border-radius: 0.32rem;
  background-color: #02bd79;
  text-align: center;
  line-height: 0.64rem;
  font-size: 0.2rem;
  color: #fff;
  position: fixed;
  bottom: 0.806rem;
  right: 0.2rem;
  box-shadow: 0 0.03rem 0.08rem 0.02rem #9bd8bb;

  .iconfont {
    font-size: 0.2rem;
  }
}
</style>
