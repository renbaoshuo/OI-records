import Vue from 'vue';
import VueRouter from 'vue-router';
import List from '@/views/List.vue';

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
