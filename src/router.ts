import Vue from 'vue';
import Router from 'vue-router';

// console.log(Vue.prototype.$axios);

Vue.use(Router);
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'layout',
            component: () => import('./views/layout/index.vue'),
            children: [
                {
                    path: '/setMenu',
                    name: 'setMenu',
                    component: () => import('./views/setMenu/index.vue'),
                },
            ],
        },
        {
            path: '/login',
            name: 'home',
            component: () => import(/* webpackChunkName: "about" */ './views/login/index.vue'),
        },
    ],
});
