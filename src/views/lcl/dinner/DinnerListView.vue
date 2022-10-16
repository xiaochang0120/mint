<template>
  <div>
    <ul class="lists">
      <li class="justify" v-for="item in getFat" :key="item.id">
        <div>
          <img
            :src="item.imgUrl"
            alt=""
            class="imgStyle"
            style="display: block"
          />
          <p class="oneP">{{ item.kind }}</p>
          <p class="twoP">
            <span>{{ item.fat }}</span>
            <span>千卡/份</span>
          </p>
          <div class="bottom">
            <p>
              <img src="../image/foodTwo.jpg" alt="" class="smallImg" />
              <span>{{ item.author }}</span>
            </p>
            <p>
              <el-space>
                <el-icon color="#a9acbd" :size="16"><View /></el-icon>
                <span>{{ item.personSee }}万</span>
              </el-space>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios'
import { View } from '@element-plus/icons-vue'
import { mapState } from 'vuex'
export default defineComponent({
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    View
  },
  created() {
    axios({
      url: 'http://localhost:5050/foodLcl'
    }).then((res) => {
      this.AllData = res.data.filter((value) => {
        return value.type === 'dinner'
      })
    })
  },
  data() {
    return {
      AllData: [],
      stateFlag: ''
    }
  },
  computed: {
    ...mapState(['flag']),
    getFat() {
      return this.AllData.filter((value) => {
        switch (this.stateFlag) {
          case '全部':
            return true
          case '少于300千卡':
            return value.fat < 300
          case '300~400千卡':
            return value.fat < 400 && value.fat > 300
          case '400~500千卡':
            return value.fat < 500 && value.fat > 400
          case '大于500千卡':
            return value.fat > 500
        }
      })
    }
  },
  watch: {
    flag: {
      handler: function (val) {
        this.stateFlag = val
      },
      immediate: true
    }
  }
})
</script>

<style lang="scss" scoped>
.lists {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
li {
  list-style: none;
}
.justify {
  display: flex;
  justify-content: space-between;
  border-radius: 0.05rem;
  overflow: hidden;
  margin-bottom: 0.15rem;
  box-shadow: 1px 2px 5px #ccc;

  .oneP {
    font-size: 0.11rem;
    width: 70%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0.07rem 0 0 0.06rem;
    line-height: 0.11rem;
  }
  .twoP {
    font-size: 0.05rem;
    line-height: 0.05rem;
    margin: 0.07rem 0 0 0.06rem;
    span:nth-child(1) {
      color: #f96e67;
    }
    span:nth-child(2) {
      color: #a7adbb;
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    margin: 0.13rem 0 0.12rem 0.1rem;
    p:nth-child(1) {
      width: 40%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #abaebf;
    }
    p:nth-child(2) {
      color: #bec1c6;
    }
    .smallImg {
      width: 0.1rem;
      height: 0.1rem;
      border-radius: 50%;
    }
  }
}
.imgStyle {
  height: 1.64rem;
  width: 1.54rem;
}
</style>
