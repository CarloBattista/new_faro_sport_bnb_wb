<template>
  <div class="relative w-full h-[500px] group overflow-hidden rounded-xl">
    <!-- Slides -->
    <div class="flex h-full transition-transform duration-700 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(image, index) in images" :key="index" class="min-w-full h-full relative">
        <img :src="image" class="w-full h-full object-cover" alt="Slider Image" />
        <!-- Optional overlay for better contrast -->
        <div class="absolute inset-0 bg-black/10"></div>
      </div>
    </div>
    <!-- Navigation Arrows -->
    <button
      v-if="buttons && images.length > 1"
      @click="prev"
      class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110 z-10 cursor-pointer flex items-center justify-center"
      aria-label="Previous slide"
    >
      <ChevronLeft class="w-6 h-6" />
    </button>
    <button
      v-if="buttons && images.length > 1"
      @click="next"
      class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110 z-10 cursor-pointer flex items-center justify-center"
      aria-label="Next slide"
    >
      <ChevronRight class="w-6 h-6" />
    </button>
    <!-- Indicators -->
    <div v-if="pagination && images.length > 1" class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
      <button
        v-for="(_, index) in images"
        :key="index"
        @click="goTo(index)"
        class="w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-sm cursor-pointer"
        :class="currentIndex === index ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'"
        aria-label="Go to slide"
      ></button>
    </div>
  </div>
</template>

<script>
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';

export default {
  name: 'slider',
  components: {
    ChevronLeft,
    ChevronRight,
  },
  props: {
    images: {
      type: Array,
      required: true,
      default: () => [],
    },
    autoPlay: {
      type: Boolean,
      default: true,
    },
    interval: {
      type: Number,
      default: 5000,
    },
    pagination: {
      type: Boolean,
      default: true,
    },
    buttons: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
      timer: null,
    };
  },
  methods: {
    next() {
      this.stopTimer();
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
      if (this.autoPlay) this.startTimer();
    },
    prev() {
      this.stopTimer();
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.images.length - 1;
      }
      if (this.autoPlay) this.startTimer();
    },
    goTo(index) {
      this.stopTimer();
      this.currentIndex = index;
      if (this.autoPlay) this.startTimer();
    },
    startTimer() {
      this.stopTimer();
      this.timer = setInterval(() => {
        if (this.currentIndex < this.images.length - 1) {
          this.currentIndex++;
        } else {
          this.currentIndex = 0;
        }
      }, this.interval);
    },
    stopTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
  },
  mounted() {
    if (this.autoPlay && this.images.length > 1) {
      this.startTimer();
    }
  },
  beforeUnmount() {
    this.stopTimer();
  },
};
</script>

<style scoped></style>
