import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const router = new Router({
    routes : [
        {
            path: '/test',
            component: ()=> import("../pages/test/Test.vue")
        },
        {
            path: '/check',
            component: ()=> import("../pages/check/Check.vue")
        }
    ]
})

export default router