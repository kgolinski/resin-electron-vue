import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FirstPage from '@/components/FirstPage'
import FirstPageChild from '@/components/FirstPageChild'
import SecondPage from '@/components/SecondPage'
import Counter from '@/components/Counter'
import Circles from '@/components/Circles'
import Animation from '@/components/Animation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/firstroute/:name',
      component: FirstPage,
      children:
      [
        {
          path: 'child',
          component: FirstPageChild
        }
      ]
    },
    {
      path: '/secondroute/:id',
      component: SecondPage
    },
    {
      path: '/counter',
      component: Counter
    },
    {
      path: '/circles',
      component: Circles
    },
    {
      path: '/animation',
      component: Animation
    }
  ],
  mode: 'history'
})
