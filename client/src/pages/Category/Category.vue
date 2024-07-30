<script setup lang="ts">
import TableCard from '../../components/TableCard.vue'
import { getCategories } from '../../api/category.ts'
import { Category } from '../../index'
import { ref } from 'vue'
import BaseColumn from '../../components/BaseColumn.vue';


const tableData = ref<Category[]>([])
const dialogVisible = ref(false)

const initialData = async () => {
  const { data, message } = await getCategories()
  if (message === 'success') {
    tableData.value = data
  }
}

const onAdd = () => { }

const onEdit = (id: number) => {

}

const onDelete = (id: number) => {
  console.log(id)
}

initialData()
</script>

<template>
  <TableCard title="分类管理" :on-refresh="() => initialData()" :on-add="onAdd">
    <el-table :data="tableData" stripe class="w-full">
      <el-table-column prop="name" label="名称"></el-table-column>
      <BaseColumn :on-edit="onEdit" :on-delete="onDelete" />
    </el-table>
  </TableCard>
  <el-dialog v-model="dialogVisible" title="分类编辑" width="500">

  </el-dialog>
</template>

<style scoped></style>