<script setup lang="ts">
import {useUserStore} from '../../store/user.ts'

const store = useUserStore()

store.login({
  username: 'test',
  jwt: '123',
  userId: 1
})
</script>

<template>
  <h1>Dashboard</h1>
</template>

<style scoped>

</style>