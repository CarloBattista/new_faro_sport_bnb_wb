<template>
  <navigation />
  <main class="relative">
    <hero
      data-theme="dark"
      size="min"
      image="https://www.giovannicarrieri.com/photography/italy/taranto/taranto-mar-grande.jpg"
      :title="$t('hero.hero_gallery')"
    />
    <!-- GALLERY SLIDER -->
    <section data-theme="light" class="relative w-full py-16 md:px-16 px-4">
      <slider :images="store.gallery" :autoPlay="true" :interval="10000" />
    </section>
    <!-- READY -->
    <section data-theme="dark" class="relative w-full py-16 md:px-16 px-4 bg-[#101828]">
      <div class="relative w-full max-w-[600px] mx-auto flex flex-col gap-2.5 items-center justify-center">
        <h2 class="text-white text-3xl lustria-font-loaded text-center">{{ $t('ready.title') }}</h2>
        <h2 class="text-white text-base text-center">{{ $t('ready.description') }}</h2>
      </div>
      <a href="tel:+393911412884" class="w-fit mx-auto mt-8 flex items-center justify-center">
        <buttonNf variant="outlined" :label="$t('nav.book_now')" />
      </a>
    </section>
  </main>
  <contentInfo data-theme="dark" />
</template>

<script>
import { store } from '../data/store';

import navigation from '../components/navigation/navigation.vue';
import hero from '../components/global/hero.vue';
import buttonNf from '../components/button/button-nf.vue';
import slider from '../components/slider/slider.vue';
import contentInfo from '../components/navigation/content-info.vue';

export default {
  name: 'Gallery',
  components: {
    navigation,
    hero,
    buttonNf,
    slider,
    contentInfo,
  },
  data() {
    return {
      store,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped></style>
