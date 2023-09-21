export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path !== '/') {
        return;
    }

    return navigateTo('/itxAboutBershka');
})
