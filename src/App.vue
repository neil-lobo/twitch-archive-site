<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"

export default {
  name: "App",
  components: {
    Navbar
  }
}
</script>


<style lang="scss">
// Global styles
</style>

<style lang="scss" scoped>
</style>
