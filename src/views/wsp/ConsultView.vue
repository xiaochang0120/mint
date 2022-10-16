<template>
  <header class="header">
    <span @click="$router.push('/')">&lt;</span>
    <span>去减肥吧，人间值得！</span>
    <span></span>
  </header>
  <div class="kongbai"></div>
  <img src="../../images/router01.jpg" alt="" />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.2rem;
  position: fixed;
  top: 0;
  background-color: #fff;
  span {
    font-size: 0.18rem;
    font-weight: 900;
    opacity: 0.8;
  }
}
.kongbai {
  height: 0.5rem;
}
img {
  width: 100%;
}
</style>
