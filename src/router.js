import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home'

Vue.use(Router)

// 路由
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
