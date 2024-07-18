<script setup lang="ts">
import {Plus, Refresh} from '@element-plus/icons-vue'

const {title, onRefresh, onAdd} = defineProps<{
  title: string,
  onRefresh: () => void,
  onAdd: () => void,
}>()

</script>

<template>
  <el-card>
    <div class='flex justify-between items-center pb-5 '>
      <div class='text-xl'>{{ title }}</div>
      <div class='flex'>
        <el-space size='default'>
          <el-button class='flex flex-row items-center' @click='onRefresh'>
            <el-icon>
              <Refresh/>
            </el-icon>
            <span>刷新</span>
          </el-button>
          <el-button
              type='primary'
              class='flex flex-row items-center'
              @click='onAdd'>
            <el-icon>
              <Plus/>
            </el-icon>
            <span>新增</span>
          </el-button>
        </el-space>
      </div>
    </div>
    <slot></slot>
  </el-card>
</template>

<style scoped>

</style>