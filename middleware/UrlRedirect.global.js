import { ROUTES } from './constants/index.js';
export default defineNuxtRouteMiddleware((to, from) => {
    const routes = Object.values(ROUTES);

    if (routes.includes(to.path)) {
        return;
    }

    return navigateTo(ROUTES.HOME);
})
