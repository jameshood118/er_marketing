import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Thanks from './views/Thanks.vue'
import Pricing from './views/Pricing.vue'
import ProductsHome from './views/products/ProductsHome.vue'
import ProductsAll from './views/products/ProductsAll.vue'
import EpicMedia from './views/products/Media.vue'
import EpicPlan from './views/products/Plan.vue'
import EpicBuilder from './views/products/Builder.vue'
import Resources from './views/Resources.vue'
import Contact from './views/Contact.vue'
import Legal from './views/Legal.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'root',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: Thanks
    },
    {
      path: '/resources',
      name: 'resources',
      component: Resources
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/products',
      component: ProductsHome,
      children: [
        {
          path: '/',
          redirect: { path: 'all' }
        },
        {
          path: 'media',
          name: 'epicmedia',
          component: EpicMedia
        },
        {
          path: 'plan',
          name: 'epicplan',
          component: EpicPlan
        },
        {
          path: 'builder',
          name: 'epicbuilder',
          component: EpicBuilder
        },
        {
          path: ':products',
          component: ProductsAll,
          props: true
        }
      ]
    },
    {
      path: '/legal',
      name: 'legal',
      component: Legal
    }
  ]
})
