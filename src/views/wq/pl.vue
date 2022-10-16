<template>
  <div class="eait">
    <router-link to="/view/wq/xm"
      ><van-icon class="ml" name="arrow-left"
    /></router-link>
    <span class="eaitspan">商品评论</span>
  </div>
  <div class="content" v-for="item in pl" :key="item.id">
    <div id="evaluate">
      <!-- 头像 -->
      <div class="photo">
        <div class="demo-type">
          <div>
            <el-space
              ><el-avatar :src="item.demotype" />
              <span class="photospan">{{ item.photospan }}</span></el-space
            >
          </div>
          <div class="pj">{{ item.pj }}</div>
        </div>
      </div>
      <!-- 评论 -->
      <div class="comment">
        <div class="commentspan">
          {{ item.commentspan }}
        </div>
        <div><img :src="item.commentphoto" alt="" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios'
export default defineComponent({
  created() {
    axios({
      url: 'http://localhost:5050/pl'
    }).then((res) => {
      this.pl = res.data
    })
  },
  data() {
    return {
      pl: []
    }
  }
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html {
  font-size: 27.78vw;
}
body {
  font-size: 12px;
}
html,
body {
  height: 100%;
}
.eait {
  height: 0.44rem;
  width: 100%;
  float: left;

  font-size: 0.16rem;
  font-family: '楷体';
  font-weight: 700;
  line-height: 0.44rem;
}
.ml {
  margin-left: 0.21rem;
}
.eaitspan {
  margin-left: 0.38rem;
}
#evaluate {
  float: left;

  width: 3.43rem;
  margin-left: 0.18rem;
}
#evaluate .evaluatetitle {
  height: 0.49rem;

  line-height: 0.8rem;
  font-size: 0.17rem;
  font-family: '楷体';
  font-weight: 700;
}
/* 头像 */
#evaluate .photo {
  height: 0.56rem;
}
#evaluate .photospan {
  font-size: 0.14rem;
  padding-left: 0.09rem;
}

.demo-type {
  display: flex;
  justify-content: space-between;
  padding: 0.11rem;
}
.pj {
  font-size: 0.14rem;
  color: #ffc410;
  line-height: 0.34rem;
}
/* 评论 */
#evaluate .comment {
  padding-right: 0.18rem;
}
#evaluate .commentspan {
  font-size: 0.14rem;
  word-wrap: normal;
  margin-bottom: 0.14rem;
}
.comment img {
  width: 1rem;
  height: 1rem;
}
</style>
