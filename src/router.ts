import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'home',
            component: () => import(/* webpackChunkName: "about" */ './views/login/index.vue'),
        },
        {
            path: '/',
            redirect: '/login',
        },
    ],
});
