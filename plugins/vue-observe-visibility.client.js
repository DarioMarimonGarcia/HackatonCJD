import VueObserveVisibility from 'vue3-observe-visibility'
export default defineNuxtPlugin(({ vueApp }) => {
    vueApp.use(VueObserveVisibility)
})
