<script setup lang="ts">
import {ref, computed} from 'vue'

const title = ref('')
const todos = ref([{
  title: '学习Vue',
  done: false
}])

function addTodo() {
  todos.value.push({
    title: title.value,
    done: false
  })
  title.value = ''
}

function clear() {
  todos.value = todos.value.filter(todo => !todo.done)
}

const active = computed(() => {
  return todos.value.filter(todo => !todo.done).length
})
const all = computed(() => todos.value.length)
const allDone = computed(({
  get: function () {
    return active.value === 0
  },
  set: function (value: boolean) {
    todos.value.forEach(todo => {
      todo.done = value
    })
  }
}))
</script>

<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo"/>
    <ul v-if="todos.length">
      <li v-for="todo in todos">
        <input type="checkbox" v-model="todo.done"/>
        <span :class="{done: todo.done}">{{ todo.title }}</span>
      </li>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选<input type="checkbox" v-model="allDone" />
      <span>{{active}} / {{all}}</span>
    </div>
    <button @click="clear">清空</button>
  </div>
</template>

<style scoped>
h1 {
  cursor: pointer;
  color: red;
}
</style>