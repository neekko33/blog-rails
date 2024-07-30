<script setup lang="ts">
import TableCard from '../../components/TableCard.vue'
import { getPosts } from '../../api/post.ts'
import { useRouter } from 'vue-router'
import { Post } from '../../index'
import { ref } from 'vue'
import BaseColumn from '../../components/BaseColumn.vue'

const router = useRouter()
const tableData = ref<Post[]>([])

const initialData = async () => {
  const { data: { data }, message } = await getPosts()
  if (message === 'success') {
    tableData.value = data
  }
}

const onEdit = (id: number) => {

}

const onDelete = (id: number) => {
  console.log(id)
}

initialData()
</script>

<template>
  <TableCard title="文章管理" :on-refresh="() => initialData()" :on-add="() => router.push('/post/edit')">
    <el-table :data="tableData" stripe class="w-full">
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="author" label="作者"></el-table-column>
      <el-table-column prop="category_name" label="分类"></el-table-column>
      <el-table-column prop="tags" label="标签"></el-table-column>
      <BaseColumn :on-edit="onEdit" :on-delete="onDelete" />
    </el-table>
  </TableCard>
</template>

<style scoped></style>