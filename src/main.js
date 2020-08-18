import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VeeValidate from 'vee-validate'
// Font Awesome
import { library, dom } from '@fortawesome/fontawesome-svg-core'
// add fas, fab, far packs to library
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Buefy from 'buefy'

library.add(fab, fas, far)
dom.watch()

const VueAnalytics = require('vue-analytics').default
Vue.use(Buefy, { defaultIconPack: 'fas' })
if (process.env.NODE_ENV === 'production') {
  Vue.use(VueAnalytics, {
    id: 'UA-73799357-3',
    router
  })
}
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VeeValidate)

/* IE support */
// polyfills are automatically imported by TS when added in package.json
// Import missing fetch from babel
import 'isomorphic-fetch'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
