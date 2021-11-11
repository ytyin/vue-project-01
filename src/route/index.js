import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const router = new Router({
    routes : [
        {
            path: '/test',
            component: ()=> import("../h5pages/test/Test.vue")
        },
        {
            path: '/check',
            component: ()=> import("../h5pages/check/Check.vue")
        }
    ]
})

export default router