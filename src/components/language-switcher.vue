<template>
  <div class="language-switcher">
    <button
      @click="toggleDropdown"
      class="language-button"
      :class="{ 'text-white': theme === 'dark', 'text-[#101828]': theme === 'light' }"
      :aria-label="$t('common.selectLanguage')"
    >
      <span class="flag">{{ currentFlag }}</span>
      <span class="language-code">{{ currentName }}</span>
    </button>

    <transition name="dropdown">
      <div v-if="isOpen" class="dropdown" :class="'position-' + dropdownPosition">
        <button
          v-for="lang in store.LANG.languages"
          :key="lang.code"
          @click="changeLanguage(lang.code)"
          class="dropdown-item"
          :class="{ active: store.LANG.current === lang.code }"
        >
          <span class="flag">{{ lang.flag }}</span>
          <span class="language-name">{{ lang.name }}</span>
          <svg v-if="store.LANG.current === lang.code" class="check-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
import { store } from '../data/store';

export default {
  name: 'language-switcher',
  props: {
    dropdownPosition: {
      type: String,
      default: 'bottom',
    },
    theme: {
      type: String,
      default: 'dark', // 'dark' (white text) or 'light' (dark text)
    },
  },
  data() {
    return {
      store,

      isOpen: false,
    };
  },
  computed: {
    currentFlag() {
      return this.store.LANG.languages.find((lang) => lang.code === this.store.LANG.current)?.flag || '';
    },
    currentName() {
      return (this.store.LANG.languages.find((lang) => lang.code === this.store.LANG.current)?.name || '').substring(0, 2);
    },
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    changeLanguage(code) {
      window.scrollTo(0, 0);
      this.store.LANG.current = code;
      this.$i18n.locale = code;
      localStorage.setItem('user-language', code);
      this.isOpen = false;
    },

    handleClickOutside(event) {
      const switcher = event.target.closest('.language-switcher');
      if (!switcher && this.isOpen) {
        this.isOpen = false;
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
};
</script>

<style scoped>
.language-switcher {
  position: relative;
}

.language-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  /* background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2); */
  border-radius: 0.4px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition-property: background-color, border-color;
  transition-duration: 300ms;
  transition-timing-function: ease;
}

.language-button:hover {
  background-color: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
}

.flag {
  font-size: 1.25rem;
  line-height: 1;
}

.language-code {
  font-weight: 600;
}

.chevron {
  transition: transform 300ms ease;
}

.chevron.rotate {
  transform: rotate(180deg);
}

.dropdown {
  position: absolute;
  /* bottom: calc(100% + 0.5rem); */
  right: 0;
  border-radius: 4px;
  min-width: 160px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  overflow: hidden;
  z-index: 1000;
}

.dropdown.position-top {
  bottom: calc(100% + 0.5rem);
  top: auto;
}

.dropdown.position-bottom {
  top: calc(100% + 0.5rem);
  bottom: auto;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;
  color: #fff;
  font-size: 0.875rem;
}

.dropdown-item:hover {
  background: rgba(255, 255, 255, 0.125);
}

.dropdown-item.active {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}

.language-name {
  flex: 1;
  text-align: left;
  font-weight: 500;
}

/* Dropdown transition */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 640px) {
  /* .language-code {
    display: none;
  } */

  .language-button {
    padding: 0.5rem;
  }
}
</style>
