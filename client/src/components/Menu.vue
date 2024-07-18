<script lang="ts" setup>
import {routes} from '../router'
import {ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {ArrowLeftBold, ArrowRightBold} from '@element-plus/icons-vue'

const route = useRoute()
const router = useRouter()
const {collapse} = defineProps<{ collapse: boolean }>()
const routeName = ref(route.name)

const onSelect = (routeName) => {
  router.push({name: routeName})
}

</script>
<template>
  <el-menu
      :default-active="routeName"
      :collapse="collapse"
      class="h-full w-full"
      @select="onSelect"
  >
    <template v-for="(route, index) in routes[0].children" :key="route.name">
      <!--一级菜单-->
      <el-menu-item v-if="!route.children || route.children.length === 0" :index="route.name">
        <el-icon>
          <component :is="route.meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ route.meta.title }}</span>
        </template>
      </el-menu-item>
      <!--二级菜单-->
      <el-sub-menu v-if="route.children && route.children.length > 0" :index="route.name">
        <template #title>
          <el-icon>
            <component :is="route.meta.icon"></component>
          </el-icon>
          <span>{{ route.meta.title }}</span>
        </template>
        <el-menu-item v-for="item in route.children" :key="item.name" :index="item.name">
          <span>{{ item.meta.title }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>
