<template>
  <nav class="nav">
    <div class="nav-home">
      <span class="logo-box">Corgitech</span>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Nav'
})
</script>

<style scoped lang="scss">
.nav {
  position: sticky;
  display: flex;
  align-items: center;
  top: 0;
  background-color: #042866;
  box-shadow: 0 2px 6px rgba(43, 52, 88, 0.4);
  padding: 0 1rem;
  height: 48px;
  z-index: 9;
  color: #fff;
  .logo-box {
    border: none;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.125;
  }
}
</style>
