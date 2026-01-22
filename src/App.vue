<template>
  <div>
    <RouterView />
  </div>
</template>

<script>
import { store } from './data/store';

export default {
  name: 'App',
  data() {
    return {
      store,
    };
  },
  methods: {
    setLanguage() {
      const storedLang = localStorage.getItem('user-language');

      if (storedLang) {
        this.store.LANG.current = storedLang;
      }
    },
  },
  mounted() {
    this.setLanguage();
  },
};
</script>

<style></style>
