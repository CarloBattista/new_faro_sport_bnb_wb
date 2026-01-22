<template>
  <footer
    class="relative z-999 bottom-0 left-0 w-full md:px-16 px-4 py-5 flex gap-4 md:flex-row flex-col items-center md:justify-between justify-center bg-[#101828]"
  >
    <span class="md:text-2xl text-base uppercase text-white lustria-font-loaded whitespace-nowrap">NEW FARO SPORT BNB</span>
    <div class="flex flex-col gap-1 md:items-end items-center">
      <p class="text-sm text-[#999]">&copy; {{ currentYear || '2026' }} New Faro Sport BNB. {{ $t('common.all_rights_reserved') }}</p>
      <p class="text-xs text-[#999]">
        {{ $t('common.created_by') }}
        <a href="https://www.linkedin.com/in/carlo-battista-05b926282/" target="_blank" class="border-b">Carlo Battista</a>
      </p>
    </div>
  </footer>
</template>

<script>
import { store } from '../../data/store';

export default {
  name: 'contentInfo',
  data() {
    return {
      currentYear: store.YEAR,
    };
  },
};
</script>

<style scoped></style>
