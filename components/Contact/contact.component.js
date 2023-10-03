import {ref} from "vue";

export default {
    setup() {
        const isFormDisplayed = ref(false);

        function displayForm () {
            isFormDisplayed.value = !isFormDisplayed.value;
            if (isFormDisplayed.value) {
                const element = document.querySelector('.contact__form-wrapper');
                if (element) {
                    nextTick(() => {
                        element.scrollIntoView({ behavior: "smooth" });
                    });
                }
            }
        }

        return {
            isFormDisplayed,
            displayForm
        };
    }
};
