import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// index
import Index from '@/view/index/Index'
import ArticleInfo from '@/view/index/ArticleInfo'
import Category from '@/view/index/Category'
import About from '@/view/index/About'
// admin
import Admin from '@/view/admin/Admin'
import AdminIndex from '@/view/admin/AdminIndex'
import Article from '@/view/admin/Article'
import ArticleEdit from '@/view/admin/ArticleEdit'
import Classify from '@/view/admin/Classify'
import ClassifyEdit from '@/view/admin/ClassifyEdit'
import Tag from '@/view/admin/Tag'
import Login from '@/view/admin/Login'
import VuexTest from '@/view/VuexTest'
import store from '@/store/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/article/:id',
      name: 'ArticleInfo',
      component: ArticleInfo
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: 'index',
          name: 'AdminIndex',
          component: AdminIndex
        },
        {
          path: 'article',
          name: 'Article',
          component: Article
        },
        {
          path: '/article/edit/:id',
          name: 'ArticleEditUpdate',
          component: ArticleEdit
        },
        {
          path: '/article/edit',
          name: 'ArticleEdit',
          component: ArticleEdit
        },
        {
          path: '/classify',
          name: 'Classify',
          component: Classify
        },
        {
          path: '/classify/edit',
          name: 'ClassifyEditUpdate',
          component: ClassifyEdit
        },
        {
          path: '/classify/edit/:id',
          name: 'ClassifyEdit',
          component: ClassifyEdit
        },
        {
          path: '/tag',
          name: 'Tag',
          component: Tag
        }
      ]
    },
    {
      path: '/VuexTest',
      name: 'VuexTest',
      component: VuexTest
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 全局验证token是否存在
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (store.state.access_token) {
      next()
    } else {
      next({
        name: 'Login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

export default router
