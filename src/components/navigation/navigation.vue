<template>
  <header class="fixed z-9999 top-0 left-0 w-full md:px-16 px-4 md:py-8 py-2 flex items-center justify-between">
    <RouterLink
      to="/"
      class="md:text-2xl text-base uppercase lustria-font-loaded whitespace-nowrap transition-colors duration-300"
      :class="isDarkBg || isOpen ? 'text-white' : 'text-[#101828]'"
      >NEW FARO SPORT BNB
    </RouterLink>
    <div class="md:flex hidden lg:gap-8 gap-3 items-center">
      <RouterLink
        to="/"
        class="nav-item md:text-base text-sm lustria-font-loaded transition-colors duration-300"
        :class="isDarkBg ? 'text-white' : 'text-[#101828]'"
        >{{ $t('nav.home') }}</RouterLink
      >
      <RouterLink
        to="/gallery"
        class="nav-item md:text-base text-sm lustria-font-loaded transition-colors duration-300"
        :class="isDarkBg ? 'text-white' : 'text-[#101828]'"
        >{{ $t('nav.gallery') }}</RouterLink
      >
      <LanguageSwitcher :theme="isDarkBg ? 'dark' : 'light'" />
      <a href="tel:+393911412884">
        <buttonNf :variant="isDarkBg ? 'outlined' : 'primary'" :label="$t('nav.book_now')" />
      </a>
    </div>
    <div
      @click="isOpen = !isOpen"
      class="toggle-menu relative h-10 aspect-square md:hidden flex flex-col gap-2.5 items-center justify-center cursor-pointer"
      :class="{ open: isOpen, 'light-theme': !isDarkBg && !isOpen }"
    >
      <div class="menu-line first-line"></div>
      <div class="menu-line second-line"></div>
    </div>
    <Transition name="fade">
      <div v-if="isOpen" class="menu-mobile absolute -z-1 top-0 left-0 w-full h-svh md:block block bg-[#101828]">
        <div class="w-full md:h-[110px] h-[56px]"></div>
        <div class="w-full h-[calc(100%-56px)] md:px-16 px-4 md:pt-24 pt-16 pb-8 flex flex-col justify-between">
          <div class="flex flex-col gap-8">
            <RouterLink to="/" class="nav-item text-xl lustria-font-loaded text-white">{{ $t('nav.home') }}</RouterLink>
            <RouterLink to="/gallery" class="nav-item text-xl lustria-font-loaded text-white">{{ $t('nav.gallery') }}</RouterLink>
            <a href="tel:+393911412884" class="btn-item">
              <buttonNf variant="outlined" :label="$t('nav.book_now')" />
            </a>
          </div>
          <div class="w-full flex items-center gap-6">
            <a href="#" target="_blank" class="text-white text-sm font-normal">Instagram</a>
            <a href="#" target="_blank" class="text-white text-sm font-normal">Facebook</a>
            <LanguageSwitcher dropdownPosition="top" class="ml-auto" />
          </div>
        </div>
      </div>
    </Transition>
  </header>
  <div class="overlay-header"></div>
</template>

<script>
import buttonNf from '../button/button-nf.vue';
import LanguageSwitcher from '../language-switcher.vue';

export default {
  name: 'navigation',
  components: {
    buttonNf,
    LanguageSwitcher,
  },
  data() {
    return {
      isOpen: false,
      isDarkBg: true,
    };
  },
  methods: {
    handleScroll() {
      // Check center point at header height
      const x = window.innerWidth / 2;
      const y = 40; // Approx middle of header
      const elements = document.elementsFromPoint(x, y);

      for (const el of elements) {
        // check for data-theme attribute on element or closest parent
        const themeEl = el.closest('[data-theme]');
        if (themeEl) {
          const t = themeEl.getAttribute('data-theme');
          this.isDarkBg = t === 'dark';
          return;
        }
      }
    },
    handleResize() {
      if (window.innerWidth >= 768 && this.isOpen) {
        this.isOpen = false;
      }
    },
  },
  mounted() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style scoped>
.overlay-header {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  backdrop-filter: blur(20px);
  background-color: rgba(0, 0, 0, 0.2);
  mask: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%);
  opacity: 1;
}

.nav-item {
  /* color: #fff; Removed to allow dynamic color */
  font-weight: 500;
  opacity: 0.85;
  transition: opacity 200ms ease;
}

.nav-item:hover {
  opacity: 1;
}

.menu-line {
  position: relative;
  width: 32px;
  height: 1px;
  flex: none;
  background-color: #fff;
  transition: all 300ms ease;
}

.toggle-menu.light-theme .menu-line {
  background-color: #101828;
}

.toggle-menu .first-line,
.toggle-menu .second-line {
  transform: none;
  transform-origin: 50% 50% 0px;
  will-change: transform;
}

.toggle-menu.open .first-line {
  transform: rotate(45deg);
}

.toggle-menu.open .second-line {
  position: absolute;
  left: calc(50% - 32px / 2);
  top: calc(50% - 1px / 2);
  transform: rotate(-45deg);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 150ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.menu-mobile .nav-item,
.menu-mobile .btn-item {
  opacity: 0;
  animation: slide-fade 1s ease 0s forwards;
}

.menu-mobile .nav-item:nth-child(1) {
  animation-delay: 200ms;
}

.menu-mobile .nav-item:nth-child(2) {
  animation-delay: 300ms;
}

.menu-mobile .btn-item {
  animation-delay: 400ms;
}

@keyframes slide-fade {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
