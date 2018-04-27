import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Schedule from '@/components/Schedule'
import Contact from '@/components/Contact'
import Stream from '@/components/Stream'
import Commands from '@/components/Commands'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: Schedule
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/stream',
      name: 'Stream',
      component: Stream
    },
    {
      path: '/commands',
      name: 'Commands',
      component: Commands
    }
  ]
})
