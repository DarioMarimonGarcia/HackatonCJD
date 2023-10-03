<script setup>
import { ref } from 'vue';
import Topbar from '@/components/Topbar/index.vue';
import AboutBershka from '~/components/AboutBershkaCard/Mobile';
import Marquee from '@/components/Marquee/index.vue';

const sections = ref([]);
const isMainContentVisible = ref(true);

const { data: aboutBskInfo, pending } = await useAsyncData('info', async () =>
    await $fetch('/api/aboutBskInfo')
);
function visibilityChange (isVisible) {
    isMainContentVisible.value = isVisible
}

function onSectionShow (key) {
    for (const section of sections.value) {
        const aux = JSON.parse(JSON.stringify(section));
        if (aux.sectionKey !== key) {
            section.onReset();
        }
    }
}

</script>
<template>
    <div class="about-bsk-page">
        <topbar :isSolid="!isMainContentVisible"/>
        <section
            class="main-content"
            v-observe-visibility="visibilityChange"
            v-if="!pending">
            <about-bershka
                v-for="value of aboutBskInfo"
                :ref="(el) => sections.push(el)"
                :image="value.img"
                :section-key="value.key"
                :main-info="value.mainInfo"
                :info="value.info"
                :title="value.title"
                :slogan="value.slogan"
                @sectionShow="onSectionShow"
            />
            <marquee
                :text="'BSK'"
                :isDark="true"
            />
        </section>
        <section class="offices">
            <h2 class="offices__title">OFICINAS</h2>
            <div class="offices__info-content">
                <h4>OFICINAS CENTRALES</h4>
                <div class="offices__direction-content">
                    <span class="offices__direction-text">Edificio Inditex</span>
                    <span class="offices__direction-text">Avenida de la Diputación s/n 15142 Arteixo, A Coruña</span>
                    <span class="offices__direction-text">España</span>
                </div>
                <div>
                    <ul>
                        <li>
                            <span>Albania - Tirana</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>
<style lang="scss">
.about-bsk-page {
    overflow-x: hidden;
    .offices {
        height: 110vh;
        padding-top: 40px;

        &__title {
            text-align: center;
            padding-bottom: 24px;
        }

        &__info-content {
            padding: 0 8px;
        }

        &__direction-content {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            padding-top: 8px;
        }

        &__direction-text {
            font-size: 12px;
            font-weight: 200;
        }
    }

}
</style>
