import Vue from 'vue'
import Electron from 'vue-electron'
import Resource from 'vue-resource'
import Router from 'vue-router'
import Dialog from 'hsy-vue-dialog'
import Sortable from 'sortablejs'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App'
import routes from './routes'

Vue.use(Electron)
Vue.use(Resource)
Vue.use(Router)

Vue.use(Dialog)
Vue.use(ElementUI)

Vue.directive('sortable', {
  inserted: function(el, binding) {
    el.sortableIns = new Sortable(el, binding.value || {})
  }
})

Vue.config.debug = true

const router = new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  ...App
}).$mount('#app')
