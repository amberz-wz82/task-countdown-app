import Vue from 'vue'
import Router from 'vue-router'
import Countdown from './views/Countdown.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'countdown',
      component: Countdown
    },
    // {
    //   path: '/new-countdown',
    //   name: 'new countdown',
    //   component: SetCountdown
    // }
  ]
})
