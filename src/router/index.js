import { createRouter, createWebHistory } from 'vue-router';
const Tasks = () => import('@/views/Tasks');
const New = () => import('@/views/New');
const Task = () => import('@/views/Task');

export default createRouter({
    routes: [
        {
            path: '/tasks',
            component: Tasks,
            alias: '/'
        },
        {
            path: '/new',
            component: New,
        },
        {
            path: '/task/:id',
            component: Task,
            props: true,
        },
    ],
    history: createWebHistory(),
    linkActiveClass: 'active',
});
