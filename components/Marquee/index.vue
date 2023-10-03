<template>
    <div
        class="marquee"
        :class="{
            'marquee--dark': props.isDark
        }"
    >
        <span class="marquee__text">{{ text }}</span>
    </div>
</template>
<script setup>
import { onMounted } from 'vue'

const props = defineProps({
    text: {
        type: String,
        required: true
    },
    isDark: {
        type: Boolean,
        required: false,
        default: false
    }
})


onMounted(() => {
    const letter = document.querySelector('span');
    if (letter) {
        for (let counter = 1; counter <= 6; ++counter) {
           letter.textContent = `${letter.textContent} ${letter.textContent}`;
        }
    }
})

</script>
<style lang="scss">
.marquee {
    background-color: transparent;
    color: black;
    transition: all 0.5s;
    font-weight: bold;
    text-transform: uppercase;
    overflow: hidden;
    display: flex;
    padding-bottom: 8px;
    padding-top: 8px;
    align-items: center;

    &--dark {
        background: black;
        color: white;
    }

    &__text {
        white-space: nowrap;
        width: fit-content;
        display: flex;
        position: relative;
        transform: translatex(0);
        animation: marquee 40s infinite normal linear 1s;
    }
}


@keyframes marquee {
  0% {transform: translatex(0); }
  100% {transform: translatex(-50%); }
}
</style>
