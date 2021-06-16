<template>
  <div class="layout">
    <Login v-if="route.name === 'login'" />
    <div v-else>
      <Nav />
      <div class="layout__content">
        <div class="layout__wrapper">
          <SideBar />
        </div>
        <div class="layout__view">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Nav from '@/components/layout/nav.vue'
import SideBar from '@/components/layout/sidebar.vue'
import Login from '@/views/login.vue'
import { defineComponent, toRaw } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'Layout',
  components: {
    Nav,
    SideBar,
    Login
  },
  setup () {
    const route = useRoute()
    const router = useRouter()
    return {
      route,
      router
    }
  }
})
</script>

<style scoped lang="scss">
.layout {
  &__content {
    display: flex;
  }
  &__view {
    max-width: calc(100vw - 220px);
    flex: 1;
    height: 100%;
    padding: 20px;
  }
}
</style>
