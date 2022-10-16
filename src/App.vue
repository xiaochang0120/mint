<template>
  <!--渲染对应的视图组件,千万别忘记了！-->
  <router-view></router-view>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}

html {
  font-size: 27.78vw;
}

body {
  font-size: 16px;
  display: flex;
  flex-direction: column;
}
</style>
