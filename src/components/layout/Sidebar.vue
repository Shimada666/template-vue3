<script lang="ts" setup>
import { ref } from 'vue'
import { LaptopOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// eslint-disable-next-line unused-imports/no-unused-vars
function clickMenuItem({ item, key, keyPath }: any) {
  router.push({ name: key })
}

const selectedKeys2 = ref<string[]>(['1'])
const openKeys = ref<string[]>(['sub1'])
</script>

<template>
  <a-layout-sider width="240" style="background: #fff;">
    <div class="logo">
      Hi, I'm Ergo
    </div>
    <a-menu
      v-model:selectedKeys="selectedKeys2"
      v-model:openKeys="openKeys"
      :style="{ borderRight: 0 }"
      mode="inline"
      @click="clickMenuItem"
    >
      <a-menu-item key="home">
        <LaptopOutlined />
        Dashboard
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #title>
          <span>
            <LaptopOutlined />
            Bot概览
          </span>
        </template>
        <a-menu-item key="guide">
          基本信息
        </a-menu-item>
      </a-sub-menu>
      <!-- <a-menu-item key="project"> -->
      <!--  <laptop-outlined /> -->
      <!--  工程创建 -->
      <!-- </a-menu-item> -->
    </a-menu>
  </a-layout-sider>
</template>

<style scoped lang="scss">
.logo {
  height: 32px;
  margin: 16px;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
}
</style>
