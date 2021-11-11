import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routerPath = new Router({
    routes : [
        {
            path: '/test01',
            component: ()=> import("./h5pages/test/Test.vue")
        },
        {
            path: '/check01',
            component: ()=> import("./h5pages/check/Check.vue")
        },
        {
            path: '/map',
            component: ()=> import("./h5pages/map/Map.vue")
        },
        {
            path: '/charts',
            component: ()=> import("./h5pages/charts/Charts.vue")
        },
        {
            path: '/element',
            component: ()=> import("./h5pages/element/Element.vue")
        },
        {
            path: '/wxpublic',
            component: ()=> import("./wxpublic/WxPublic.vue")
        },
    ]
})

export default routerPath