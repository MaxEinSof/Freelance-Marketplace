import { createRouter, createWebHistory } from 'vue-router';
import Tasks from "@/views/Tasks";
import New from "@/views/New";
import Task from "@/views/Task";

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
