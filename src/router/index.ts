import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router';

export const constantRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        component: () =>
            import('../views/login/index.vue'),
        name: 'login',
    },
];


const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_APP_NAME as any),
    routes: constantRoutes
});

router.beforeEach((to, from, next) => {
    next();
});

export default router;