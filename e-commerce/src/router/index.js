import { createRouter, createWebHistory } from 'vue-router';
import Main from '../pages/Main.vue';
import Favorites from '../pages/Favorites.vue';
import Auth from '../pages/Auth.vue';
import Login from '../pages/Login.vue';

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main,
    },
    {
        path: '/favorites',
        name: 'Favorites',
        component: Favorites,
    },
    {
        path: '/auth',
        name: 'Auth',
        component: Auth,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    }
];

const router = createRouter({
    history: createWebHistory(), // Используем HTML5 History API для "чистых" URL без #
    routes, // Сокращенная запись для `routes: routes`
});

export default router;