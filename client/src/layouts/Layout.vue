<script setup lang="ts">
import Menu from '../components/Menu.vue'
import {ref} from 'vue'
import {ArrowLeftBold, ArrowRightBold} from '@element-plus/icons-vue'

const isCollapsed = ref(false)
</script>

<template>
  <el-container class="w-full h-full">
    <el-header class="bg-white border-b h-14 flex justify-between items-center px-5">
      <div class="flex items-center justify-between">
        <img src="https://element-plus.org/images/element-plus-logo.svg" width="120"
             alt="logo"/>
      </div>
      <el-dropdown trigger="click">
        <div class="cursor-pointer hover:bg-gray-100 rounded-md h-5/6 flex items-center justify-center px-3">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
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
      <el-aside width="auto" class="relative">
        <Menu :collapse="isCollapsed"/>
        <el-button :icon="isCollapsed? ArrowRightBold:ArrowLeftBold" class="absolute bottom-0 w-full h-12 border-r-0"
                   @click="isCollapsed=!isCollapsed"></el-button>
      </el-aside>
      <el-main>
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