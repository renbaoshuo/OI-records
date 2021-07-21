import Vue from 'vue';
import VueRouter from 'vue-router';
import List from '@/views/List.vue';
import NotFound from '@/views/404.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/page/1'
    },
    {
        path: '/page/:id',
        name: '做题记录',
        component: List,
    },
    {
        path: '/404',
        name: '页面未找到',
        component: NotFound,
    }
];

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes
});

export default router;
