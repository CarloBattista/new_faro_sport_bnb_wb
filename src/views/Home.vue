<template>
  <navigation />
  <main class="relative">
    <hero data-theme="dark" image="https://www.giovannicarrieri.com/photography/italy/taranto/taranto-mar-grande.jpg" :title="$t('hero.hero_home')" />
    <!-- SERVICES -->
    <section data-theme="light" class="relative w-full py-[100px] md:px-16 px-4 flex flex-col gap-14">
      <div class="relative w-full flex items-center">
        <h2 class="text-[#101828] text-3xl lustria-font-loaded">{{ $t('services.title') }}</h2>
      </div>
      <div class="relative w-full grid gap-2.5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        <cardService
          v-for="(service, serviceIndex) in store.services"
          :key="serviceIndex"
          :icon="service.icon"
          :label="$t('services.' + service.label)"
        />
      </div>
    </section>
    <!-- CONTACTS -->
    <section data-theme="light" class="relative w-full py-[100px] md:px-16 px-4 grid gap-8 md:grid-cols-3 grid-cols-1">
      <div v-for="(contact, contactIndex) in store.contacts" :key="contactIndex" class="w-full flex flex-col gap-3">
        <div class="relative h-8 aspect-square flex items-center justify-center">
          <component :is="contact.icon" size="48" color="#101828" stroke-width="1.5" />
        </div>
        <h2 class="text-[#101828] md:text-2xl text-lg font-bold text-center">
          <a v-if="contact.type !== 'location'" :href="contact.type + ':' + contact.label" class="hover:border-b">{{ contact.label }}</a>
          <a v-if="contact.type === 'location'" href="https://maps.app.goo.gl/7dfmi1J1hWrYs4487" target="_blank" class="hover:border-b">{{
            contact.label
          }}</a>
        </h2>
      </div>
    </section>
    <!-- CONDITIONS -->
    <section data-theme="dark" class="relative w-full py-16 md:px-16 px-4 bg-[#101828]">
      <div class="relative w-full flex items-center justify-center">
        <h2 class="text-white text-3xl lustria-font-loaded text-center">{{ $t('conditions.title') }}</h2>
      </div>
      <div class="w-full max-w-[600px] mx-auto mt-14 flex flex-col gap-2.5">
        <div class="w-full px-8 py-7 flex items-center justify-between">
          <div class="flex flex-col gap-1">
            <h2 class="text-white text-2xl font-bold">Check-in</h2>
            <h3 class="text-white text-base font-normal">{{ store?.checkIn }}</h3>
          </div>
          <Clock size="48" color="#fff" stroke-width="1.5" />
        </div>
        <div class="w-full px-8 py-7 flex items-center justify-between">
          <div class="flex flex-col gap-1">
            <h2 class="text-white text-2xl font-bold">Check-out</h2>
            <h3 class="text-white text-base font-normal">{{ $t('conditions.time') }} {{ store?.checkOut }}</h3>
          </div>
          <Clock size="48" color="#fff" stroke-width="1.5" />
        </div>
        <div class="w-full px-8 py-7 flex items-center justify-between">
          <div class="flex flex-col gap-1">
            <h2 class="text-white text-2xl font-bold">{{ $t('conditions.credit_card_accepted') }}</h2>
            <h3 class="text-white text-base font-normal">{{ $t('common.all') }}</h3>
          </div>
          <CreditCard size="48" color="#fff" stroke-width="1.5" />
        </div>
      </div>
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
import cardService from '../components/card/card-service.vue';
import buttonNf from '../components/button/button-nf.vue';
import contentInfo from '../components/navigation/content-info.vue';

// ICONS
import { MapPin, Mail, Smartphone, Clock, CreditCard } from 'lucide-vue-next';

export default {
  name: 'Home',
  components: {
    navigation,
    hero,
    cardService,
    buttonNf,
    contentInfo,

    // ICONS
    MapPin,
    Mail,
    Smartphone,
    Clock,
    CreditCard,
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
