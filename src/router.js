import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Polish from './views/Polish.vue'
import Serbian from './views/Serbian.vue'
import German from './views/German.vue'
import Czech from './views/Czech.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Wellbeing in Europe | Edgeryders',
        metaTags: [
          {
            name: 'description',
            content: 'Inspire and connect with others all over Europe by sharing your story.'
          },
          {
            property: 'og:description',
            content: 'Inspire and connect with others all over Europe by sharing your story.'
          }
        ]
      }
    },
    {
      path: '/en',
      name: 'home',
      component: Home,
      meta: {
        title: 'Wellbeing in Europe | Edgeryders',
        metaTags: [
          {
            name: 'description',
            content: 'Inspire and connect with others all over Europe by sharing your story.'
          },
          {
            property: 'og:description',
            content: 'Inspire and connect with others all over Europe by sharing your story.'
          }
        ]
      }
    },
    {
      path: '/pl',
      name: 'polish',
      component: Polish,
      meta: {
        title: 'Dobrobyt w Europie | Edgeryders',
        metaTags: [
          {
            name: 'description',
            content: 'Poznaj innych, zainspiruj się ich historiami i opowiedz nam o sobie.'
          },
          {
            property: 'og:description',
            content: 'Poznaj innych, zainspiruj się ich historiami i opowiedz nam o sobie.'
          }
        ]
      }
    },
    {
      path: '/srb',
      name: 'serbian',
      component: Serbian,
      meta: {
        title: 'Blaho v Evropě | Edgeryders',
        metaTags: [
          {
            name: 'description',
            content: 'Inspiriši i povežise sa drugima širom Evrope deleći svoju priču.'
          },
          {
            property: 'og:description',
            content: 'Inspiriši i povežise sa drugima širom Evrope deleći svoju priču.'
          }
        ]
      }
    },
    {
      path: '/de',
      name: 'german',
      component: German,
      meta: {
        title: 'Wohlbefinden in Europa | Edgeryders',
        metaTags: [
          {
            name: 'description',
            content: 'Inspirieren und verbinden Sie sich mit anderen in ganz Europa, indem Sie Ihre Geschichte erzählen.'
          },
          {
            property: 'og:description',
            content: 'Inspirieren und verbinden Sie sich mit anderen in ganz Europa, indem Sie Ihre Geschichte erzählen.'
          }
        ]
      }
    },
    {
      path: '/cz',
      name: 'czech',
      component: Czech,
      meta: {
        title: 'Blaho v Evropě | Edgeryders',
        metaTags: [
          {
            name: 'description',
            content: 'Podělte se o svůj příběh a inspirujte se a spojte se s ostatními v celé Evropě.'
          },
          {
            property: 'og:description',
            content: 'Podělte se o svůj příběh a inspirujte se a spojte se s ostatními v celé Evropě.'
          }
        ]
      }
    }
  ]
})
