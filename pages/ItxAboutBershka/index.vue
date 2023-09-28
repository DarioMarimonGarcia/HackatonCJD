<script setup>
import Topbar from '@/components/Topbar/index.vue'
import AboutBershka from '@/components/AboutBershka/Mobile';
import { ref } from 'vue'

const sectionSelectedIdx = ref(-1);

function onSectionSelected (idx) {
    debugger;
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
</script>
<template>
    <div class="about-bsk-page">
        <topbar />
        <about-bershka
            id="about-bershka-0"
            :index="0"
            :info="'LA MARCA LA MARCALA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA'"
            v-if="sectionSelectedIdx === -1 || sectionSelectedIdx === 0"
            @sectionShow="onSectionSelected"
        />
        <about-bershka
            :index="1"
            :info="'CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO'"
            id="about-bershka-1"
            v-if="sectionSelectedIdx === -1 || sectionSelectedIdx === 1"
            @sectionShow="onSectionSelected"
        />
        <about-bershka
            :index="2"
            :info="'TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET'"
            id="about-bershka-2"
            v-if="sectionSelectedIdx === -1 || sectionSelectedIdx === 2"
            @sectionShow="onSectionSelected"
        />
    </div>
</template>
