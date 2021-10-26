import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routerPath = new Router({
    routes : [
        {
            path: '/test01',
            component: ()=> import("./pages/test/Test.vue")
        },
        {
            path: '/check01',
            component: ()=> import("./pages/check/Check.vue")
        }
    ]
})

export default routerPath