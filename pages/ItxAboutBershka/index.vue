<script setup>
  import { ref } from 'vue';
  import Topbar from '@/components/Topbar/index.vue';
  import AboutBershka from '~/components/AboutBershkaCard/Mobile';
  import Marquee from '@/components/Marquee/index.vue';
  import Contact from  '@/components/Contact/index.vue';
  import Offices from  '@/components/OfficesSection/index.vue';
  import WorkWithUs from  '@/components/WorkWithUs/index.vue';

  const sections = ref([]);
  const isMainContentVisible = ref(true);

  const { data: dataInfo, pending } = await useAsyncData('info', async () =>
      await Promise.all([
          $fetch('/api/aboutBskInfo'),
          $fetch('/api/offices')
      ])
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
            v-if="!pending"
           >
            <about-bershka
                v-for="value of dataInfo[0]"
                :ref="(el) => sections.push(el)"
                :image="value.img"
                :section-key="value.key"
                :info="value.info"
                :title="value.title"
                :slogan="value.slogan"
                @sectionShow="onSectionShow"
            />
            <client-only>
                <marquee
                    :text="'BSK'"
                    :isDark="true"
                />
            </client-only>
        </section>
        <offices :officeGroups="dataInfo[1]"/>
        <hr class="separator"/>
        <contact />
        <hr class="separator"/>
        <work-with-us/>
    </div>
</template>
<style lang="scss">
  .about-bsk-page {
      overflow-x: hidden;
  }

  .separator {
    border-top: 5px dashed black;
  }
</style>
