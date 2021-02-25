import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from '../components/Dashboard.vue'
import profile from '../components/profile.vue'
import vuetify from '../plugins/vuetify'



Vue.use(Router)
Vue.use(VueRouter)
vue.use(dashboard)
vue.use(profile)
vue.use(vuetify)

export default new Router({
  mode: 'history',
  base : Process.env.BASE_URL,
  routes:[
    {
        path:'/dashboard',
        name:'dashboard',
        component:'Dashboard'
    },
  {
        path:'/profile',
        name:'profile',
        component:'profile'
 },
  ]
})