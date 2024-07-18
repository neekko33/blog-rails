import {defineStore} from 'pinia'
import {ref} from 'vue'

interface AuthState {
  isLogin?: boolean
  jwt: string
  userId: string
  username: string
}

function initialState(): AuthState {
  const [jwt, userId, username] = ['jwt', 'userId', 'username'].map(key => {
    const value = localStorage.getItem(key)
    return value ?? null
  })
  return {
    isLogin: !!(jwt && userId && username),
    jwt: jwt ?? '',
    userId: userId ?? '',
    username: username ?? ''
  }
}

export const useUserStore = defineStore('user', () => {
  const state = initialState()
  const isLogin = ref(state.isLogin)
  const jwt = ref(state.jwt)
  const userId = ref(state.userId)
  const username = ref(state.username)

  function login(state: Omit<AuthState, 'isLogin'>) {
    isLogin.value = true
    jwt.value = state.jwt
    userId.value = state.userId
    username.value = state.username
    localStorage.setItem('jwt', state.jwt)
    localStorage.setItem('userId', state.userId)
    localStorage.setItem('username', state.username)
  }

  function logout() {
    isLogin.value = false
    jwt.value = ''
    userId.value = ''
    username.value = ''
    const removeItems = ['jwt', 'userId', 'username']
    removeItems.forEach(key => {
      localStorage.removeItem(key)
    })
  }

  return {isLogin, jwt, userId, username, login, logout}
})