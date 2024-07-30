<script setup lang="ts">
import Menu from '../components/Menu.vue'
import {ArrowRight} from '@element-plus/icons-vue'
import {ref, watch} from 'vue'
import {useRoute} from 'vue-router'

const route = useRoute()
const isCollapsed = ref(false)

watch(route.fullPath,() => {
  console.log(route.matched)
})

const switchCollapse = () => {
  isCollapsed.value = !isCollapsed.value
}
</script>

<template>
  <el-container class="w-full h-full">
    <el-header class="bg-white border-b h-14 flex justify-between items-center px-5">
      <div class="flex items-center justify-between">
        <img src="https://element-plus.org/images/element-plus-logo.svg" width="120"
             alt="logo"/>
      </div>
      <el-dropdown trigger="click">
        <div class="cursor-pointer hover:bg-gray-100 rounded-md h-5/6 flex items-center justify-center p-3">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" size="small" />
          <span class="font-bold pl-3">Neekko33</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <span>退出登陆</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-header>
    <el-container>
      <el-aside width="auto" class="border-r">
        <Menu :collapse="isCollapsed" :switch-collapse="switchCollapse"/>
      </el-aside>
      <el-main class="bg-gray-50">
        <el-breadcrumb :separator-icon="ArrowRight" class="mb-5">
          <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
          <el-breadcrumb-item>promotion management</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>

<style>
.el-aside {
  overflow: visible !important;
}
</style>