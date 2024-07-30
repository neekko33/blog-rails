<script setup lang="ts">
import { formatTime } from '../utils';

const { onEdit, onDelete } = defineProps<{
  onEdit: (id: number) => void,
  onDelete: (id: number) => void
}>()
</script>

<template>
  <el-table-column label="创建时间">
    <template #default="scope">
      {{ formatTime(scope.row.created_at) }}
    </template>
  </el-table-column>
  <el-table-column label="修改时间">
    <template #default="scope">
      {{ formatTime(scope.row.created_at) }}
    </template>
  </el-table-column>
  <el-table-column label="操作" width="200">
    <template #default="scope">
      <el-button type="primary" @click="onEdit(scope.row.id)">编辑</el-button>
      <el-space />
      <el-button type="danger" @click="onDelete(scope.row.id)">删除</el-button>
    </template>
  </el-table-column>
</template>