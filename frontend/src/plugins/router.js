import Vue from 'vue'
import VueRouter from 'vue-router'
import Trailers from '@/components/Trailers'
import Foo from '@/Foo'
import Bar from '@/Bar'
import Card from '@/Card'

Vue.use(VueRouter)

// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

const routes = [
    { path: '', component: Trailers },
    { path: '/:id', component: Card, props: true },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
] 

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router
