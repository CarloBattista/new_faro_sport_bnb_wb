<template>
  <div class="hero relative w-full overflow-hidden" :class="'size-' + size">
    <img :src="image" :alt="title || 'New Faro Sport BNB'" class="hero-image relative z-10 w-full h-full object-cover" />
    <div class="hero-overlay absolute z-20 top-0 left-0 w-full h-full bg-black opacity-50"></div>
    <div class="hero-text absolute z-50 bottom-0 left-0 w-full md:px-16 px-4 py-8 flex flex-col">
      <h1 class="text-white md:text-5xl text-3xl lustria-font-loaded lg:w-[70%] md:w-[90%] w-full">{{ title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hero',
  props: {
    size: {
      type: String,
      default: 'full',
    },
    image: String,
    title: String,
  },
};
</script>

<style scoped>
.hero.size-full {
  height: 100svh;
}

.hero.size-min {
  height: 65svh;
}

.hero-image,
.hero-overlay {
  animation: appear 550ms cubic-bezier(0.215, 0.61, 0.355, 1) 1 normal forwards;
}

.hero-text {
  animation: appear-text 750ms cubic-bezier(0.215, 0.61, 0.355, 1) 1 normal forwards;
}

@keyframes appear {
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
}

@keyframes appear-text {
  0% {
    transform: translateY(100%) scale(0.9);
    filter: blur(50px);
  }
  100% {
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}
</style>
