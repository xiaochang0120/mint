<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="top" style="position: relative">
          <p>
            <el-space>
              <el-icon :size="15" @click="$router.push('/find')"><Back /></el-icon
              ><span class="letter">饮食广场</span>
            </el-space>
          </p>
          <p @click="openDrawer" class="positionI">
            <el-space>
              <span>{{ kindName }}</span>
              <el-icon>
                <component :is="flag ? 'ArrowDown' : 'ArrowUp'"></component>
              </el-icon>
            </el-space>
          </p>
          <!-- 抽屉 -->
          <el-drawer
            v-model="drawer"
            title="I am the title"
            :with-header="false"
            direction="ttb"
            @close="close"
          >
            <template #header>全部</template>
            <p
              v-for="(item, index) in drawerList"
              :key="item"
              @click="kindChange(item, index)"
              :style="{ color: index == kindSub ? 'green' : '' }"
            >
              {{ item }}
            </p>
          </el-drawer>
        </div>
        <div class="bottom">
          <p
            v-for="(item, index) in titleList"
            :key="item"
            @click="changeData(index, item.urlName)"
            :style="{ color: index == sub ? '#383d50' : '#a9acbd' }"
          >
            {{ item.title }}
          </p>
        </div>
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { Back, ArrowDown, ArrowUp } from '@element-plus/icons-vue'
import { mapMutations } from 'vuex'
export default defineComponent({
  components: {
    Back,
    ArrowDown,
    ArrowUp
  },
  data() {
    return {
      flag: true, //用来控制全部图标切换
      sub: '', //用来控制导航栏字体颜色
      titleList: [
        {
          title: '推荐',
          urlName: 'recommendlistlcl'
        },
        {
          title: '早餐',
          urlName: 'breakfastlistlcl'
        },
        {
          title: '午餐',
          urlName: 'lunchlistlcl'
        },
        {
          title: '晚餐',
          urlName: 'dinnerlistlcl'
        },
        {
          title: '加餐',
          urlName: ''
        },
        {
          title: '最新',
          urlName: ''
        }
      ], //导航栏内容
      drawerList: [
        '全部',
        '少于300千卡',
        '300~400千卡',
        '400~500千卡',
        '大于500千卡'
      ],
      kindName: '全部',
      drawer: false,
      kindSub: 0
    }
  },
  methods: {
    ...mapMutations(['setFlag']),
    changeData(index, urlName) {
      this.sub = index
      // console.log(urlName)
      //选项导航
      this.$router.push({
        name: urlName
      })
    },
    openDrawer() {
      this.flag = !this.flag
      this.drawer = !this.drawer
    },
    close() {
      if (!this.flag) {
        this.flag = !this.flag
      }
    },
    kindChange(item, index) {
      this.kindName = item
      this.drawer = !this.drawer
      this.kindSub = index
      this.setFlag(item)
    }
  }
})
</script>

<style lang="scss" scoped>
:deep([data-v-b4e148ca] .el-main[data-v-b4e148ca]) {
  margin-top: 0.65rem;
}
.el-header[data-v-a9deb8c3]{
  background-color: white;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99;
}
:deep(.el-main[data-v-b4e148ca]) {
  height: 100%;
}
:deep(.el-overlay) {
  margin-top: 40px;
}
:deep(.el-header) {
  padding: 0.1rem 0.1rem 0 0.1rem;
}
:deep(.el-drawer__body) {
  text-align: center;
  display: flex;
  flex-direction: column;
  p {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 0.001rem solid #eeeeee;
  }
}
.el-header {
  height: 0.7rem;
  border-bottom: 1px solid #ccc;
  font-size: 12px;
  .top {
    display: flex;
    font-size: 0.12rem;
    justify-content: space-between;
    height: 0.3rem;
    .letter {
      margin-left: 0.15rem;
    }
  }
  .bottom {
    display: flex;
    font-size: 0.1rem;
    p {
      flex: 1;
      text-align: center;
      margin-top: 0.06rem;
    }
  }
}
.el-main {
  height: 0.34rem;
  font-size: 12px;
}
.el-main[data-v-a9deb8c3]{
  height: auto;
  padding-top: 0.82rem;
}
</style>
