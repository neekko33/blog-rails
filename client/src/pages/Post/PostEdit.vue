<script setup lang="ts">
import { ref } from 'vue'
import Card from '../../components/Card.vue'
import { UploadFilled } from '@element-plus/icons-vue'
import { MdEditor } from 'md-editor-v3'
import { ElMessage } from 'element-plus'
import 'md-editor-v3/lib/style.css'

const title = ref('')
const category = ref('')
const tags = ref<string[]>([])
const text = ref('')
const fileName = ref('')

const onReadFile = async () => {
  try {
    const fileHandler: FileSystemFileHandle = await window.showOpenFilePicker()
    // only read md file
    if (!fileHandler[0].name.endsWith('.md')) {
      ElMessage({
        type: 'error',
        message: '文件格式错误',
      })
      return
    }
    fileName.value = fileHandler[0].name
    const file = await fileHandler[0].getFile()
    const reader = new FileReader()
    reader.onload = () => {
      text.value = reader.result
    }
    reader.readAsText(file)
  } catch (e) {
    ElMessage({
      type: 'error',
      message: '上传文件失败',
    })
  }
}

const onSubmit = () => {
  ElMessage({
    type: 'success',
    message: 'success'
  })
}

</script>

<template>
  <Card class="mb-5">
    <el-form :inline="true">
      <el-form-item label="标题">
        <el-input v-model="title" placeholder="请输入文章标题" style="width: 300px" clearable></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="category" placeholder="请选择分类" style="width: 240px">
        </el-select>
      </el-form-item>
      <el-form-item label="标签">
        <el-select v-model="tags" multiple filterable allow-create default-first-option :reserve-keyword="false"
          placeholder="选择或输入标签" style="width: 240px">
          <el-option v-for="item in tagOptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="large" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </Card>
  <Card>
    <div class="flex justify-between items-center pb-5 ">
      <div class="flex">
        <el-space size="default">
          <el-button class="flex flex-row items-center" @click="onReadFile">
            <el-icon>
              <UploadFilled />
            </el-icon>
            <span>文件读取</span>
          </el-button>
          <div>{{ fileName }}</div>
        </el-space>
      </div>
    </div>
    <MdEditor v-model="text" />
  </Card>
</template>

<style scoped></style>