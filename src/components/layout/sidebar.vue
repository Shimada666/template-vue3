<template>
  <div class="sidebar-container">
    <span class="sidebar-title">
      <span class="title-text">Corgitech-Manager</span>
    </span>
    <el-menu
      style="border-right-width: 0;"
      background-color="#f7f7f7"
      default-active="2"
      router
      class="sidebar">
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-s-home" />
          <span>服务器概览</span>
        </template>
        <el-menu-item index="/guide">
          基本信息
        </el-menu-item>
        <el-menu-item index="/service">
          服务情况
        </el-menu-item>
      </el-submenu>
      <!--<el-menu-item index="/guide">-->
      <!--  <i class="el-icon-s-home" />-->
      <!--  <span slot="title">概览</span>-->
      <!--</el-menu-item>-->
      <el-submenu index="2">
        <template #title>
          <i class="el-icon-menu" />
          <span>系统运维</span>
        </template>
        <el-menu-item index="/script">
          脚本执行
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="/project">
        <i class="el-icon-menu" />
        <template #title>工程创建</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SideBar'
})
</script>

<style scoped lang="scss">
.sidebar-container {
  position: sticky;
  left: 0;
  top: 48px;
  width: 220px;
  height: calc(100vh - 48px);
  background-color: #f7f7f7;
  border-right: solid 1px #e6e6e6;
  .sidebar-title {
    display: inline-block;
    height: 48px;
    line-height: 48px;
    width: 100%;
    overflow: hidden;
    .title-text {
      color: rgba(0, 0, 0, 0.75);
      font-size: 18px;
      margin-left: 14px;
      line-height: 24px;
      vertical-align: middle;
      word-break: keep-all;
    }
  }
}
</style>
