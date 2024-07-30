<script setup lang="ts">
import TableCard from '../../components/TableCard.vue'
import {getPosts} from '../../api/post.ts'
import {useRouter} from 'vue-router'
import {Post} from '../../index'
import {ref} from 'vue'

const router = useRouter()
const tableData = ref<Post[]>(null)

const initialData = async () => {
  const {data: {data}, message} = await getPosts()
  if (message === 'success') {
    tableData.value = data
  }
}

initialData()
</script>

<template>
  <TableCard title="标签管理" :on-refresh="() => initialData()" :on-add="() => router.push('/post/edit')">
    <el-table :data="tableData" stripe class="w-full">
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="author" label="作者"></el-table-column>
      <el-table-column prop="category" label="分类"></el-table-column>
      <el-table-column prop="tags" label="标签"></el-table-column>
      <el-table-column prop="createAt" label="创建时间"></el-table-column>
      <el-table-column prop="updateAt" label="修改时间"></el-table-column>
      <el-table-column label="操作"></el-table-column>
    </el-table>
  </TableCard>
</template>

<style scoped>

</style>