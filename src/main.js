import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTimes, faSearch, faCopy, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'

import routes from '@/routes.js'
import EventBus from '@/plugins/event-bus'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faEdit, faTimes, faSearch, faCopy, faCaretUp, faCaretDown)

Vue.use(VueRouter)
Vue.use(EventBus)
Vue.component('font-awesome-icon', FontAwesomeIcon)

const router = new VueRouter({ routes })

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
