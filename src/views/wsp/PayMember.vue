<template>
  <article class="box">
    <el-card
      class="box-card"
      v-for="o in paydata"
      :key="o"
      @click="choice($event, [o.header, o.new])"
    >
      <template #header>
        <div class="card-header">
          <span>{{ o.header }}会员</span>
        </div>
      </template>
      <div class="allmoney">
        <span class="old">{{ o.old }}</span>
        <div class="money">
          <i class="iconfont">&#xeb72;</i>
          <p>{{ o.new }}</p>
        </div>
      </div>
    </el-card>
  </article>
</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios'
// import { mapMutations, mapState } from 'vuex'

export default defineComponent({
  // computed: {
  //   ...mapState(['count'])
  // },
  updated() {
    let member = document.querySelectorAll('.el-card')
    member[0].classList.add('active')
  },
  created() {
    axios({
      url: 'http://localhost:3000/pm'
    }).then((res) => {
      console.log(res.data)
      this.paydata = res.data
    })
  },
  data() {
    return {
      paydata: []
    }
  },
  methods: {
    // ...mapMutations(['increment']),
    choice(e, massage) {
      console.log(massage)
      console.log(this)
      this.$emit('getmassage', massage[1], massage[0])
      let member = document.querySelectorAll('.el-card')
      for (let i = 0; i < member.length; i++) {
        member[i].classList.remove('active')
      }
      if (e.currentTarget.className == 'el-card is-always-shadow box-card') {
        e.currentTarget.classList.add('active')
      }
      // console.log('**', this.type)
      //   else if (e.target.tagName == 'aside') {
      //     console.log(e.target.tagName)
      //   }
    }
    // getmsg() {

    // }
  }
})
</script>

<style lang="scss" scoped>
.box {
  box-sizing: border-box;
  height: 1.55rem;
  width: 100%;
  background-color: #fff7d8;
  padding: 0.31rem 0.24rem 0.21rem 0.19rem;
  display: flex;
  .el-card {
    margin-top: 0.03rem;
    width: 0.98rem;
    height: 0.97rem;
    box-sizing: border-box;
    box-shadow: none;
    border: none;
    border-radius: 0.2rem;
    margin-right: 0.12rem;
    :deep(.el-card__body) {
      padding: 0;
    }
    :deep(.el-card__header) {
      padding: 0;
      height: 0.276rem;
      text-align: center;
      line-height: 0.27rem;
      font-size: 0.12rem;
      font-weight: bold;
      color: #dda359;
      background: linear-gradient(to right, #ffedcd, #fff);
    }
    .allmoney {
      text-align: center;
      .old {
        color: #697687;
        font-size: 0.08rem;
        text-decoration-line: line-through;
        margin-top: 0.08rem;
      }
      .money {
        font-size: 0.16rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 0.24rem;
        .iconfont {
          color: #efcb75;
        }
        p {
          margin: 0;
          font-size: 0.12rem;
          color: #c35e64;
        }
      }
    }
  }
  .el-card:nth-of-type(3) {
    margin-right: 0;
  }
  .el-card:nth-of-type(1) {
    .money {
      margin-top: 0.09rem;
    }
  }
  .active {
    width: 1rem;
    height: 1rem;
    margin-right: 0.08;
    margin-top: 0;
    border: 0.03rem #ff9f1a solid;
    :deep(.el-card__header) {
      color: #374464;
    }
  }
}
</style>
