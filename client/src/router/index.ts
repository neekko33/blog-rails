import {createRouter, createWebHistory} from 'vue-router'
import {
  DataAnalysis,
  Collection,
  User,
  PriceTag
} from '@element-plus/icons-vue'

export const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('../layouts/Layout.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        meta: {
          title: '控制台',
          icon: DataAnalysis
        },
        component: () => import('../pages/Dashboard/Dashboard.vue')
      },
      {
        path: 'post',
        name: 'Post',
        meta: {
          title: '文章管理',
          icon: Collection,
        },
        component: () => import('../pages/Post/Post.vue'),
        children: [
          {
            path: 'list',
            name: 'PostList',
            meta: {
              title: '文章列表'
            },
            component: () => import('../pages/Post/PostList.vue')
          },
          {
            path: 'edit',
            name: 'PostEdit',
            meta: {
              title: '文章编辑'
            },
            component: () => import('../pages/Post/PostEdit.vue')
          }
        ]
      },
      {
        path: 'tag',
        name: 'Tag',
        meta: {
          title: '标签管理',
          icon: PriceTag
        },
        component: () => import('../pages/Tag/Tag.vue')
      },
      {
        path: 'user',
        name: 'User',
        meta: {
          title: '用户管理',
          icon: User
        },
        component: () => import('../pages/User/User.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    label: '登陆',
    component: () => import('../pages/Login/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router