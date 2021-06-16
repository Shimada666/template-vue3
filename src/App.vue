<template>
  <Layout />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/views/HelloWorld.vue'
import Layout from '@/components/layout/index.vue'
import '@/assets/style/share.scss'

export default defineComponent({
  name: 'App',
  components: {
    Layout
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
