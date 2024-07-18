<script lang="ts" setup>
import {routes} from '../router'


const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<template>
  <el-menu
      default-active="0"
      class="h-full"
      @open="handleOpen"
      @close="handleClose"
  >
    <template v-for="(route, index) in routes[0].children" :key="route.name">
      <!--一级菜单-->
      <el-menu-item v-if="!route.children || route.children.length === 0" :index="index">
        <router-link :to="route.name">
          <el-icon>
            <component :is="route.meta.icon"></component>
          </el-icon>
          <span>{{ route.meta.title }}</span></router-link>
      </el-menu-item>
      <!--二级菜单-->
      <el-sub-menu v-if="route.children && route.children.length > 0" :index="index">
        <template #title>
          <el-icon>
            <component :is="route.meta.icon"></component>
          </el-icon>
          <span>{{ route.meta.title }}</span>
        </template>
        <el-menu-item v-for="item in route.children" :key="item.name">
          <router-link :to="item.path">
            <span>{{ item.meta.title }}</span></router-link>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>

</template>
