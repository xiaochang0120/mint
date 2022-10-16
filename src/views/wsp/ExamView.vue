<template>
  <!-- 头部 -->
  <header class="header">
    <span @click="$router.push('/')">&lt;</span>
    <span>每日一题</span>
    <span></span>
  </header>

  <!-- content -->
  <main class="content">
    <div class="content-title">CRD减肥法，一周至少吃几次鱼?</div>
    <div class="content-option">
      <div class="content1" @click="exam">
        <div>6次</div>
        <div>
          {{ contentData1 }}人<input
            v-show="contentShow"
            type="radio"
            name=""
            id=""
          /><van-icon v-show="!contentShow" name="clear" />
        </div>
      </div>
      <div class="content2" @click="exam">
        <div>5次</div>
        <div>
          {{ contentData2 }}人<input
            v-show="contentShow"
            type="radio"
            name=""
            id=""
          /><van-icon v-show="!contentShow" name="clear" />
        </div>
      </div>
      <div class="content3" @click="exam">
        <div>4次</div>
        <div>
          {{ contentData3 }}人<input
            v-show="contentShow"
            type="radio"
            name=""
            id=""
          /><van-icon v-show="!contentShow" name="checked" />
        </div>
      </div>
    </div>
  </main>

  <!-- 解析 -->
  <div class="analysis" v-show="!contentShow">
    <div class="analysis-text">
      <p style="text-align: center; color: red" v-show="show1">回答错误</p>
      <p style="text-align: center; color: green" v-show="show2">回答正确</p>
    </div>
    <div class="analysis-content">
      <h4>答案解析</h4>
      <p>
        正确答案:2次。鱼肉作为白肉的一种，低脂低卡高蛋白，还含脂肪燃烧必需的锌、铁、磷、钾、镁等矿物质，建议每周至少吃2次或300-500g。推荐优选体型较小(1斤以下)的鱼类，彻底做熟不生食哦!
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      contentData1: 1556,
      contentData2: 5152,
      contentData3: 6852,
      contentShow: true,
      show1: true,
      show2: false
    }
  },
  methods: {
    exam(e) {
      e.target
      this.contentShow = false
      let examDiv1 = document.querySelector('.content-option .content1')
      let examDiv2 = document.querySelector('.content-option .content2')
      let analysis = document.querySelector('.analysis')

      examDiv1.style.background = '#f7d4d0'
      examDiv1.style.color = 'red'
      examDiv2.style.background = '#f7d4d0'
      examDiv2.style.color = 'red'
      analysis.style.visibility = 'visibile'

      if (e.target.className == 'content3') {
        this.show1 = !this.show1
        this.show2 = !this.show2
        this.contentData3++
      }
      if (e.target.className == 'content2') {
        this.contentData2++
      }
      if (e.target.className == 'content1') {
        this.contentData1++
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  height: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.2rem;
  span {
    font-size: 0.18rem;
    font-weight: 900;
    opacity: 0.8;
  }
}
.content-title {
  padding: 0.3rem 0.2rem;
  font-size: 0.18rem;
  font-weight: 900;
  opacity: 0.8;
}
.content-option {
  display: flex;
  flex-direction: column;
  padding: 0 0.2rem;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.17rem 0.15rem;
    border-radius: 0.1rem;
    margin: 0.05rem;
    background-color: #eee;
    color: #64b6a8;
    input {
      margin-left: 0.1rem;
    }
    .van-icon {
      margin-left: 0.1rem;
    }
  }
  p {
    text-align: center;
  }
}

// 解析
.analysis {
  padding: 0.2rem;
  .analysis-text {
    height: 0.6rem;
    width: 100%;
    position: relative;
    p {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      margin-top: 0.1rem;
    }
  }
  .analysis-content {
    padding: 0.1rem;
    background: #f6f7fb;
    border-radius: 0.1rem;
    h4 {
      font-size: 0.13rem;
    }
    p {
      text-align: justify;
      font-size: 0.11rem;
      line-height: 1.8;
    }
  }
}
</style>
