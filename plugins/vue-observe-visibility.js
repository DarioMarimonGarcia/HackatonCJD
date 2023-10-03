import { ObserveVisibility } from 'vue3-observe-visibility'
export default defineNuxtPlugin(({ vueApp }) => {
    vueApp.directive('observe-visibility', ObserveVisibility)
})
