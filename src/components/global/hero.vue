<template>
  <div class="hero relative w-full" :class="'size-' + size">
    <img :src="image" alt="hero image" class="relative z-10 w-full h-full object-cover" />
    <div class="absolute z-20 top-0 left-0 w-full h-full bg-black opacity-50"></div>
    <div class="absolute z-50 bottom-0 left-0 w-full md:px-16 px-4 py-8 flex flex-col">
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
</style>
