<script setup>
import { ref } from 'vue';
import Topbar from '@/components/Topbar/index.vue';
import AboutBershka from '~/components/AboutBershkaCard/Mobile';
import Marquee from '@/components/Marquee/index.vue';

const sectionSelectedIdx = ref(-1);
const isMainContentVisible = ref(true);

function onSectionSelected (idx) {
    console.log(idx);
    const refKey = `about-bershka-${sectionSelectedIdx.value}`;
    sectionSelectedIdx.value = idx;
    if (sectionSelectedIdx.value === -1) {
        const element = document.getElementById(refKey);
        if (element) {
            nextTick(() => {
                element.scrollIntoView();
            });
        }
    }
}

function visibilityChange (isVisible) {
    isMainContentVisible.value = isVisible
}
</script>
<template>
    <div class="about-bsk-page">
        <topbar :isSolid="!isMainContentVisible"/>
        <section class="main-content" v-observe-visibility="visibilityChange">
            <about-bershka
                id="about-bershka-0"
                :index="0"
                :info="'LA MARCA LA MARCALA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA'"
                :title="'LA MARCA'"
                v-if="sectionSelectedIdx === -1 || sectionSelectedIdx === 0"
                @sectionShow="onSectionSelected"
            />
            <about-bershka
                :index="1"
                :info="'CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO'"
                :title="'CONCEPTO'"
                id="about-bershka-1"
                v-if="sectionSelectedIdx === -1 || sectionSelectedIdx === 1"
                @sectionShow="onSectionSelected"
            />
            <about-bershka
                :index="2"
                :info="'TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET'"
                :title="'TARGET'"
                id="about-bershka-2"
                v-if="sectionSelectedIdx === -1 || sectionSelectedIdx === 2"
                @sectionShow="onSectionSelected"
            />
            <marquee
                v-if="sectionSelectedIdx === -1"
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
    .main-content {
        padding-bottom: 40px;
    }

    .offices {
        height: 110vh;
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
